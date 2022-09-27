import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineWhatsApp,
  AiFillHtml5,
  AiOutlineApi,
} from "react-icons/ai";
import { FaNodeJs } from "react-icons/fa";
import {
  SiReact,
  SiStyledcomponents,
  SiTypescript,
  SiCss3,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export const logo = "g";

export const dev = "Desenvolvedor Full Stack";

export const signature = "Gustavo";

export const user = {
  url: "logo.png",
  name: "Gustavo Fernandes Costa Desenvolvedor Front end",
};
export const links = [
  { title: "home", url: "#home" },
  { title: "Skills", url: "#skills" },
  //{ title: "O que faço", url: "#services" },
  { title: "projetos", url: "#projects" },
  // { title: "blog", url: "#blog" },
  { title: "contato", url: "#contact" },
];

export const social = [
  { icon: <AiFillGithub size={32} />, url: "https://github.com/gustavofcosta" },
  {
    icon: <AiFillLinkedin size={32} />,
    url: "https://www.linkedin.com/in/gustavo-fernandes-costa-4997b1149/",
  },
  {
    icon: <AiOutlineWhatsApp size={32} />,
    url: "https://api.whatsapp.com/send?phone=5519992712982",
  },
];

export const home = { title: "Gustavo ", career: "Desenvolvedor Full Stack" };

export const description = [
  {
    info: "Olá sou Gustavo Fernandes Costa profissional da área de desenvolvimento web, com mais de 2 anos de experiência, atuando nas áreas de Front-end e Back-end.",
  },
  // {
  //   info: "Também possuo experiência como técnico em eletroeletrônica há 9 ano realizando teste de certificação de equipamentos eletromédicos de acordo com a ABNT NBR IEC 60601-1.",
  // },
];

export const skills = [
  {
    icon: <AiFillHtml5 />,
    title: "HTML5",
    description:
      "A HyperText Markup Language ou HTML é a linguagem de marcação padrão para documentos projetados para serem exibidos em um navegador da web.",
  },
  {
    icon: <SiCss3 />,
    title: "CSS3",
    description:
      "Cascading Style Sheets é uma linguagem de folha de estilo usada para descrever a apresentação de um documento escrito em uma linguagem de marcação como HTML ou XML.",
  },
  {
    icon: <SiJavascript />,
    title: "JavaScript",
    description:
      "JavaScript, é uma linguagem de programação que é uma das principais tecnologias da World Wide Web, juntamente com HTML e CSS.",
  },
  {
    icon: <FaNodeJs />,
    title: "Node.js",
    description:
      "JavaScript, é uma linguagem de programação que é uma das principais tecnologias da World Wide Web, juntamente com HTML e CSS.",
  },
  {
    icon: <AiOutlineApi />,
    title: "API",
    description:
      "APIs e serviços RESTful. REST (Representational State Transfer) é uma arquitetura leve que simplifica as comunicações de rede, enquanto APIs e serviços RESTful seguem essa arquitetura. ",
  },
  {
    icon: <SiReact />,
    title: "ReactJS",
    description:
      "React é uma biblioteca JavaScript de front-end gratuita e de código aberto para construir interfaces de usuário baseadas em componentes de interface do usuário.",
  },
  {
    icon: <SiTailwindcss />,
    title: "TailwindCSS",
    escription:
      "React é uma biblioteca JavaScript de front-end gratuita e de código aberto para construir interfaces de usuário baseadas em componentes de interface do usuário.",
  },
  {
    icon: <SiStyledcomponents />,
    title: "Styled Components",
    description:
      "Basicamente, styled components é uma biblioteca que possibilita escrever códigos CSS dentro do JavaScript. Com ele, ganhamos mais agilidade e precisão no desenvolvimento web.",
  },
  {
    icon: <AiFillGithub />,
    title: "GitHub",
    description:
      "GitHub, Inc. é um provedor de hospedagem na Internet para desenvolvimento de software e controle de versão usando Git.",
  },
  {
    icon: <SiTypescript />,
    title: "Typescript",
    description:
      "TypeScript é uma linguagem de programação desenvolvida e mantida pela Microsoft. É um superconjunto sintático estrito de JavaScript e adiciona tipagem estática opcional à linguagem.",
  },
  {
    icon: <TbBrandNextjs />,
    title: "NextJS",
    description:
      "Next.js é uma estrutura de desenvolvimento web de código aberto construída sobre Node.js, permitindo funcionalidades de aplicativos web baseados em React, como renderização do lado do servidor e geração de sites estáticos",
  },
];

export const profession = [
  // {
  //   // icon: <AiFillHtml5 />,
  //   title: "Aplicativos da web estáticos",
  //   description:
  //     "Este tipo de aplicação web é indicado para editora de livros, pois funciona muito bem no modo offline e não há necessidade de instalar software de terceiros para acessar o aplicativo da web.",
  // },
  // {
  //   // icon: <AiFillHtml5 />,
  //   title: "Aplicativos da web dinâmicos",
  //   description:
  //     "Este tipo de aplicação web é indicado para mídia social, indústria de TI, assistência médica, varejo e comércio eletrônico, transporte e logística e sob demanda. Com ele é possível fazer o gerenciamento do site diretamente para alterar e atualizar as informações. Além de ser fácil o gerenciamento de usuários para proteger seu servidor e gerenciar todos os usuários do site.",
  // },
  {
    // icon: <AiFillHtml5 />,
    title: "Apps de página única",
    description:
      "Este tipo de aplicação web é indicado para vendas de info-produtos o setor de comunicação, pois permite roteamento otimizado e experiência de navegação. Além disso, ajuda a manter a estrutura visual consistente do aplicativo da web usando lógica de apresentação.",
  },
  {
    // icon: <AiFillHtml5 />,
    title: "Sistema de gerenciamento de conteúdo",
    description:
      "Este tipo de aplicação web é indicado para plataformas de blogging, plataforma de Marketing e Vendas, portais de notícias. Com esta aplicação é possível organizar o conteúdo do site facilmente, oferece funcionalidade de usuário e grupo, obter as funcionalidades de grupo e usuário. Além disso, é de fácil integração e suporte de linguagem.",
  },
  {
    // icon: <AiFillHtml5 />,
    title: "Aplicativos de comércio eletrônico",
    description:
      "Este tipo de aplicação web é indicado para empresas de comércio eletrônico. Com esta aplicação é possível que as empresas vendam produtos usando uma única plataforma e expandam seus negócios globalmente alcançando o público máximo.",
  },
  {
    // icon: <AiFillHtml5 />,
    title: "Portal Web Apps",
    description:
      "Este tipo de aplicação web é indicado para portais de alunos ou docentes e portais governamentais. Com essa aplicação todos os documentos e informações são centralizados. É possível também pesquisar e autorizar facilmente a permissão de acordo com sua preferência. Além disso, gerencia seus cursos e outros materiais educacionais de sua conta do portal.",
  },
  {
    // icon: <AiFillHtml5 />,
    title: "Design Responsivo",
    description:
      "O design responsivo é uma das coisas mais importantes para desenvolvedores de uma aplicação. O design responsivo é como você se certifica de que seu site funciona e tem uma boa aparência independentemente do dispositivo que o usuário use, seja um iPad, um telefone celular ou um computador com tela grande.",
  },
  {
    // icon: <AiFillHtml5 />,
    title: "UI/UX",
    description:
      "A experiência do usuário é como um usuário interage e experimenta um produto, sistema ou serviço. Inclui as percepções de utilidade, facilidade de uso e eficiência de uma pessoa.",
  },
  {
    // icon: <AiFillHtml5 />,
    title: "Desempenho",
    description:
      "A performance do site é um dos aspectos que podem definir o tempo que um usuário permanece acessando e pesquisando sobre seus produtos/serviços e a experiência de navegação como um todo. ",
  },
  {
    // icon: <AiFillHtml5 />,
    title: "Práticas SEO",
    description:
      "A otimização do mecanismo de pesquisa é o processo de melhorar a qualidade e a quantidade do tráfego de um site ou página da web a partir de mecanismos de pesquisa. SEO visa tráfego não pago em vez de tráfego direto ou tráfego pago",
  },
];

export const projects = [
  {
    img: "app-task.png",
    url: `https://app-task-eta.vercel.app/`,
    urlgithub: "https://github.com/gustavofcosta/app-task",
    title: "Full-Stack Todo List",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when ",
  },
  {
    img: "cripto.png",
    url: `https://www.coininfo.com.br/`,
    urlgithub: "https://github.com/gustavofcosta/blogfinanceiro",
    title: "Blog Criptomoeda",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when ",
  },
  {
    img: "video.png",
    url: `https://plataformadevideos.vercel.app/`,
    urlgithub: "https://github.com/gustavofcosta/Plataforma-de-videos",
    title: "Plataforma Video",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when ",
  },
  {
    img: "video.png",
    url: `url`,
    urlgithub: "url",
    title: "Em Produção",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when ",
  },
];

export const blog = [
  {
    img: "test.jpg",
    url: `https://www.coininfo.com.br/`,
    title: "Blog | Criptomoeda",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when ",
  },
  {
    img: "test.jpg",
    url: `https://www.coininfo.com.br/`,
    title: "Blog | Criptomoeda",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when ",
  },
  {
    img: "test.jpg",
    url: `https://www.coininfo.com.br/`,
    title: "Blog | Criptomoeda",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when ",
  },
];

export const contact = [
  { title: "Meu email", url: "link do email" },
  { title: "Me ligue", url: "link do whatsapp" },
];
