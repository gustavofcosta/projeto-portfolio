import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {
  /* Dark Mode */
  --bg-primary-dark: #222831;
  --bg-secondary-dark: #393E46;
  --bg-third-dark: #00ADB5;
  --primary-dark: #fff;
  --secondary-dark: #EEEEEE;

  /* Light Mode */
  --bg-primary-dark: #F7FBFC;
  --bg-secondary-dark: #D6E6F2;
  --bg-third-dark: #B9D7EA;
  --primary-dark: #222;
  --secondary-dark: #769FCD;


  /* Default color */
  --main-color: #222;


  /* Spacing */
  --spacing: 0.1rem;

    /* Shadow */
  --light-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  --dark-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);

  --max-width: 1380px;
  --fixed-width: 620px;

  /* Others Fonts */
  --title-name: 'Shrikhand', cursive;
  --signature: 'Pacifico', cursive;

  --transition: all 0.3s linear;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: ${({ theme }) => theme.bgPrimary};
  color: ${({ theme }) => theme.textPrimary}
  font-family: 'Roboto', sans-serif;
  line-height: 1.5;
  font-size: 0.875rem;
  }



ul {
  list-style-type: none;
}

a {
  text-decoration: none;
  
}
h1,
h2,
h3,
h4 {
  letter-spacing: var(--spacing);
  text-transform: capitalize;
  line-height: 1.25;
  margin-bottom: 0.75rem;
}

h1 {
  font-size: 3rem;
}
h2 {
  font-size: 2rem;
}
h3 {
  font-size: 1.25rem;
}
h4 {
  font-size: 1.875rem;
}
p {
  margin-bottom: 1.25rem;
}
@media screen and (min-width: 1100px) {
  h1 {
    font-size: 4rem;
  }
  h2 {
    font-size: 2.5rem;
  }
  h3 {
    font-size: 1.75rem;
  }
  h4 {
    font-size: 1rem;
  }
  body {
    font-size: 1rem;
  }
  h1,
  h2,
  h3,
  h4 {
    line-height: 1;
  }
  p{

  }
}

`;

export default GlobalStyles;
