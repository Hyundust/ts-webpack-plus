import { useSelector } from "react-redux";
import { getUserData } from "entyes/User";
import { Route, useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { RoutePath } from "shared/config/routeConfig/routeConfig";


export function RequireAuth({ children }: { children: JSX.Element }) {
    let isAuth = useSelector(getUserData);
    let location = useLocation();
  
    if (!isAuth) {
      // Redirect them to the /login page, but save the current location they were
      // trying to go to when they were redirected. This allows us to send them
      // along to that page after they login, which is a nicer user experience
      // than dropping them off on the home page.
      return <Navigate to={RoutePath.main} state={{ from: location }} replace />;
    }
  
    return children;
  }

