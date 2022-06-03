import useCurrentPathLinks from "../../../hooks/useCurrentPathLinks";
import {LinksList} from "../LinksList";

const Navigation = () => {
   const navLinks = useCurrentPathLinks();

   return <LinksList links={navLinks}/>
}

export default Navigation;