import React from "react";
import "./Details.css";
import Blog1 from "./img/blog-01.jpg";
import Blog2 from "./img/blog-02.jpg";
import Blog3 from "./img/blog-03.jpg";

function Details() {
  return (
    <div className="blog component__space" id="Details">
      <div className="heading">
        <h1 className="heading">Personal Details</h1>
      </div>
      <div className="container">
        <div className="row">
        <div className="col__3">
            <div className="Details__box pointer">
              <div className="service__meta">
                <h1 className="service__text">Contact Details</h1>
                <p className="p service__text p__color">Address:-Khardi</p>
                <p className="p service__text p__color">Tal:-Pandharpur</p>
                <p className="p service__text p__color">Dist:–Solapur</p>
                <p className="p service__text p__color">India Pin-413317</p>
              </div>
            </div>
          </div>


          <div className="col__3">
            <div className="Details__box pointer">
              <div className="service__meta">
                <h1 className="service__text">Personal Details</h1>
                <p className="p service__text p__color">Date of Birth: 6th MAR 1999</p>
                <p className="p service__text p__color">Marital Status: Single</p>
                <p className="p service__text p__color">Nationality : Indian</p>
              </div>
            </div>
          </div>


          <div className="col__3">
            <div className="Details__box pointer">
              <div className="service__meta">
                <h1 className="service__text">Languages</h1>
                <p className="p service__text p__color">English</p>
                <p className="p service__text p__color">Marathi</p>
                <p className="p service__text p__color">Hindi</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Details;
