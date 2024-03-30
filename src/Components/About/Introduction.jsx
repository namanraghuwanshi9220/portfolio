import React from "react";
import "./Introduction.css";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Profile-pic.png";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is
                 <span className="different">Naman Raghuwanshi </span> and I am
                from
                <span className="different">
                  
                  Seoni Malwa, Madhya Pradesh (India)
                </span>
                .I am pursuing B.Tech in Computer Science Engineering from
                <span className="different">
                 Bansal College of Engineering, Madhya Pradesh
                </span>
                . Then I joined full stack development course by
                <span className="different">Sheryians Coding School</span> 
              </h4>
              <h4>Terms That can describe me apart form Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Quick Learner
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Collaborative
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Team Player
              </h4>
              <h4 className="different">
                <span className="icons">
                  <ExitToAppIcon />
                </span>
                Creative
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
