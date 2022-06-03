import {Navigation} from "../Navigation";
import {UserStateLinks} from "../UserStateLinks";
import "./Header.css";

const Header = () => {
   return <header id="app-header">
      <div id="header-logo">
         <img src="" alt="Application Logo"/>
      </div>
      <Navigation/>
      <UserStateLinks/>
   </header>
}

export default Header;