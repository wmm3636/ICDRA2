import { NavLink, useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Users, FileText, User, LogOut, Home, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";

interface SidebarProps {
  userType: string;
}

const Sidebar = ({ userType }: SidebarProps) => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSignOut = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('user');
    toast({
      title: "Signed out successfully",
      description: "You have been logged out of your account.",
    });
    navigate('/');
  };

  const menuItems = [
    {
      path: '/portal',
      label: 'Dashboard',
      icon: Home,
      visible: true,
    },
    {
      path: '/portal/users',
      label: 'Users',
      icon: Users,
      visible: userType === 'ADMIN',
    },
    {
      path: '/portal/enquiries',
      label: 'Enquiries',
      icon: MessageSquare,
      visible: userType === 'ADMIN' || userType === 'INTERNAL',
    },
    {
      path: '/portal/registrations',
      label: 'Registration',
      icon: FileText,
      visible: true,
    },
    {
      path: '/portal/account',
      label: 'Account',
      icon: User,
      visible: true,
    },
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-xl font-bold text-emerald-600">ICDRA 2026</h2>
        <p className="text-sm text-gray-500">Portal</p>
      </div>

      <nav className="flex-1 p-4 space-y-2">
        {menuItems
          .filter(item => item.visible)
          .map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === '/portal'}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                    isActive
                      ? "bg-emerald-100 text-emerald-700"
                      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                  )
                }
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </NavLink>
            );
          })}
      </nav>

      <div className="p-4 border-t border-gray-200">
        <Button
          onClick={handleSignOut}
          variant="outline"
          className="w-full justify-start"
        >
          <LogOut className="w-4 h-4 mr-2" />
          Sign Out
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;