import React, { useState } from "react";
import * as emailjs from 'emailjs-com';
import CallIcon from '@material-ui/icons/Call';
import MailIcon from '@material-ui/icons/Mail';
import InstagramIcon from '@material-ui/icons/Instagram';

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
    address: "",
  });

  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const formSubmit = (e) => {
    e.preventDefault();
    /*alert(
      `My name is ${data.fullname}. My mobile number is ${data.phone} and email is ${data.email}, Here is what I watn to say ${data.msg}`
    );*/
    const templateParam = {
      fullname1: data.fullname,
      phone1: data.phone,
      email1: data.email,
      address1: data.address,
      msg1: data.msg,
      //time1:data.time
    };
    emailjs.send("gmail", "template_0MwdaGeY", templateParam, "user_5nOxAqQjegn1OyB0dHBSF").then();
    alert(`Thank you ${data.fullname} for get is touch with us`);

    setData({
      fullname: "",
      phone: "",
      email: "",
      address: "",
      msg: "",

    });
  };

  return (
    <>
      <div className="my-5">
        <h1 className="text-center"> Contact US </h1>
        <hr className="w-50 mx-auto" style={{borderRadius:"5px", border:"0 none" ,height:"5px", backgroundColor:"#1266F1",color:"#1266F1"}}></hr>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <div className="col-md-4 col-12 mx-auto">
                <div className="card shadow border-dark mb-3 " style={{ width: "18rem" }}>
                  <div className="card-header text-center">Bhavnagar Office</div>
                  <div className="card-body text-dark">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item text-center">1st Floor,</li>
                      <li class="list-group-item text-center">Sant Krupa Complex,</li>
                      <li class="list-group-item text-center">R.T.O. Road, Bhavnagar.</li>
                      <li class="list-group-item text-center"><a href="https://www.instagram.com/sky_blue_solar8589?r=nametag" className="px-3"><InstagramIcon style={{ fill: "black" }}></InstagramIcon></a><a href="tel:8511048346" className="px-3"><CallIcon style={{ fill: "black" }}></CallIcon></a><a href="mailto:skybluesolar007@gmail.com" className="px-3"><MailIcon style={{ fill: "black" }}></MailIcon></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12 mx-auto">
                <div className="card shadow border-dark mb-3 ml-1" style={{ width: "18rem" }}>
                  <div className="card-header text-center">Surat Office</div>
                  <div className="card-body text-dark">
                    <ul class="list-group list-group-flush">
                      <li class="list-group-item text-center">121, Akshar Diamond,</li>
                      <li class="list-group-item text-center">Mini Bazar,</li>
                      <li class="list-group-item text-center">Varachha Road, Surat.</li>
                      <li class="list-group-item text-center"><a href="https://www.instagram.com/sky_blue_solar8589?r=nametag" className="px-3"><InstagramIcon style={{ fill: "black" }}></InstagramIcon></a><a href="tel:9104566242" className="px-3"><CallIcon style={{ fill: "black" }}></CallIcon></a><a href="mailto:skybluesolar007@gmail.com" className="px-3"><MailIcon style={{ fill: "black" }}></MailIcon></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 container">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label" >
                  FullName<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Enter your name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Phone<span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="mobile number"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Address<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  name="address"
                  value={data.address}
                  onChange={InputEvent}
                  placeholder="Enter your address"
                  required
                ></input>
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                ></textarea>
              </div>
              <div class="col-12" >
                <button class="btn btn-outline-primary" type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

    </>
  );
};

export default Contact;
