import React from "react";
import Slider from "../pages/home/Slider";
import Skin from "../pages/home/skin";
import Play from "../pages/home/Play";
import News from "../pages/home/news";
import Garena from "../pages/home/general";
function Home(props) {
    return (
        <div className="">
            <div> {/* Tạo khoảng cách 20px */}
            <Slider />
            </div>
           
            <div style={{ marginTop: '10px'  }}> {/* Tạo khoảng cách 20px */}
                <News />
            </div>
            <div style={{ marginTop: '10px'  }}> {/* Tạo khoảng cách 20px */}
                <Garena />
            </div>
            <div  style={{ marginTop: '10px'  }}> {/* Tạo khoảng cách 20px */}
                <Skin />
            </div>
            <div style={{ marginTop: '10px'  }}> {/* Tạo khoảng cách 20px */}
                <Play />
            </div>
        </div>
    );
}

export default Home;
