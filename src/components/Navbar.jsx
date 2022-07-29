import { user, links, social } from "../api/appData";

import { FaMoon } from "react-icons/fa";
import { BsFillSunFill } from "react-icons/bs";
import { FiMenu } from "react-icons/fi";

import { NavBar } from "./styles/navBar";

import ButtonIcons from "./ButtonIcons";
import { useGlobalContext } from "../contextAPI/context";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const {
    handleDarkMode,
    handleLightMode,
    baseTheme,
    showSidebar,
    sidebarIsOpen,
  } = useGlobalContext();

  return (
    <NavBar>
      <div>
        <figure>
          <img src={user.url} alt={user.name} />
        </figure>
        {baseTheme ? (
          <ButtonIcons onClick={handleDarkMode}>
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

        <ButtonIcons onClick={showSidebar}>
          {sidebarIsOpen ? <AiOutlineClose /> : <FiMenu />}
        </ButtonIcons>
      </span>
    </NavBar>
  );
};

export default Navbar;
