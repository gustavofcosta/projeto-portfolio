import Navbar from "../components/Navbar";
import {
  ArrowLeft,
  ArrowRight,
  SkillsStyles,
} from "../components/styles/skillsStyles";
import { MaxWidth } from "../components/styles/maxWidth";
import { profession, home, description, projects } from "../api/appData";

import CardItems from "../components/CardIItems";
import ProjectsItems from "../components/ProjectsItems";

import { useEffect, useRef, useState } from "react";
import { Section } from "../components/styles/section";
import { Summary } from "../components/styles/summary";
import { BgAlternative } from "../components/styles/bgAlternative";
import { ServicesStyles } from "../components/styles/servicesStyles";
import { Projects } from "../components/styles/projects";
import { useGlobalContext } from "../contextAPI/context";
import Button from "../components/Button";
import {
  AiOutlineArrowDown,
  AiOutlineArrowLeft,
  AiOutlineArrowRight,
} from "react-icons/ai";
import ButtonIcons from "../components/ButtonIcons";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import CardSkills from "../components/CardSkills";

const Index = () => {
  const carousel = useRef(null);

  const {
    allSkills,
    moreSkills,
    allProfession,
    moreProfessions,
    closeSidebar,
  } = useGlobalContext();

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  const buttonSkill = true;

  return (
    <MaxWidth id="home">
      <Navbar />

      <Sidebar />

      <main>
        {/*firstSection = 90vh*/}
        <Section>
          <Summary>
            <header>
              <h1>{home.title}</h1>
              <h3>{home.career}</h3>
            </header>
            {description.map((infoItem, index) => {
              const { info } = infoItem;
              return <p key={index}>{info}</p>;
            })}
          </Summary>

          <BgAlternative id="skills">
            <h3>Skills</h3>
            <SkillsStyles ref={carousel}>
              {allSkills.map((skill, index) => {
                return <CardSkills key={index} {...skill} />;
              })}
            </SkillsStyles>
            <ArrowLeft onClick={handleLeftClick}>
              <AiOutlineArrowLeft />
            </ArrowLeft>
            <ArrowRight onClick={handleRightClick}>
              <AiOutlineArrowRight />
            </ArrowRight>
          </BgAlternative>

          <BgAlternative id="services">
            <h3>O que faço</h3>
            <ServicesStyles>
              {allProfession.map((skill, index) => {
                return <CardItems key={index} {...skill} />;
              })}
            </ServicesStyles>
            {/* <div>
              <ButtonIcons onClick={moreProfessions}>
                <AiOutlineArrowDown />
              </ButtonIcons>
            </div> */}
          </BgAlternative>

          <BgAlternative id="projects">
            <h3>Projetos</h3>
            <Projects>
              {projects.map((project, index) => {
                return <ProjectsItems key={index} {...project} />;
              })}
            </Projects>
          </BgAlternative>
        </Section>
      </main>
      <Footer />
    </MaxWidth>
  );
};

export default Index;
