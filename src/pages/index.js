import React from "react";
import * as styles from "./index.module.css";
import Footer from "../sections/Footer";
import Wrapper from "../components/Wrapper";
import AboutMe from "../sections/AboutMe";
import Achievements from "../sections/Achievements";
import Certifications from "../sections/Certifications";
import Contact from "../sections/Contact";
import Education from "../sections/Education";
import Hero from "../sections/Hero";
import Languages from "../sections/Languages";
import Music from "../sections/Music";
import Leadership from "../sections/Leadership";
import Photography from "../sections/Photography";
import Projects from "../sections/Projects";
import Resume from "../sections/Resume";
import Skills from "../sections/Skills";
import Work from "../sections/Work";

const IndexPage = () => {
  return (
    <Wrapper>
      <div className={`container ${styles.layout}`}>
        <Hero />
        <AboutMe />
        <div className={styles.workEducation}>
          <Work />
          <Education />
        </div>
        <Skills />
        <Projects />
        <Languages />
        <div className={styles.achievementsCertificationLeadership}>
          <div>
            <Achievements />
          </div>
          <div>
            <Certifications />
          </div>
          <div>
            <Leadership />
          </div>
        </div>
        <Photography />
        <Music />
        <Resume />
        <Contact />
      </div>
    </Wrapper>
  );
};

export default IndexPage;
