import {registerLink, loginLink, profileLink, logoutLink} from "../../../services/links/account";
import {LinksList} from "../LinksList";
import "../common.css";

const UserStateLinks = () => {
   const userState = {
      isAuthenticated: false
   }

   const authenticatedLinks = [
      profileLink,
      logoutLink
   ]

   const guestLinks = [
      registerLink,
      loginLink
   ]

   const links = userState.isAuthenticated
      ? authenticatedLinks
      : guestLinks;

   return <LinksList links={links}/>
}

export default UserStateLinks;