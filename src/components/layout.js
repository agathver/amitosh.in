import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Header from './header'
import './layout.css'
import Footer from './footer'

const GlobalStyle = createGlobalStyle`
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}

body {
  display: flex;
  flex-direction: column;
  font-family: "Cairo", sans-serif;
  align-items: center;
}

main,
footer {
  max-width: ${props => props.theme.pageWidth};
  padding: 2rem;
}

main {
  flex: 1 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

.intro {
  text-align: center;
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

const theme = {
  primary: '#1976d2',
  primaryDark: '#0d47a1',
  black: '#212121',
  gray: '#888',
  pageWidth: '40rem',
  freesize: '30rem',
}

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
