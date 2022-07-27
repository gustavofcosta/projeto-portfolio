import { FooterWrapper, WrapperOne, WrapperTwo } from "./styles/footerStyles";
import { social, home, links } from "../api/appData";

const Footer = () => {
  return (
    <FooterWrapper>
      <WrapperOne>
        <div>
          <h1>Gustavo F. Costa</h1>
          <p>Desenvolvedor front-end especialista em desenvolvimento Web.</p>
          <div>
            <nav>
              <ul>
                {social.map((socialIcons, index) => {
                  const { icon, url } = socialIcons;
                  return (
                    <li key={index}>
                      <a href={url}>{icon}</a>
                    </li>
                  );
                })}
              </ul>
            </nav>
            <span>{home.title}</span>
          </div>
        </div>
        <div>
          <div>
            <h3>Contato</h3>
            <ul>
              <li>
                <a href="">E-mail Gustavo</a>
              </li>
              <li>
                <a href="">Ligue para Gustavo</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Em geral</h3>
            <ul>
              <li>
                <a href="">Minha missão</a>
              </li>
              <li>
                <a href="">Política de Privacidade</a>
              </li>
            </ul>
          </div>
        </div>
      </WrapperOne>
      <WrapperTwo>
        <div>
          <div>
            <figure>
              <img src="foguete.png" alt="foguete" />
            </figure>
          </div>
          <ul>
            <h3>Mapa do site</h3>
            {links.map((link, index) => {
              const { title, url } = link;
              return (
                <li key={index}>
                  <a href={url}>{title}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div>
          <p>Todos os direitos reservados © Gustavo F. Costa 2022</p>
        </div>
      </WrapperTwo>
    </FooterWrapper>
  );
};

export default Footer;
