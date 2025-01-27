import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className='about center'>
        <h1 data-aos='fade-right' className='mobileHead'>
          Hello, I am <span className='about__name'>Naman Raghuwanshi</span>
        </h1>
        <Type />
        <p className='about__desc' data-aos='fade-right'>
          Passionate and creative Full Stack Developer having proficiency in
          MERN Stack. Attired with a variety of tools & technologies and keen to
          learn new one.
        </p>
        <div className='about__contact center'>
          <a
            href='https://github.com/namanraghuwanshi9220'
            aria-label='github'
            target='_blank'
            rel='noreferrer'
            className='link link--icon'
          >
            <GitHubIcon />
          </a>
          <a
            href='mailto: namanraghuwanshi789@gmail.com'
            target='_blank'
            rel='noreferrer'
            aria-label='mail'
            className='link link--icon'
          >
            <EmailIcon />
          </a>
          <a
            href='tel:+919893528612'
            target='_blank'
            rel='noreferrer'
            aria-label='phone'
            className='link link--icon'
          >
            <PhoneIcon />
          </a>
          <a
            href='https://in.linkedin.com/in/naman-raghuwanshi-72b64323b'
            aria-label='linkedin'
            className='link link--icon'
            target='_blank'
            rel='noreferrer'
          >
            <LinkedInIcon />
          </a>
          {/* <a
            href="https://twitter.com/KhakalShreyas"
            aria-label="twitter"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <TwitterIcon />
          </a> */}
        </div>

        <button
          className='btnResume'
          onClick={() => {
            window.open(
              "https://j5uejck9rvUjQeURkA2W9iB8/view?usp=sharing"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <Timeline />
      <section id='#skills'>
        <Techstacks />
      </section>
    </>
  );
};
