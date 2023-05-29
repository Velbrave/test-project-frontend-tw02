import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { authData } from '../../redux/selectors';

const PrivateRoute = () => {
  const data = useSelector(authData);
  // return data ? <Outlet /> : <Navigate to="/login" />;
  return data ? <Navigate to="/login" /> : <Outlet />;
};

export default PrivateRoute;
