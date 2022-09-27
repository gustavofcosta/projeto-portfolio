import { profession, home, description, projects } from "../../api/appData";

import { Wrapper } from "./styled";

const Developer = () => {
  return (
    <Wrapper>
      <header>
        <h1>{home.title}</h1>
        <h3>{home.career}</h3>
      </header>
      {description.map((infoItem, index) => {
        const { info } = infoItem;
        return <p key={index}>{info}</p>;
      })}
    </Wrapper>
  );
};
export default Developer;
