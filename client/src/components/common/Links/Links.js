import {Link} from "react-router-dom";
import "../common.css";

const MappedLinks = ({links}) => {
   return links.map(link =>
      <li key={link.url} className="nav-list-item">
         <Link to={link.url} className="nav-list-link">{link.text}</Link>
      </li>);
}

export default MappedLinks;