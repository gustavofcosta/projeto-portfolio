import Navbar from "../components/Navbar";
import { SkillsStyles } from "../components/styles/skillsStyles";
import { MaxWidth } from "../components/styles/maxWidth";
import { profession, home, description, projects } from "../api/appData";

import CardItems from "../components/CardIItems";
import ProjectsItems from "../components/ProjectsItems";

import { useEffect, useState } from "react";
import { Section } from "../components/styles/section";
import { Summary } from "../components/styles/summary";
import { BgAlternative } from "../components/styles/bgAlternative";
import { ServicesStyles } from "../components/styles/servicesStyles";
import { Projects } from "../components/styles/projects";
import { useGlobalContext } from "../contextAPI/context";
import Button from "../components/Button";
import { AiOutlineArrowDown } from "react-icons/ai";
import ButtonIcons from "../components/ButtonIcons";
import Footer from "../components/Footer";

const Index = () => {
  const { allSkills, moreSkills, allProfession, moreProfessions } =
    useGlobalContext();

  const firstSection = true;

  return (
    <MaxWidth>
      <Navbar />

      <main>
        {/*firstSection = 90vh*/}
        <Section firstSection>
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
            <SkillsStyles>
              {allSkills.map((skill, index) => {
                return <CardItems key={index} {...skill} />;
              })}
            </SkillsStyles>
            <div>
              <ButtonIcons onClick={moreSkills}>
                <AiOutlineArrowDown />
              </ButtonIcons>
            </div>
          </BgAlternative>

          <BgAlternative id="services">
            <h3>O que faço</h3>
            <ServicesStyles>
              {allProfession.map((skill, index) => {
                return <CardItems key={index} {...skill} />;
              })}
            </ServicesStyles>
            <div>
              <ButtonIcons onClick={moreProfessions}>
                <AiOutlineArrowDown />
              </ButtonIcons>
            </div>
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
