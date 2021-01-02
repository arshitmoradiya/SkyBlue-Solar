import React from "react";
import web from "../src/images/g (1).jpeg";
import { NavLink } from "react-router-dom";

const Gcard = (props) => {
    return (
        <>
            <div className="col-md-4 col-12 mx-auto">

                
                    <div className="img-thumbnail shadow-lg" >
                        <a href="/w3images/lights.jpg">
                            <img src={props.imgsrc} alt="Lights" style={{width:"100%"}} />
                        </a>
                        <div className="caption text-center mt-2">
                                <h5>{props.kw}</h5>
                            </div> 
                    </div>
                </div>
            
        </>
    );
};

export default Gcard;