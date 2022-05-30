import {Routes, Route} from "react-router-dom";
import {Home} from "./components/pages";
import {Footer, Header} from "./components/common";
import './App.css';

function App() {
   return <>
      <Header/>
      <Routes>
         <Route index element={<Home/>}/>
      </Routes>
      <Footer/>
   </>
}

export default App;