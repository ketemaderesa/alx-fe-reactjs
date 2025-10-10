import { Navigate } from 'react-router-dom';

function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/" replace />; // Redirect if not logged in
  }
  return children;
}

export default ProtectedRoute;
