import React from "react";
import "./Skills.css";
import Project1 from "./img/netflixappprject.PNG";


function Skills() {
  return (
    <div className="service component__space" id="Technical_Skills">
      <div className="heading">
        <h1 className="heading">My Technical Skills</h1>
        <p className="heading p__color">
          I work with different technologies in the frontend , backend, and
          database.{" "}
        </p>
        <p className="heading p__color">
          The following are my technical skills.
        </p>
      </div>

      <div className="container">
        <div className="row">
          <div className="col__3">
            <div className="skills__box pointer">
              <div className="service__meta">
                <h1 className="service__text">Web Technologies</h1>
                <p className="p service__text p__color">HTML 5</p>
                <p className="p service__text p__color">CSS 3</p>
                <p className="p service__text p__color">Bootstrap 5</p>
                <p className="p service__text p__color">React JS.</p>
                <p className="p service__text p__color">JSP.</p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="service__meta">
                <h1 className="service__text">Back end Language</h1>
                <p className="p service__text p__color">JavaScript</p>
                <p className="p service__text p__color">NodeJS</p>
                <p className="p service__text p__color">ExpressJS</p>
                <p className="p service__text p__color">Java</p>
                <p className="p service__text p__color">Servlet</p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="service__meta">
                <h1 className="service__text">
                  Web Servers/Runtime Environments
                </h1>
                <p className="p service__text p__color">NodeJS</p>
                <p className="p service__text p__color">Apache Tomcat</p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="service__meta">
                <h1 className="service__text">Database</h1>
                <p className="p service__text p__color">Mango db</p>
                <p className="p service__text p__color">MySQL</p>
                <p className="p service__text p__color">SQL Server</p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="service__meta">
                <h1 className="service__text">Backend Frameworks</h1>
                <p className="p service__text p__color">ExpessJS</p>
                <p className="p service__text p__color">NodeJS</p>
                <p className="p service__text p__color">Hibernate</p>
              </div>
            </div>
          </div>



          <div className="col__3">
            <div className="skills__box pointer">
              <div className="service__meta">
                <h1 className="service__text"> IDE</h1>
                <p className="p service__text p__color">Eclipse</p>
                <p className="p service__text p__color">Netbeans</p>
                <p className="p service__text p__color">
                  Microsoft Visual Studio.
                </p>
              </div>
            </div>
          </div>

          <div className="col__3">
            <div className="skills__box pointer">
              <div className="service__meta">
                <h1 className="service__text">Version Control</h1>
                <p className="p service__text p__color">Git.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
