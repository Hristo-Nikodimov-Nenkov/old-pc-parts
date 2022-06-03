import {matchPath, matchRoutes, useLocation} from "react-router-dom"
import {getRouteLinks, homeLink, routes} from "../services/routes";

const useCurrentPathLinks = () => {
   const location = useLocation();
   try {
      const [{route}] = matchRoutes(routes, location);
      const match = matchPath(route, location.pathname);
      const routeLinks = getRouteLinks(route.links, match.params);
      return routeLinks.length > 0 ? routeLinks : [homeLink];
   } catch (err) {
      return [homeLink];
   }
}

export default useCurrentPathLinks;