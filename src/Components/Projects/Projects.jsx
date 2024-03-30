import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat, FaNodeJs } from "react-icons/fa";
import {
  SiRedux,
  SiCss3,
  SiBootstrap,
  SiBlockchaindotcom,
  SiHtml5,
  SiGsap,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { DiGSAP } from "react-icons/di";
import { AiOutlineApi } from "react-icons/ai";
import { IoLogoJavascript } from "react-icons/io";
import project1 from "../../assets/proj-1.png";
import project2 from "../../assets/proj-2.png";
export const Projects = () => {
  return (
    <>
      <div className='section'>
        <h2 className='section__title different'>Projects</h2>
        <div className='allProjects'>
          <div className='projects_container' data-aos='fade-right'>
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img
                    src='https://i.ibb.co/zbhpt3c/Screenshot-at-2024-03-30-11-43-03.png'
                    alt=''
                  />
                </div>
              </div>
              <div className='project_information'>
                <h2>ThatsMyCollege</h2>
                <p>
                It is an app created with React.js. You can search Colleges and get overview of college
                </p>
                <div>
                  <FaReact />
                  <SiRedux />
                  <SiReactrouter />
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                  <AiOutlineApi />
                </div>
                <div>
                  <a
                    href='https://thatsmycollege.com/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt onbt'>
                      See this Live
                    </span>
                  </a>
                  <a
                    href='https://github.com/namanraghuwanshi9220/Thats-My-College'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt'>
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className='projects_container' data-aos='fade-right'>
            <div className='project'>
              <div className='project_videocontainer'>
                <div>
                  <img
                    src='https://i.ibb.co/tDfW9Dy/Screenshot-at-2024-03-30-12-15-29.png'
                    alt=''
                  />
                </div>
              </div>
              <div className='project_information'>
                <h2>codecase</h2>
                <p>
                  This website created with HTML5,CSS,JavaScript,GSAP and Locomotive
                  
                </p>
                <div>
                 
                  <SiHtml5 />
                  <DiCss3 />
                  <IoLogoJavascript />
                 
                </div>
                <div>
                  <a
                    href='https://codecase-inovetion.vercel.app/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt onbt'>
                      See this Live
                    </span>
                  </a>
                  <a
                    href='https://github.com/namanraghuwanshi9220/code-case'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <span type='button' className='btns onbt'>
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
    
         
          {/*  <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/dropbox-logo@2x.jpg"
                    alt=""
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>DropBox Clone -Backend</h2>
                <p>
                  Backend API for a google drive like app built using NodeJS,
                  Express, Mongoose, MongoDB Atlas and AWS S3 for storage. CRUD
                  operations for users, files and folders.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                </div>
                <div>
                  <a
                    href="https://drive-system.herokuapp.com/user/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      URL for the API
                    </span>
                  </a>
                  <a
                    href="https://github.com/imbickydutta/file-system-backend"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/934WpdD/uniqlo-clone.png"
                    alt="Uniqlo-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>Uniqlo Clone</h2>
                <p>
                  UNIQLO is a clothing apparel company, from Japan. They also
                  sell their products in online mode through their website. We
                  cloned their website.
                </p>
                <div>
                  <SiNodedotjs />
                  <SiExpress />
                  <SiMongodb />
                  <SiHtml5 />
                  <DiCss3 />
                </div>
                <div>
                  <a
                    href="https://uniqlo-clone.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/uniqlo-backend-2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src="https://i.ibb.co/KVBGkdy/FFD69103-C304-42-E8-BCCD-8836-AAEFEA9-C.jpg"
                    alt="PulsePlus-Clone"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>PulsePlus Clone</h2>
                <p>
                  PulsePlus is an E-commerce web application for online Buying
                  Medicines and Consult to Doctor and Book a near Testlab.
                </p>
                <div>
                  <DiCss3 />
                  <SiHtml5 />
                  <IoLogoJavascript />
                </div>
                <div>
                  <a
                    href="https://pulseplus-clone.netlify.app/landing_page.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/Shreyasgkhakal100/www.pulseplus.in-Clone"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};
