import {Routes, Route} from "react-router-dom";
import {Home} from "./components/pages";
import {Header} from "./components/common";
import './App.css';

function App() {
   return <>
      <Header/>
      <Routes>
         <Route index element={<Home/>}/>
      </Routes>
   </>
}

export default App;