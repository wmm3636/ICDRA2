import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PortalLayout from '@/components/portal/PortalLayout';

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  userType: string;
}

const Portal = () => {
  const [user, setUser] = useState<User | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    const userData = localStorage.getItem('user');

    if (!token || !userData) {
      navigate('/signin');
      return;
    }

    try {
      const parsedUser = JSON.parse(userData);
      setUser(parsedUser);
    } catch (error) {
      console.error('Error parsing user data:', error);
      localStorage.removeItem('authToken');
      localStorage.removeItem('user');
      navigate('/signin');
    }
  }, [navigate]);

  if (!user) {
    return null;
  }

  return <PortalLayout user={user} />;
};

export default Portal;