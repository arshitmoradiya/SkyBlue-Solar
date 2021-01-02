import React from "react";
import web from "../src/images/solar.jpg";
import { NavLink } from "react-router-dom";
import Commom from "./Commom";

const Home = () => {
  return (
    <>
      <Commom
        name="Now affordable solar solutions to power your world"
        imgsrc={web}
        visit="/service"
        btname="REQUEST QUOTATION"
      />
    </>
  );
};

export default Home;
