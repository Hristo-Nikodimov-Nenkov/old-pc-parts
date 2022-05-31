import {Routes, Route} from "react-router-dom";
import {About, Home, NotFound} from "./components/pages";
import {Footer, Header} from "./components/common";
import './App.css';

function App() {
   return <>
      <Header/>
      <Routes>
         <Route index element={<Home/>}/>
         <Route path="/about" element={<About/>}/>

         <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
   </>
}

export default App;