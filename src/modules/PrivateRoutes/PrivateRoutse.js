
import { Navigate } from 'react-router-dom';

import { loggedInSelector, refreshSelector } from '../../redux/auth/selectors';
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