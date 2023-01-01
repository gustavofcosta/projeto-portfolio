import { useRef } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { useGlobalContext } from "../../contextAPI/context";
import CardSkills from "../CardSkill";

import { ArrowLeft, ArrowRight, SkillsStyles, Wrapper } from "./styled";

const Skills = () => {
  const carousel = useRef(null);

  const { allSkills } = useGlobalContext();

  const handleLeftClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft -= carousel.current.offsetWidth;
  };

  const handleRightClick = (e) => {
    e.preventDefault();
    carousel.current.scrollLeft += carousel.current.offsetWidth;
  };

  return (
    <Wrapper id="skills">
      <h3>Skills</h3>
      <SkillsStyles ref={carousel}>
        {allSkills.map((skill, index) => {
          return <CardSkills key={index} {...skill} />;
        })}
      </SkillsStyles>
    </Wrapper>
  );
};
export default Skills;
