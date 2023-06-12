import Navbar from "../components/Navbar";
import {
  ArrowLeft,
  ArrowRight,
  SkillsStyles,
} from "../components/styles/skillsStyles";
import { profession, home, description, projects } from "../api/appData";

import CardItems from "../components/CardIItems";
import ProjectsItems from "../components/ProjectsItems";

import { Section } from "../components/styles/section";
import { Summary } from "../components/styles/summary";
import { BgAlternative } from "../components/styles/bgAlternative";
import { ServicesStyles } from "../components/styles/servicesStyles";
import { Projects } from "../components/styles/projects";
import { useGlobalContext } from "../contextAPI/context";

import Button from "../components/Button";
import ButtonIcons from "../components/ButtonIcons";
import Footer from "../components/Footer";
import Sidebar from "../components/Sidebar";
import { Container } from "../styled/global-styles";
import Developer from "../components/Developer";
import Skills from "../components/Skills";
import Resumo from '../components/Resumo';

const Index = () => {
  const {
    allSkills,
    moreSkills,
    allProfession,
    moreProfessions,
    closeSidebar,
    showSidebar,
  } = useGlobalContext();

  return (
    <Container id="home">
      <Navbar />

      <Sidebar />
      <main>
        <Section>
          <Developer />

          <Skills />

          <Resumo />


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
    </Container>
  );
};

export default Index;
