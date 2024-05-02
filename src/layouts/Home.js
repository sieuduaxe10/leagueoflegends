import React from "react";


import Section1 from "../pages/home/Section1";
import Slider from "../pages/home/Slider";
import Skin from "../pages/home/skin";




function Home(props) {
    return (
        
        <div class="container"> 
        <Slider/>
        <Skin/>
        <Section1/>
       
        </div>
     
            );          
}
            export default Home