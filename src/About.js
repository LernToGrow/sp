import React from "react";
import "./About.css";
// import aboutImg from "./img/b1.png";
import aboutImg from "./img/Sumit_profile.jpg";
import newresume from "./Resume/sumitkamble.pdf";
function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });
  return (
    <div className="about component__space" id="About">
      <div className="container">
        <div className="row">
          <div className="col__2">
            <img src={aboutImg} alt="" className="about__img" />
          </div>
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color">
              Hello, my name is Sumit Kamble, and I work as a full-stack software developer, having an overall <a class="sweet">1.6 years</a>  of experience in development.I earned my BCA at Sangola College in Sangola  (2017-2020) Having and my MCA from YSPM's Yashoda Technical Campus (2020–2022). I'm searching for a new job right now.</p>
              <br></br>
              <h1 style={{ fontSize: "30px" }}>SUMMARY</h1> 
              <p className="about__text p__color">
              Well-qualified Full Stack Developer familiar with wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of process with ease. Collaborative team player with excellent technical abilities offering 1.6 years of related experience.</p>
              <br></br>
              <p className="about__text p__color">
                <h1 style={{ fontSize: "30px" }}>WORK EXPERIENCE</h1>
                <br></br>
                <p>
                  <h3>ALOHA TECHNOLOGY PVT LTD, PUNE ( NOV 2022 - PRESENT )</h3>
                  <h3> FULL-STACK SOFTWARE DEVELOPER </h3>
                </p>
                <p>
                I work with Aloha Technology​​​​​​ as a full stack developer from Nov 2022. I work with various technologies such as html, css, ajax, javascript, nodejs, expressjs, and mongodb. with a team of 12+ developers. Wrote code that was well-structured, tested, readable, and maintainable
                  <h4>Projects</h4>

                  <h6>* Investment Application</h6>
                  <p>Investment portal web-based and mobile applications, which provide online investment and offline investment plans for investors, have different modules for both users.</p>
                  <h6>* Salon Management Application</h6>
                  <p>A web-based salon management application that provides online appointment booking for clients and a mobile application that provides online beauty product sales.</p>
                  <h6>* Banking Application</h6>
                  <p>Work on an application that provides banking products, such as online loans and credit cards, for the user to help find the best credit cards and loans with his profile.</p>
                </p>
                </p>
                <p className="about__text p__color">
                {/* <h1 style={{ fontSize: "30px" }}>WORK EXPERIENCE</h1> */}
                <br></br>
                <p>
                  <h3>CLARITECH SOLUTIONS JAN 2022 - SEP 2022 PRESENT / PUNE INDIA</h3>
                  <h3> MERN STACK DEVELOPER INTERN </h3>
                </p>
                <p>• Remain updated with advance techniques with the group of 15 junior developers</p>
                <p>• Wrote code that was well-structured, tested, readable, and maintainable</p>
                <p>• contributed to the development of six or more applications; and Contributed to the creation and application of system architecture designs and methods</p>
                <p>• ReactJS was used to create a web application and component.</p>
                </p>
                <div className="about__button d__flex align__items__center">
                  <a href={newresume}>
                    <button className="about btn pointer">Download Cv</button>
                  </a>
                  <a href="#Contact">
                    <button className="about btn pointer">Hire Me</button>
                  </a>
                </div>
            </div>
          </div>
        </div>
      </div>
      {/* UP TO TOP BTN */}
      <div className="up__to__top__btn">
        <a href="#" className="bottom__to__top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            class="bi bi-chevron-up white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default About;
