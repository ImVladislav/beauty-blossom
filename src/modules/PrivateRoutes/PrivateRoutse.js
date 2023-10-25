
import { Navigate, Route, useNavigate } from 'react-router-dom';

import { isAdminSelector, loggedInSelector, refreshSelector } from '../../redux/auth/selectors';
import { useSelector } from 'react-redux';



export const PrivateRoute = ({
  component: Component,
  ...routeProps
}) => {
  const isLoggedIn = useSelector(loggedInSelector);
  const isRefreshing = useSelector(refreshSelector);

  const shouldRedirect = !isRefreshing && !isLoggedIn;

  return shouldRedirect ? <Navigate {...routeProps} /> : <Component />;
};

export const PrivateAdminRoute = ({
  component: Component,
  ...routeProps
}) => {
  const admin = useSelector(isAdminSelector);
  const isRefreshing = useSelector(refreshSelector)

  const shouldRedirect = !isRefreshing && !admin;

  return shouldRedirect ? <Navigate {...routeProps} /> : <Component />;    
   
};