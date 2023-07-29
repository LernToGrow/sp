import React from "react";
import "./Project.css";
import Project1 from "./img/netflixappprject.PNG";
import Project2 from "./img/foodappproject.jpg";
import Project3 from "./img/ecomappproject.jpg";
import tictokapp from "./img/tictokapp.PNG";
import wetherapp from "./img/wetherapp.PNG";
import shyroom from "./img/shyroom.PNG";

function Project() {
  return (
    <div className="project component__space" id="Projects">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          I work with different technologies on that basis,
        </p>
        <p className="heading p__color">The following are my Projects.</p>
      </div>
      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={Project1} alt="" className="project__img" />
              </div>
              <div className="service__meta">
                <h1 className="service__text">
                  Netflix Clone (Role- Full Stack developer)
                </h1>
                <p className="p project__text p__color">
                  Description:- It is a subscription-based streaming service that enables subscribers to see online television shows, feature films, and other entertainment. React JS is utilized for the front end, Node JS and Express for the back end, and Mongo DB is the database of preference.
                </p>
                <br></br>
                <a
                  href="https://github.com/LernToGrow/Netfilx_clone"
                  className="project__btn"
                >
                Github Code
                </a>
              </div>
            </div>
          </div>

            {/* //hotel booking */}
            <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={shyroom} alt="" className="project__img" />
              </div>
              <div className="service__meta">
                <h1 className="service__text">
                  BookMyRoom (Role- Full Stack developer)
                </h1>
                <p className="p project__text p__color">
                  Description:-It is an online booking room booking
                  system. It helps the user to view the room and details
                  without going the location So it is time-free and cost-free
                  as well. The technology is used ReactJS for the frontend
                  and ExpressJS, NodeJS, for the backend and MongoDB for
                  database storage
                </p>
                <br></br>
                <a
                  href="https://github.com/LernToGrow/BookMyRoom"
                  className="project__btn"
                >
                  Github Code
                </a>
              </div>
            </div>
          </div>
          {/* //hotel booking  END*/}
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={tictokapp} alt="" className="project__img" style={{ height: "120px", width: "220px" }} />
              </div>
              <div className="service__meta">
                <h1 className="service__text">
                  Tic-Tac-Toe (Role- Full Stack developer)
                </h1>
                <p className="p project__text p__color">
                  Description:-When it's their turn, participants in the two-player game tic-tac-toe choose whether to place an X or an O in one of the nine empty rectangles on a table. A player wins if those who successfully align their sign either vertically or horizontally without any glitches. JavaScript and React JS are the technologies used.

                </p>
                <br></br>
                <a
                  href="https://github.com/LernToGrow/TicTakApp"
                  className="project__btn"
                >
                   Github Code
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={wetherapp} alt="" className="project__img" style={{ height: "120px", width: "220px" }} />
              </div>
              <div className="service__meta">
                <h1 className="service__text">
                  Wether App (Role- Full Stack developer)
                </h1>
                <p className="p project__text p__color">
                  Description:- The location will be chosen by the user's geolocation. The weather forecast is below with temperature given in both ° Fahrenheit and ° C. React JS for the front end, JavaScript, and the Open Weather Map API are the technologies used.
                </p>
                <br></br>
                <a
                  href="https://github.com/LernToGrow/WetherApp"
                  className="project__btn"
                >
                   Github Code
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={Project2} alt="" className="project__img" />
              </div>
              <div className="service__meta">
                <h1 className="service__text">
                  Online Food Delivery System (Role- Full Stack developer)
                </h1>
                <p className="p project__text p__color">
                  Description:- An online meal ordering system allows customers to place orders for a variety of foods and beverages from hotels and restaurants in their area while relaxing at home or elsewhere. HTML, CSS, bootstrap-5 for the front end, Java, Hibernate for the back end, and MySQL were utilised as the database.
                </p>
                <br></br>
                <a
                  href="https://github.com/LernToGrow/Food_app"
                  className="project__btn"
                >
                   Github Code
                </a>
              </div>
            </div>
          </div>
          <div className="col__3">
            <div className="service__box pointer">
              <div className="icon">
                <img src={Project3} alt="" className="project__img" />
              </div>
              <div className="service__meta">
                <h1 className="service__text">
                  E Commerce Application (Role- Full Stack developer){" "}
                </h1>
                <p className="p project__text p__color">
                  Description:- This project aims to give clients of physical stores access to the benefits of internet buying. By leveraging the internet, it is possible to purchase goods from any location using HTML, CSS, and bootstrap-5 for the front end, Java and Servlet for the back end, and MySQL for the database.
                </p>
                <br></br>
                <a
                  href="https://github.com/LernToGrow/E_commerce_app"
                  className="project__btn"
                >
                   Github Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
