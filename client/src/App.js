import {Routes, Route} from "react-router-dom";
import './App.css';
import {Header, Footer} from "./components/common";
import {Home, About, Account, Parts, NotFound} from "./components/pages";

function App() {
   return <>
      <Header/>
      <main className="content grow">
         <Routes>
            <Route index element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/account/*" element={<Account/>}/>
            <Route path="/parts/*" element={<Parts/>}/>
            <Route path="*" element={<NotFound/>}/>
         </Routes>
      </main>
      <Footer/>
   </>
}

export default App;