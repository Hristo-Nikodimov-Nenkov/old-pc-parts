import {Routes, Route} from "react-router-dom";
import {Home} from "./components/pages";
import './App.css';

function App() {
  return <Routes>
    <Route index element={<Home/>}/>
  </Routes>
}

export default App;