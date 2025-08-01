import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  userType: string;
}

interface PortalLayoutProps {
  user: User;
}

const PortalLayout = ({ user }: PortalLayoutProps) => {
  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar userType={user.userType} />
      <main className="flex-1 overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default PortalLayout;