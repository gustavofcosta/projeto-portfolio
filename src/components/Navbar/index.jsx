import { user, links, social } from "../../api/appData";

import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

import { Wrapper } from "./styled";
import ButtonIcons from "./../ButtonIcons";

import { useGlobalContext } from "../../contextAPI/context";

const Navbar = () => {
  const {
    handleDarkMode,
    handleLightMode,
    baseTheme,
    handleSidebar,
    showSidebar,
  } = useGlobalContext();

  return (
    <Wrapper>
      <div>
        <figure>
          <img src={user.url} alt={user.name} />
        </figure>
        {baseTheme ? (
          <ButtonIcons baseTheme={baseTheme} onClick={handleDarkMode}>
            <BsFillSunFill />
          </ButtonIcons>
        ) : (
          <ButtonIcons onClick={handleLightMode}>
            <FaMoon />
          </ButtonIcons>
        )}
      </div>
      <nav>
        <ul>
          {links.map((link, index) => {
            const { url, title } = link;
            return (
              <li key={index}>
                <a href={url}>{title}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <nav>
        <ul>
          {social.map((socialItems, index) => {
            const { icon, url } = socialItems;
            return (
              <li key={index}>
                <a target="_blank" href={url}>
                  {icon}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <span>
        <ButtonIcons>
          {baseTheme ? (
            <BsFillSunFill onClick={handleDarkMode} />
          ) : (
            <FaMoon onClick={handleLightMode} />
          )}
        </ButtonIcons>

        <ButtonIcons onClick={handleSidebar}>
          {showSidebar ? <AiOutlineClose /> : <FiMenu />}
        </ButtonIcons>
      </span>
    </Wrapper>
  );
};

export default Navbar;
