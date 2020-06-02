import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  background: ${props => props.theme.background};
  font-family: 'Cairo', sans-serif;
}

main,
footer {
  max-width: ${props => props.theme.pageWidth};
  padding: 2rem;
  margin-left: auto;
  margin-right: auto;
}

a {
  color: ${props => props.theme.primary};
}

.about,
.social,
.intro,
footer {
  text-align: center;
}

.about {
  h1,
  h2 {
    margin: 1rem 0;
  }

  h1 {
    font-size: 1.5rem;
    line-height: 1.5rem;

    @media (min-width: ${props => props.theme.freesize}) {
      font-size: 3rem;
      line-height: 3rem;
    }
  }

  h2 {
    font-size: 1rem;
    line-height: 1rem;
    color: ${props => props.theme.primary};
    text-transform: uppercase;

    @media (min-width: ${props => props.theme.freesize}) {
      font-size: 1.5rem;
      line-height: 1.5rem;
    }
  }

  .info {
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: ${props => props.theme.freesize}) {
      flex-direction: row;
    }

    span {
      margin: 0 0.5rem;
      word-wrap: none;
    }
  }
}

.social {
  margin: 2rem 0;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;

    li {
      display: inline;
      margin: 1rem 0.25rem;
      padding: 0.25rem;

      @media (min-width: ${props => props.theme.freesize}) {
        margin: 1rem 0.5rem;
        padding: 1rem;
        font-size: 1.5rem;
      }
    }
  }
}

footer {
  .copyright {
    font-size: 0.85rem;
  }
  .imprint {
    color: ${props => props.theme.gray};
    font-size: 0.85rem;
  }
}
`
export default GlobalStyle;
