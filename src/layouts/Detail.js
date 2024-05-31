
import React from "react";

import Content from "../pages/detail-product/Content";
import Section from "../pages/detail-product/Section";
import Skin from "../pages/detail-product/Skin";

import './box.css'



function Detail(props) {
    return (
        <>
       
            <div id="j" className="box" >
            <Content/>
               
                <Section/>
                <Skin/>
          
            </div>
            </>
            );
            
}
            export default Detail