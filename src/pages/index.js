import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import HeaderImage from '../components/HeaderImage'
import SEO from '../components/seo'

import styled from 'styled-components'

import {
  FaBriefcase,
  FaMapMarker,
  FaEnvelope,
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaMedium,
} from 'react-icons/fa'

const Portrait = styled.div`
  max-width: 15rem;
  max-height: 15rem;
  width: 75%;
  height: auto;
  display: block;
  margin: 2rem auto;
  border-radius: 50%;
  border: 1rem solid;
  overflow: hidden;
  border-color: ${props => props.theme.black}
    ${props => props.theme.primaryDark} ${props => props.theme.primaryDark}
    ${props => props.theme.black};
`

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query SiteContactQuery {
      site {
        siteMetadata {
          contactInfo {
            email
            twitter
            github
            linkedIn
            medium
          }
        }
      }
    }
  `)

  const { email, twitter, github, linkedin, medium } = data.site.siteMetadata.contactInfo

  return (
    <Layout>
      <SEO title="Home" />
      <Portrait>
        <HeaderImage />
      </Portrait>

      <div class="about">
        <h1 class="name">Amitosh Swain Mahapatra</h1>
        <h2 class="pro-desc">Software Engineer / Computer Whisperer</h2>

        <div class="info">
          <span>
            <FaBriefcase /> Product Engineer @ Gojek
          </span>
          <span>
            <FaMapMarker /> Bangalore, IN
          </span>
        </div>
      </div>

      <div class="social">
        <ul>
          <li>
            <a href={`mailto:${email}?Subject=Hello!`}>
              <FaEnvelope />
            </a>
          </li>
          <li>
            <a href={`https://twitter.com/${twitter}`}>
              <FaTwitter />
            </a>
          </li>
          <li>
            <a href={`https://github.com/${github}`}>
              <FaGithub />
            </a>
          </li>
          <li>
            <a href={`https://www.linkedin.com/in/${linkedin}`}>
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a href={`https://medium.com/@${medium}`}>
              <FaMedium />
            </a>
          </li>
        </ul>
      </div>

      <div class="intro">
        <p>
          A software engineer, conference speaker, open-source contributor and
          computer whisperer from Bangalore, India. Been conjuring code since
          2010.
        </p>
        <p>
          Loves to revel in creativity &mdash; draws, sketches and cooks.
          Passionate gamer. Likes sci-fi movies, electronic, metal and rock
          music.
        </p>
        <p>
          Created, as well as contributed to a number of{' '}
          <a href={`https://github.com/${github}`}>
            open source projects
          </a>{' '}
          using Java, Go, NodeJS, &amp; Python.
        </p>
        <p>
          Always looking for challenges, problems to solve and learning great
          new skills, technologies and tools.
        </p>
      </div>
    </Layout>
  )
}
