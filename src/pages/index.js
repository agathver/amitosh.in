import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import HeaderImage from '../components/HeaderImage'
import SEO from '../components/seo'

import styled from 'styled-components'

import {
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
  border: 0.5rem solid;
  overflow: hidden;
  border-color: #fefefe;
  box-shadow: 0px 15.619px 31.2381px #00000026;
`

const Intro = styled.div`
  color: ${props => props.theme.secondary};
  text-align: center;
  max-width: 40rem;
`

const Social = styled.nav``

const SocialLink = styled.a`
  cursor: pointer;
  color: ${props => props.theme.secondary};
  text-align: center;
  border-radius: 50%;
  text-decoration: none;

  margin: 0.25rem 0.5rem;
  font-size: 1.25rem;

  &:hover {
    color: ${props => props.theme.black};
  }
`

const HeroHeading = styled.h1`
  font-family: 'IBM Plex Serif', serif;
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

  const {
    email,
    twitter,
    github,
    linkedin,
    medium,
  } = data.site.siteMetadata.contactInfo

  return (
    <Layout>
      <SEO title="Home" />
      <Portrait>
        <HeaderImage />
      </Portrait>

      <div class="about">
        <HeroHeading>Amitosh Swain Mahapatra</HeroHeading>
      </div>

      <Intro>
        <p>
          A software engineer, currently working at Gojek, conference speaker,
          open-source contributor and computer whisperer from Bangalore, India.
          Been conjuring code since 2010.
        </p>
        <p>
          Loves to revel in creativity &mdash; draws, sketches and cooks.
          Passionate gamer. Likes sci-fi movies, electronic, metal and rock
          music. Always looking for challenges, problems to solve and learning
          great new skills, technologies and tools.
        </p>
      </Intro>

      <Social>
        <SocialLink href={`mailto:${email}?Subject=Hello!`}>
          <FaEnvelope />
        </SocialLink>

        <SocialLink href={`https://twitter.com/${twitter}`}>
          <FaTwitter />
        </SocialLink>

        <SocialLink href={`https://github.com/${github}`}>
          <FaGithub />
        </SocialLink>

        <SocialLink href={`https://www.linkedin.com/in/${linkedin}`}>
          <FaLinkedin />
        </SocialLink>

        <SocialLink href={`https://medium.com/@${medium}`}>
          <FaMedium />
        </SocialLink>
      </Social>
    </Layout>
  )
}