import {Outlet, Routes, Route} from "react-router-dom";
import {Profile, Register, Login} from "./index";
import {NotFound} from "../index";

const Account = () => {
   return <>
      <Routes>
         <Route index element={<Profile/>}/>
         <Route path="register" element={<Register/>}/>
         <Route path="login" element={<Login/>}/>
         <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Outlet/>
   </>
}

export default Account;