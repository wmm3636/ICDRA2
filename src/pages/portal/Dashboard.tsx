import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { User, FileText, CheckCircle, XCircle, Clock, BarChart3 } from "lucide-react";

interface RegistrationStats {
  total: number;
  stats: {
    PENDING?: number;
    APPROVED?: number;
    REJECTED?: number;
  };
}

const Dashboard = () => {
  const userData = localStorage.getItem('user');
  const user = userData ? JSON.parse(userData) : null;
  const [registrationStats, setRegistrationStats] = useState<RegistrationStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRegistrationStats = async () => {
      try {
        const token = localStorage.getItem('authToken');
        const response = await fetch('/api/registrations/stats', {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });

        if (response.ok) {
          const data = await response.json();
          setRegistrationStats(data.stats);
        }
      } catch (error) {
        console.error('Error fetching registration stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchRegistrationStats();
  }, []);

  const getStatCardData = () => {
    if (!registrationStats) return [];

    return [
      {
        title: 'Total Registrations',
        value: registrationStats.total,
        icon: FileText,
        color: 'text-blue-600',
        bgColor: 'bg-blue-100'
      },
      {
        title: 'Pending Review',
        value: registrationStats.stats.PENDING || 0,
        icon: Clock,
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-100'
      },
      {
        title: 'Approved',
        value: registrationStats.stats.APPROVED || 0,
        icon: CheckCircle,
        color: 'text-green-600',
        bgColor: 'bg-green-100'
      },
      {
        title: 'Rejected',
        value: registrationStats.stats.REJECTED || 0,
        icon: XCircle,
        color: 'text-red-600',
        bgColor: 'bg-red-100'
      }
    ];
  };

  return (
    <div className="p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Welcome, {user?.firstName}!
        </h1>
        <p className="text-gray-600">
          ICDRA 2025 Conference Portal
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {loading ? (
          Array.from({ length: 4 }).map((_, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="animate-pulse">
                  <div className="flex items-center justify-between mb-2">
                    <div className="h-4 bg-gray-200 rounded w-20"></div>
                    <div className="h-8 w-8 bg-gray-200 rounded"></div>
                  </div>
                  <div className="h-8 bg-gray-200 rounded w-16"></div>
                </div>
              </CardContent>
            </Card>
          ))
        ) : (
          getStatCardData().map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <div className={`p-2 rounded-full ${stat.bgColor}`}>
                      <Icon className={`w-4 h-4 ${stat.color}`} />
                    </div>
                  </div>
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Your Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div>
              <label className="text-sm font-medium text-gray-500">Name</label>
              <p className="text-lg">{user?.firstName} {user?.lastName}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">Email</label>
              <p className="text-lg">{user?.email}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-gray-500">User Type</label>
              <p className="text-lg">
                <Badge variant={user?.userType === 'ADMIN' ? 'default' : 'secondary'}>
                  {user?.userType}
                </Badge>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BarChart3 className="w-5 h-5" />
              Conference Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div>
                <label className="text-sm font-medium text-gray-500">Conference</label>
                <p className="text-lg">ICDRA 2025</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Location</label>
                <p className="text-lg">Riyadh, Saudi Arabia</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Dates</label>
                <p className="text-lg">October 15-17, 2025</p>
              </div>
              {registrationStats && (
                <div className="pt-2 border-t">
                  <label className="text-sm font-medium text-gray-500">Registration Progress</label>
                  <div className="mt-2">
                    <div className="flex justify-between text-sm text-gray-600 mb-1">
                      <span>Processed</span>
                      <span>
                        {((registrationStats.stats.APPROVED || 0) + (registrationStats.stats.REJECTED || 0))} / {registrationStats.total}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-emerald-600 h-2 rounded-full transition-all duration-300" 
                        style={{ 
                          width: `${registrationStats.total > 0 ? 
                            (((registrationStats.stats.APPROVED || 0) + (registrationStats.stats.REJECTED || 0)) / registrationStats.total) * 100 
                            : 0}%` 
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;