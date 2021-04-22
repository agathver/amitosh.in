import { graphql, useStaticQuery } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'

import GlobalStyle from '../styles/GlobalStyle'
import theme from '../styles/theme'
import Footer from './Footer'
import Header from './Header'

const Main = styled.main`
  margin: auto;
  max-width: 50rem;
`

const Layout = ({ children }: React.PropsWithChildren<React.ReactFragment>) => {
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
        <Main>{children}</Main>
        <Footer />
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}

export default Layout
