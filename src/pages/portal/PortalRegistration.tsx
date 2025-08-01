import { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import DataTable, { Column, Action } from "@/components/ui/DataTable";
import SearchFilter, { FilterOption } from "@/components/ui/SearchFilter";
import EditRegistrationForm from "@/components/portal/EditRegistrationForm";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface Registration {
  id: string;
  familyName: string;
  firstName: string;
  email: string;
  nationality: string;
  countryOfWork: string;
  companyOrganization: string;
  organizationType: string;
  registrationType: string;
  decision: string;
  createdAt: string;
}

const PortalRegistration = () => {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingRegistration, setEditingRegistration] = useState<string | null>(null);
  const [selectedRegistration, setSelectedRegistration] = useState<Registration | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const { toast } = useToast();

  const userData = localStorage.getItem('user');
  const currentUser = userData ? JSON.parse(userData) : null;
  const userType = currentUser?.userType;

  const statusOptions: FilterOption[] = [
    { value: 'PENDING', label: 'Pending' },
    { value: 'APPROVED', label: 'Approved' },
    { value: 'REJECTED', label: 'Rejected' }
  ];

  const fetchRegistrations = useCallback(async (search = '', status = '') => {
    try {
      setLoading(true);
      const token = localStorage.getItem('authToken');
      const params = new URLSearchParams();
      if (search) params.append('search', search);
      if (status) params.append('decision', status);

      const response = await fetch(`/api/registrations?${params.toString()}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (response.ok) {
        setRegistrations(data.registrations);
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({
        title: "Error loading registrations",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchRegistrations();
  }, [fetchRegistrations]);

  const handleSearch = useCallback((search: string, filter: string) => {
    setSearchTerm(search);
    setFilterValue(filter);
    fetchRegistrations(search, filter);
  }, [fetchRegistrations]);

  const handleApprove = async (registration: Registration) => {
    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/registrations/${registration.id}/decision`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ decision: 'APPROVED' })
      });

      const data = await response.json();
      if (response.ok) {
        toast({
          title: "Registration approved",
          description: `${registration.firstName} ${registration.familyName}'s registration has been approved.`,
        });
        fetchRegistrations(searchTerm, filterValue);
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({
        title: "Error approving registration",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleReject = async (registration: Registration) => {
    if (!window.confirm(`Are you sure you want to reject ${registration.firstName} ${registration.familyName}'s registration?`)) {
      return;
    }

    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/registrations/${registration.id}/decision`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ decision: 'REJECTED' })
      });

      const data = await response.json();
      if (response.ok) {
        toast({
          title: "Registration rejected",
          description: `${registration.firstName} ${registration.familyName}'s registration has been rejected.`,
        });
        fetchRegistrations(searchTerm, filterValue);
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({
        title: "Error rejecting registration",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleEdit = (registration: Registration) => {
    setEditingRegistration(registration.id);
  };

  const handleDelete = async (registration: Registration) => {
    if (!window.confirm(`Are you sure you want to delete ${registration.firstName} ${registration.familyName}'s registration? This action cannot be undone.`)) {
      return;
    }

    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/registrations/${registration.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (response.ok) {
        toast({
          title: "Registration deleted",
          description: `${registration.firstName} ${registration.familyName}'s registration has been removed.`,
        });
        fetchRegistrations(searchTerm, filterValue);
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({
        title: "Error deleting registration",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleFormSuccess = () => {
    setEditingRegistration(null);
    fetchRegistrations(searchTerm, filterValue);
  };

  const handleFormCancel = () => {
    setEditingRegistration(null);
  };

  const handleViewRegistration = (registration: Registration) => {
    setSelectedRegistration(registration);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedRegistration(null);
  };

  const formatReferenceNumber = (id: string): string => {
    return id.substring(0, 8).toUpperCase();
  };

  const formatRegistrationType = (type: string) => {
    const typeMap: Record<string, string> = {
      'PRE_ICDRA_ONLY': 'Pre-ICDRA Only',
      'PRE_ICDRA_AND_ICDRA_COMBINED': 'Pre-ICDRA & ICDRA',
      'ICDRA_ONLY': 'ICDRA Only'
    };
    return typeMap[type] || type;
  };

  const getStatusBadgeVariant = (status: string) => {
    switch (status) {
      case 'APPROVED':
        return 'default';
      case 'REJECTED':
        return 'destructive';
      case 'PENDING':
      default:
        return 'secondary';
    }
  };

  const getActionsForRegistration = (registration: Registration): Action[] => {
    const actions: Action[] = [];

    actions.push({
      label: 'View Details',
      onClick: () => handleViewRegistration(registration)
    });

    if (userType === 'WHO' && registration.decision === 'PENDING') {
      actions.push({
        label: 'Approve',
        onClick: () => handleApprove(registration)
      });
      actions.push({
        label: 'Reject',
        onClick: () => handleReject(registration),
        variant: 'destructive'
      });
    }

    if (userType === 'ADMIN' || userType === 'INTERNAL') {
      actions.push({
        label: 'Edit',
        onClick: () => handleEdit(registration)
      });
      actions.push({
        label: 'Delete',
        onClick: () => handleDelete(registration),
        variant: 'destructive'
      });
    }

    return actions;
  };

  const columns: Column[] = [
    {
      key: 'name',
      label: 'Name',
      render: (_, row) => `${row.firstName} ${row.familyName}`
    },
    {
      key: 'email',
      label: 'Email'
    },
    {
      key: 'companyOrganization',
      label: 'Organization'
    },
    {
      key: 'countryOfWork',
      label: 'Country'
    },
    {
      key: 'registrationType',
      label: 'Type',
      render: (value) => (
        <span className="text-sm text-gray-600">
          {formatRegistrationType(value)}
        </span>
      )
    },
    {
      key: 'id',
      label: 'Reference',
      render: (value) => (
        <span className="text-sm font-mono text-blue-600">
          {formatReferenceNumber(value)}
        </span>
      )
    },
    {
      key: 'decision',
      label: 'Status',
      render: (value) => (
        <Badge variant={getStatusBadgeVariant(value)}>
          {value.charAt(0) + value.slice(1).toLowerCase()}
        </Badge>
      )
    },
    {
      key: 'createdAt',
      label: 'Submitted',
      render: (value) => new Date(value).toLocaleDateString()
    }
  ];

  if (editingRegistration) {
    return (
      <div className="p-6">
        <EditRegistrationForm
          registrationId={editingRegistration}
          onSuccess={handleFormSuccess}
          onCancel={handleFormCancel}
        />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Registration Management</h1>
        <p className="text-gray-600">Review and manage conference registrations</p>
      </div>

      <SearchFilter
        searchPlaceholder="Search by name, email, or organization..."
        filterOptions={statusOptions}
        filterLabel="Status"
        onSearch={handleSearch}
        initialSearch={searchTerm}
        initialFilter={filterValue}
      />

      <DataTable
        title={`Registrations (${registrations.length})`}
        data={registrations}
        columns={columns}
        actions={getActionsForRegistration}
        loading={loading}
        emptyMessage="No registrations found matching your criteria"
        onRowClick={handleViewRegistration}
      />

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle>Registration Details</DialogTitle>
          </DialogHeader>
          
          {selectedRegistration && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 bg-gray-50 rounded-lg">
                <div>
                  <label className="text-sm font-medium text-gray-500">Family Name</label>
                  <p className="text-gray-900">{selectedRegistration.familyName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">First Name</label>
                  <p className="text-gray-900">{selectedRegistration.firstName}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Email</label>
                  <p className="text-gray-900">{selectedRegistration.email}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Reference Number</label>
                  <p className="text-gray-900 font-mono text-blue-600">{formatReferenceNumber(selectedRegistration.id)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Nationality</label>
                  <p className="text-gray-900">{selectedRegistration.nationality}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Country of Work</label>
                  <p className="text-gray-900">{selectedRegistration.countryOfWork}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Registration Type</label>
                  <p className="text-gray-900">{formatRegistrationType(selectedRegistration.registrationType)}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Status</label>
                  <div className="mt-1">
                    <Badge variant={getStatusBadgeVariant(selectedRegistration.decision)}>
                      {selectedRegistration.decision.charAt(0) + selectedRegistration.decision.slice(1).toLowerCase()}
                    </Badge>
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Submitted</label>
                  <p className="text-gray-900">
                    {new Date(selectedRegistration.createdAt).toLocaleDateString()} at{' '}
                    {new Date(selectedRegistration.createdAt).toLocaleTimeString()}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Company/Organization</label>
                  <p className="text-gray-900 mt-1">{selectedRegistration.companyOrganization}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Organization Type</label>
                  <p className="text-gray-900 mt-1">{selectedRegistration.organizationType}</p>
                </div>
              </div>

              {(userType === 'WHO' && selectedRegistration.decision === 'PENDING') && (
                <div className="flex flex-wrap gap-2 pt-4 border-t">
                  <span className="text-sm font-medium text-gray-500 mr-2">Quick Actions:</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      handleApprove(selectedRegistration);
                      handleCloseModal();
                    }}
                  >
                    Approve Registration
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      handleReject(selectedRegistration);
                      handleCloseModal();
                    }}
                  >
                    Reject Registration
                  </Button>
                </div>
              )}

              {(userType === 'ADMIN' || userType === 'INTERNAL') && (
                <div className="flex flex-wrap gap-2 pt-4 border-t">
                  <span className="text-sm font-medium text-gray-500 mr-2">Quick Actions:</span>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      handleEdit(selectedRegistration);
                      handleCloseModal();
                    }}
                  >
                    Edit Registration
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => {
                      handleDelete(selectedRegistration);
                      handleCloseModal();
                    }}
                  >
                    Delete Registration
                  </Button>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default PortalRegistration;