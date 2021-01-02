import React from "react";
import web from "../src/images/s1.jpg";
import { NavLink } from "react-router-dom";
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import CallIcon from '@material-ui/icons/Call';
const Acard = (props) => {
    return (
        <>
            <div className="col-md-4 col-12 mx-auto">
                <div className="card border-0 shadow-lg" style={{ width: 18 + "rem" }}>
                    <img className="card-img-top" src={props.imgsrc} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title text-center">{props.title}</h5>
                        <hr className="w-50 mx-auto" style={{borderRadius:"3px", border:"0 none" ,height:"5px", backgroundColor:"#1266F1",color:"#1266F1"}}></hr>
                    </div>
                    <ul className="list-group borderless list-group-flush">
                        <li className="list-group-item text-center ">{props.degree}</li>     
                    </ul>
                    <div className="card-body ml-5 align-items-center">
                    <div className="pl-4">
                        <a href={props.fb} className="card-link "><FacebookIcon></FacebookIcon></a>
                        <a href={"tel:"+props.phone} className="card-link"><CallIcon></CallIcon></a>
                        <a href={props.insta} className="card-link "><InstagramIcon></InstagramIcon></a>                       
                    </div>
                    </div>
                </div>
            </div>
        </>

    );
};

export default Acard;
