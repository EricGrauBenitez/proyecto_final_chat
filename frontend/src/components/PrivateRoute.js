import { useMemo, useState } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const PrivateRoute = ({ children }) => {
  const { userData } = useAuth();
  const [token, setToken] = useState(localStorage.getItem("token"))

  const isLoggedIn = useMemo(() => {
    if (token || userData) return true
    return false
  }, [token, userData])

  return isLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
