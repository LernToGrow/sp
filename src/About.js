import React from "react";
import "./About.css";
// import aboutImg from "./img/b1.png";
// import aboutImg from "./img/Sumit_profile.jpg";
import aboutImg from "./img/sumitprofile.jpeg";
// import newresume from "./Resume/sumitkambleup.pdf";
// import newresume from "./Resume/sumitaloha_jan2024.pdf";
import newresume from "./Resume/SumitkambleMERN28.pdf";
import * as moment from 'moment'

function About() {
  //  Up To Top Btn
  window.addEventListener("scroll", function () {
    const upToTop = document.querySelector("a.bottom__to__top");
    upToTop.classList.toggle("active", window.scrollY > 0);
  });

//   function calculateDateDifferenceInYearsAndMonths(date1, date2) {
//     // Parse the input dates to ensure they are Date objects
//     const parsedDate1 = new Date(date1);
//     const parsedDate2 = new Date(date2);

//     // Calculate the difference in years and months
//     let yearsDifference = parsedDate2.getFullYear() - parsedDate1.getFullYear();
//     let monthsDifference = parsedDate2.getMonth() - parsedDate1.getMonth();

//     // Adjust for cases where monthsDifference is negative
//     if (monthsDifference < 0) {
//         yearsDifference--;
//         monthsDifference += 12;
//     }
//     if(monthsDifference > 12){
//       monthsDifference-=12;
//       yearsDifference = yearsDifference+ 1;

//     }

//     return { years: yearsDifference, months: monthsDifference };
// }
// const date1 = '2022-11-23';
// // const date2 = '2025-4-23';
// const date2 = new Date();
// let { years, months } = calculateDateDifferenceInYearsAndMonths(date1, date2);
// let totalmonths= months+8;
// if(totalmonths >= 12){
//   totalmonths=totalmonths-12;
//   years = years+ 1;
// }

const date1 = moment('2022-11-23', 'YYYY-MM-DD');
const date2 = moment(new Date()).add(6, 'months');
const diff = date2.diff(date1);
const duration = moment.duration(diff)
const years = duration.years()
const totalmonths = duration.months()
console.log({ years, totalmonths });



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
              Hello, my name is Sumit Kamble, and I work as a full-stack software developer, having an overall <a class="sweet">{years} Year And {totalmonths} Months</a>  of experience in development.I earned my BCA at Sangola College in Sangola  (2017-2020) Having and my MCA from YSPM's Yashoda Technical Campus (2020–2022). I'm searching for a new job right now.</p>
              <br></br>
              <h1 style={{ fontSize: "30px" }}>SUMMARY</h1> 
              <p className="about__text p__color">
              Well-qualified Full Stack Developer familiar with wide range of programming utilities and languages. Knowledgeable of backend and frontend development requirements. Handles any part of process with ease. Collaborative team player with excellent technical abilities offering {years} Year And {totalmonths} Months of relevant experience.</p>
              <br></br>
              <div className="about__text p__color">
                <h1 style={{ fontSize: "30px" }}>WORK EXPERIENCE</h1>
                <br></br>
                <p>
                  <h3>1.ALOHA TECHNOLOGY PVT LTD, PUNE ( NOV 2022 - PRESENT )</h3>
                  <h3> FULL-STACK SOFTWARE DEVELOPER </h3>
                </p>
                <p>
                I work with Aloha Technology​​​​​​ as a full stack developer from Nov 2022. I work with various technologies such as html, css, ajax, javascript, nodejs, expressjs, and mongodb. with a team of 12+ developers. Wrote code that was well-structured, tested, readable, and maintainable           </p>
                  <h6 style={{margin:" 10px 0 10px 0"}}>PROJECTS INVOLVED</h6>

                  <h6>* Property Rental and Sales Application ( Aloha Technology PVT LTD, Pune )</h6>
                  <h6 style={{margin:" 10px 0 10px 0"}}>* Description</h6>
                  <p> The Property Rental and Sales Application is a versatile platform designed to facilitate property
                    transactions between landlords, tenants, and prospective buyers. It offers both mobile and web applications to
                    efficiently manage property listings, streamline rental and sales processes, and maintain financial records related
                    to property management. With multiple admin roles, the platform ensures effective management and oversight of
                    property-related activities.
                    </p>
                    <h6 style={{margin:" 10px 0 10px 0"}}>* Responsibilities</h6>

                    <ul>
                    <li>• Work with various technologies with the team of 12+ developers, wrote code that was well structured, tested,
                    readable, and maintainable.</li>
                    <li>• Utilize various programming languages to provide application functionality</li>
                    <li>• Collaborate with Client to gather and understand project requirements, including features, functionalities, and
                    user stories</li>
                    <li>• Translate business requirements into technical specifications and architectural designs
                    </li>
                    <li>• Integrate third-party APIs for features such as geolocation services, payment gateways, property listing
                    syndication, and authentication</li>
                    <li>• Write unit tests, integration tests, and end-to-end tests to ensure code quality, reliability, and functionality</li>
                    <li>• Conduct thorough testing of the application to identify and fix bugs, errors, and edge cases</li>
                  </ul>


                  <h6 style={{margin:" 10px 0 10px 0"}}>2. Investment Application ( Aloha Technology PVT LTD, Pune )</h6>
                  <h6 style={{margin:" 10px 0 10px 0"}}>* Description</h6>
                  <p>The Investment Application is a comprehensive platform designed to cater to the diverse
                      needs of investors, offering both online and offline investment opportunities through web-based and
                      mobile applications. With distinct modules tailored for different user groups, this platform provides a
                      seamless and user-friendly experience for both novice and experienced investors.</p>
                  <h6 style={{margin:" 10px 0 10px 0"}}>* Responsibilities</h6>

                    <ul>
                      <li>• Developed web pages.</li>
                      <li>• Doing validations on all the forms</li>
                      <li>• Involved during requirement gathering.</li>
                      <li>• Designed and developed the user stories received from business.</li>
                      <li>• Actively participated in production deployments</li>
                      <li>• Optimization of code.</li>
                      <li>• Understood business process architecture and conducted sessions for the same</li>
                      <li>• Result analysis, defect reporting, performance enhancement and fixing it</li>
                    </ul>
   
                
                </div>

                <p className="about__text p__color">
                {/* <h1 style={{ fontSize: "30px" }}>WORK EXPERIENCE</h1> */}
                <br></br>
                <p>
                  <h3>CLARITECH SOLUTIONS APRIL 2022 - OCT 2022 PRESENT / PUNE INDIA</h3>
                  <h3> SOFTWARE DEVELOPER </h3>
                </p>


                <h6 style={{margin:" 10px 0 10px 0"}}>1.Salon Management Application (Claritech Solutions ,Pune)</h6>
                  <h6 style={{margin:" 10px 0 10px 0"}}>* Description</h6>
                  <p>This web-based platform offers a range of features designed to simplify appointment
                    scheduling, manage staff, inventory, and facilitate online sales of beauty products through a mobile
                    application and they provide Online Appointment Booking ,Staff Management ,Inventory Management ,Mobile
                    Application for Beauty Product Sales ,Analytic s and Reporting.</p>
                  <h6 style={{margin:" 10px 0 10px 0"}}>* Responsibilities</h6>

                    <ul>
                      <li>• Developed web pages.</li>
                      <li>• Remain updated with advance techniques with the group of 15 junior developers</li>
                      <li>• Wrote code that was well-structured, tested, readable, and maintainable</li>
                      <li>• contributed to the development of six or more applications; and Contributed to the creation and application of system architecture designs and methods</li>
                      <li>• Understood business process architecture and conducted sessions for the same</li>
                   
                    </ul>

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
