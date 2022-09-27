import Navbar from "../components/Navbar";
import {
  ArrowLeft,
  ArrowRight,
  SkillsStyles,
} from "../components/styles/skillsStyles";
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
import { Container } from "../styled/global-styles";
import Developer from "../components/Developer";
import Skills from "../components/Skills";

const Index = () => {
  const {
    allSkills,
    moreSkills,
    allProfession,
    moreProfessions,
    closeSidebar,
    showSidebar,
  } = useGlobalContext();

  const buttonSkill = true;

  return (
    <Container id="home">
      <Navbar />

      <Sidebar />
      <div>
        <main>
          <Section>
            <Developer />

            <Skills id="skills" />

            {/*<BgAlternative id="services">
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
            </div> 
          </BgAlternative>*/}

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
      </div>
    </Container>
  );
};

export default Index;
