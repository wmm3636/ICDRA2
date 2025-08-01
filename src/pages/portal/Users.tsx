import { useState, useEffect, useCallback } from 'react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Plus, Edit, Trash2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import DataTable, { Column, Action } from "@/components/ui/DataTable";
import SearchFilter, { FilterOption } from "@/components/ui/SearchFilter";
import AddUserForm from "@/components/portal/AddUserForm";
import EditUserForm from "@/components/portal/EditUserForm";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  userType: string;
  address: {
    street: string;
    zip: string;
    city: string;
    state: string;
    country: string;
  };
  createdAt: string;
}

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingUser, setEditingUser] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterValue, setFilterValue] = useState('');
  const { toast } = useToast();

  const userTypeOptions: FilterOption[] = [
    { value: 'ADMIN', label: 'Admin' },
    { value: 'INTERNAL', label: 'Internal' },
    { value: 'WHO', label: 'WHO' }
  ];

  const fetchUsers = useCallback(async (search = '', userType = '') => {
    try {
      setLoading(true);
      const token = localStorage.getItem('authToken');
      const params = new URLSearchParams();
      if (search) params.append('search', search);
      if (userType) params.append('userType', userType);

      const response = await fetch(`/api/users?${params.toString()}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (response.ok) {
        setUsers(data.users);
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({
        title: "Error loading users",
        description: error.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }, [toast]);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const handleSearch = useCallback((search: string, filter: string) => {
    setSearchTerm(search);
    setFilterValue(filter);
    fetchUsers(search, filter);
  }, [fetchUsers]);

  const handleDeleteUser = async (user: User) => {
    if (!window.confirm(`Are you sure you want to delete ${user.firstName} ${user.lastName}?`)) {
      return;
    }

    try {
      const token = localStorage.getItem('authToken');
      const response = await fetch(`/api/users/${user.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      const data = await response.json();
      if (response.ok) {
        toast({
          title: "User deleted",
          description: `${user.firstName} ${user.lastName} has been removed.`,
        });
        fetchUsers(searchTerm, filterValue);
      } else {
        throw new Error(data.error);
      }
    } catch (error: any) {
      toast({
        title: "Error deleting user",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user.id);
  };

  const handleFormSuccess = () => {
    setShowAddForm(false);
    setEditingUser(null);
    fetchUsers(searchTerm, filterValue);
  };

  const handleFormCancel = () => {
    setShowAddForm(false);
    setEditingUser(null);
  };

  const columns: Column[] = [
    {
      key: 'name',
      label: 'Name',
      render: (_, row) => `${row.firstName} ${row.lastName}`
    },
    {
      key: 'email',
      label: 'Email'
    },
    {
      key: 'userType',
      label: 'Type',
      render: (value) => (
        <Badge variant={value === 'ADMIN' ? 'default' : 'secondary'}>
          {value}
        </Badge>
      )
    },
    {
      key: 'address',
      label: 'Location',
      render: (value) => `${value.city}, ${value.country}`
    },
    {
      key: 'createdAt',
      label: 'Created',
      render: (value) => new Date(value).toLocaleDateString()
    }
  ];

  const actions: Action[] = [
    {
      label: 'Edit',
      onClick: handleEditUser
    },
    {
      label: 'Delete',
      onClick: handleDeleteUser,
      variant: 'destructive'
    }
  ];

  if (showAddForm) {
    return (
      <div className="p-6">
        <AddUserForm
          onSuccess={handleFormSuccess}
          onCancel={handleFormCancel}
        />
      </div>
    );
  }

  if (editingUser) {
    return (
      <div className="p-6">
        <EditUserForm
          userId={editingUser}
          onSuccess={handleFormSuccess}
          onCancel={handleFormCancel}
        />
      </div>
    );
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
          <p className="text-gray-600">Manage system users and their permissions</p>
        </div>
        <Button onClick={() => setShowAddForm(true)}>
          <Plus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      <SearchFilter
        searchPlaceholder="Search by name or email..."
        filterOptions={userTypeOptions}
        filterLabel="User Type"
        onSearch={handleSearch}
        initialSearch={searchTerm}
        initialFilter={filterValue}
      />

      <DataTable
        title={`Users (${users.length})`}
        data={users}
        columns={columns}
        actions={actions}
        loading={loading}
        emptyMessage="No users found matching your criteria"
      />
    </div>
  );
};

export default Users;