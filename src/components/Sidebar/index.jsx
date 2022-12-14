import { links, social } from "../../api/appData";
import { useGlobalContext } from "../../contextAPI/context";

import { Social, Wrapper } from "./styled";

const Sidebar = () => {
  const { showSidebar, handleSidebar } = useGlobalContext();

  return (
    <Wrapper showSidebar={showSidebar} onClick={handleSidebar}>
      <div>
        <ul>
          {links.map((link, index) => {
            const { title, url } = link;
            return (
              <div key={index}>
                <li>
                  <a href={url}>{title}</a>
                </li>
                <span></span>
              </div>
            );
          })}
        </ul>
      </div>
      <Social>
        <ul>
          {social.map((socialItem, index) => {
            const { icon, url } = socialItem;
            return (
              <li key={index}>
                <a href={url} target="_blank">
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </Social>
    </Wrapper>
  );
};

export default Sidebar;
