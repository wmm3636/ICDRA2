import { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Trash2, CheckCircle, Clock, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import DataTable, { Column, Action } from "@/components/ui/DataTable";
import SearchFilter, { FilterOption } from "@/components/ui/SearchFilter";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ContactRequest {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

const Enquiries = () => {
  const [enquiries, setEnquiries] = useState<ContactRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const [selectedEnquiry, setSelectedEnquiry] = useState<ContactRequest | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { toast } = useToast();

  const statusOptions: FilterOption[] = [
    { value: 'NEW', label: 'New' },
    { value: 'WAITING_FOR_REPLY', label: 'Waiting for Reply' },
    { value: 'RESOLVED', label: 'Resolved' }
  ];

  const fetchEnquiries = useCallback(async (search = '', status = '') => {
    try {
      setLoading(true);
      const token = localStorage.getItem('authToken');
      const params = new URLSearchParams();
      if (search) params.append('search', search);
      if (status) params.append('status', status);

      const response = await fetch(`/api/contact?${params.toString()}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (response.ok) {
        setEnquiries(data.contactRequests);
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({
        title: "Error loading enquiries",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchEnquiries();
  }, [fetchEnquiries]);

  const handleSearch = useCallback((search: string, filter: string) => {
    setSearchTerm(search);
    setFilterValue(filter);
    fetchEnquiries(search, filter);
  }, [fetchEnquiries]);

  const handleStatusChange = async (enquiry: ContactRequest, newStatus: string) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/contact/${enquiry.id}/status`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });

      const data = await response.json();
      if (response.ok) {
        toast({
          title: "Status updated",
          description: `Enquiry status changed to ${newStatus.toLowerCase().replace('_', ' ')}.`,
        });
        fetchEnquiries(searchTerm, filterValue);
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({
        title: "Error updating status",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleDeleteEnquiry = async (enquiry: ContactRequest) => {
    if (!window.confirm(`Are you sure you want to delete the enquiry from ${enquiry.name}?`)) {
      return;
    }

    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/contact/${enquiry.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (response.ok) {
        toast({
          title: "Enquiry deleted",
          description: `Enquiry from ${enquiry.name} has been removed.`,
        });
        fetchEnquiries(searchTerm, filterValue);
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({
        title: "Error deleting enquiry",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'NEW':
        return <Badge variant="default" className="bg-blue-100 text-blue-800">New</Badge>;
      case 'WAITING_FOR_REPLY':
        return <Badge variant="secondary" className="bg-yellow-100 text-yellow-800">Waiting for Reply</Badge>;
      case 'RESOLVED':
        return <Badge variant="secondary" className="bg-green-100 text-green-800">Resolved</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const columns: Column[] = [
    {
      key: 'name',
      label: 'Name'
    },
    {
      key: 'email',
      label: 'Email'
    },
    {
      key: 'subject',
      label: 'Subject',
      render: (value) => (
        <div className="max-w-xs truncate" title={value}>
          {value}
        </div>
      )
    },
    {
      key: 'status',
      label: 'Status',
      render: (value) => getStatusBadge(value)
    },
    {
      key: 'createdAt',
      label: 'Received',
      render: (value) => new Date(value).toLocaleDateString()
    }
  ];

  const handleViewMessage = (enquiry: ContactRequest) => {
    setSelectedEnquiry(enquiry);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedEnquiry(null);
  };

  const getActionsForRow = (enquiry: ContactRequest): Action[] => {
    const actions: Action[] = [];
    actions.push({
      label: 'View Message',
      onClick: () => handleViewMessage(enquiry)
    });
    if (enquiry.status !== 'WAITING_FOR_REPLY') {
      actions.push({
        label: 'Mark as Waiting for Reply',
        onClick: () => handleStatusChange(enquiry, 'WAITING_FOR_REPLY')
      });
    }

    if (enquiry.status !== 'RESOLVED') {
      actions.push({
        label: 'Mark as Resolved',
        onClick: () => handleStatusChange(enquiry, 'RESOLVED')
      });
    }

    if (enquiry.status !== 'NEW') {
      actions.push({
        label: 'Mark as New',
        onClick: () => handleStatusChange(enquiry, 'NEW')
      });
    }
    actions.push({
      label: 'Delete',
      onClick: () => handleDeleteEnquiry(enquiry),
      variant: 'destructive'
    });

    return actions;
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Enquiries Management</h1>
          <p className="text-gray-600">Manage contact requests and enquiries</p>
        </div>
      </div>

      <SearchFilter
        searchPlaceholder="Search by name, email, or subject..."
        filterOptions={statusOptions}
        filterLabel="Status"
        onSearch={handleSearch}
        initialSearch={searchTerm}
        initialFilter={filterValue}
      />

      <DataTable
        title={`Enquiries (${enquiries.length})`}
        data={enquiries}
        columns={columns}
        actions={getActionsForRow}
        loading={loading}
        emptyMessage="No enquiries found matching your criteria"
        onRowClick={handleViewMessage}
      />
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Enquiry Details</DialogTitle>
          </DialogHeader>
          
          {selectedEnquiry && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <label className="text-sm font-medium text-gray-500">Name</label>
                  <p className="text-gray-900">{selectedEnquiry.name}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <p className="text-gray-900">{selectedEnquiry.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Status</label>
                  <div className="mt-1">
                    {getStatusBadge(selectedEnquiry.status)}
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Received</label>
                  <p className="text-gray-900">
                    {new Date(selectedEnquiry.createdAt).toLocaleDateString()} at{' '}
                    {new Date(selectedEnquiry.createdAt).toLocaleTimeString()}
                  </p>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500">Subject</label>
                <p className="text-gray-900 font-medium mt-1">{selectedEnquiry.subject}</p>
              </div>

              <div>
                <label className="text-sm font-medium text-gray-500">Message</label>
                <div className="mt-2 p-4 border border-gray-200 rounded-lg bg-white">
                  <p className="text-gray-900 whitespace-pre-wrap leading-relaxed">
                    {selectedEnquiry.message}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 pt-4 border-t">
                <span className="text-sm font-medium text-gray-500 mr-2">Quick Actions:</span>
                {selectedEnquiry.status !== 'WAITING_FOR_REPLY' && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      handleStatusChange(selectedEnquiry, 'WAITING_FOR_REPLY');
                      handleCloseModal();
                    }}
                  >
                    <Clock className="w-4 h-4 mr-1" />
                    Mark as Waiting for Reply
                  </Button>
                )}
                {selectedEnquiry.status !== 'RESOLVED' && (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      handleStatusChange(selectedEnquiry, 'RESOLVED');
                      handleCloseModal();
                    }}
                  >
                    <CheckCircle className="w-4 h-4 mr-1" />
                    Mark as Resolved
                  </Button>
                )}
                <Button
                  size="sm"
                  variant="outline"
                  onClick={() => window.open(`mailto:${selectedEnquiry.email}?subject=Re: ${selectedEnquiry.subject}`)}
                >
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Reply via Email
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Enquiries;