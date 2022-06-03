import {Links} from "../Links";

const LinksList = ({links}) => {
   return <ul className="nav-list">
      <Links links={links}/>
   </ul>
}

export default LinksList;