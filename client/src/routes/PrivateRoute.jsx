import React, { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export default function PrivateRoute() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) navigate('/login');
  }, [navigate]);

  return <Outlet />;
}
