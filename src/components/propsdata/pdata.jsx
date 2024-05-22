import React from "react";

import "../propsdata/pdata.css";

function Pdata(props) {
    return (
        <>
            <div className="boxxes">
               <div className="immg">
               <img src={props.img1} alt="" />
               </div>
                <span>Basic</span>
                <h4>{props.price}</h4>
                <ul>
                    <li>Increase traffic 50%</li>
                    <li>Social Media Marketing</li>
                    <li>10 Free Optimization </li>
                    <li>24/7 support</li>
                </ul>
                    <button>Get Started</button>
            </div>


        </>
    )
}
export default Pdata;