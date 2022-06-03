import Home from "./Home";
import About from "./About";
import NotFound from "./NotFound";
import Account from "./Account";
import Parts from "./Parts";

export {default as Home} from "./Home";
export {default as About} from "./About";
export {default as Account} from "./Account";
export {default as Parts} from "./Parts"
export {default as NotFound} from "./NotFound";

const pageComponents = {
   Home,
   About,
   NotFound,
   Account,
   Parts
}

export default pageComponents;