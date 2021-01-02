import React from "react";
import Sdata from "./Sdata";
import Card from "./Card";

const Services = () => {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Our Services </h1>
        <hr className="w-50 mx-auto" style={{borderRadius:"5px", border:"0 none" ,height:"5px", backgroundColor:"#1266F1",color:"#1266F1"}}></hr>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return <Card key={ind} imgsrc={val.imgsrc} title={val.title} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
