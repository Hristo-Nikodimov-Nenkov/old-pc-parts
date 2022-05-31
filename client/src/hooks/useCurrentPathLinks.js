import {matchPath, matchRoutes, useLocation} from "react-router-dom"
import routes, {getRouteLinks} from "../services/routes";

const useCurrentPathLinks = () => {
   const location = useLocation();
   try {
      const [{route}] = matchRoutes(routes, location);
      const match = matchPath(route, location.pathname);

      const routeLinks = getRouteLinks(route.links, match.params);

      return routeLinks.length > 0 ? routeLinks : [];

   } catch (err) {
      return [];
   }
}

export default useCurrentPathLinks;