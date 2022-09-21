import { Navigate } from 'react-router-dom';
import Dashboard from '../pages/dashboard';

export default function PrivateRoute() {
  // Check if authorized
  const auth = null;
  // If not authorized, show element to sign in page
  return auth ? <Dashboard /> : <Navigate to="/signin" />;
}