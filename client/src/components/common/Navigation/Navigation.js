import useCurrentPathLinks from "../../../hooks/useCurrentPathLinks";
import {Link} from "react-router-dom";

const Navigation = () => {
   const navLinks = useCurrentPathLinks();
   const showLinks = navLinks.length > 0;

   const mappedLinks = navLinks.map(l => <li key={l.url}>
      <Link to={l.link}>{l.text}</Link>
   </li>)

   return <nav>
      {showLinks && <ul>
         {mappedLinks}
      </ul>}
   </nav>
}

export default Navigation;