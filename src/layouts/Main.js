import React from "react";
import {Routes,Route,Link} from "react-router-dom"
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Detail from "./Detail";
import Chitiet from "../pages/chitiet/detail";
import Update from "../pages/chitiet/detailup";
import SearchBar from "../pages/home/SearchBar";

const Main=()=>(
   <main >
   <Routes>

   <Route path="/"element={<Home/>}/>  
   <Route path="/Detail"element={<Detail/>}/>  
   <Route path="/register"element={<Register/>}/> 
   <Route path="/login"element={<Login/>}/>
   <Route path="/SearchBar"element={<SearchBar/>}/>
   <Route path="/Chitiet"element={<Chitiet/>}/>
   <Route path="/Update"element={<Update/>}/>

   </Routes>
   </main>         
)
export default Main