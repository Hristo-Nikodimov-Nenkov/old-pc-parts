import {Routes, Route} from "react-router-dom";
import {About, Home} from "./components/pages";
import {Footer, Header} from "./components/common";
import './App.css';

function App() {
   return <>
      <Header/>
      <Routes className="content">
         <Route index element={<Home/>}/>
         <Route path="/about" element={<About/>}/>
      </Routes>
      <Footer/>
   </>
}

export default App;