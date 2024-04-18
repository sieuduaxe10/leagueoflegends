
import React from "react";

import Content from "../pages/detail-product/Content";
import Section from "../pages/detail-product/Section";
import './box.css'


function Detail(props) {
    return (
        <>
        <div  class="container"> 
       
        <Content/>
        
   
            </div>
            <div id="j" className="box" >
                <Section/>
          
            </div>
            </>
            );
            
}
            export default Detail