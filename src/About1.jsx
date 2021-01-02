import React from "react";
import Adata from "./Adata";
import Acard from "./Acard";
const About1 = () => {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Our Team </h1>
                <hr className="w-50 mx-auto" style={{borderRadius:"5px", border:"0 none" ,height:"5px", backgroundColor:"#1266F1",color:"#1266F1"}}></hr>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row gy-4">
                            {Adata.map((val, ind) => {
                                return <Acard key={ind} imgsrc={val.imgsrc} title={val.title} degree={val.degree} fb={val.fb} insta={val.insta} phone={val.phone}/>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default About1;