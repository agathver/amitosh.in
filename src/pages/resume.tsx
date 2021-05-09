import React from 'react'

import {
  FaBriefcase,
  FaEnvelope,
  FaFilePdf,
  FaGithub,
  FaGraduationCap,
  FaLinkedin,
  FaMedium,
  FaOsi,
  FaProjectDiagram,
  FaToolbox,
  FaTwitter
} from 'react-icons/fa'

import styled from 'styled-components'
import HeaderImage from '../components/HeaderImage'
import Layout from '../components/Layout'
import SeoMetadata from '../components/SeoMetadata'
import { useContactInfo } from '../hooks/use-contact-info'
import { size } from '../styles/media'

const Hero = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0 2rem;
  justify-content: space-between;

  ${size.medium} {
    flex-direction: row;
  }
`

const Portrait = styled.div`
  max-width: 10rem;
  max-height: 10rem;
  margin: 1rem;
  height: auto;
  display: block;
  border-radius: 50%;
  border: 0.5rem solid;
  overflow: hidden;
  border-color: #fefefe;
  box-shadow: 0px 15.619px 31.2381px #00000026;
`

const Intro = styled.div`
  color: ${props => props.theme.secondary};
  text-align: justify;
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

const About = styled.div`
  text-align: center;

  ${size.medium} {
    margin-left: 2rem;
  }
`

const HeroHeading = styled.h1`
  font-family: 'IBM Plex Serif', serif;
`

const Description = styled.p`
  font-style: italic;
  color: #888;
  margin-top: 0
`

const Section = styled.section``
const ResumeItem = styled.div``

const Title = styled.h3`
  margin-bottom: 0
`

const SkillList = styled.ul`
  columns: 2;
  
  ${size.large} {
    columns: 3
  }
`

const Links = styled.div`
  display: flex;
  justify-content: center;

  ${size.medium} {
    justify-content: flex-end;
  }
`

const DownloadLink = styled.a`
  padding: .5rem 1rem;
  color: #e53935;
  border: 1px solid #e53935;
  text-decoration: none;

  &:hover {
    color: #fff;
    background: #e53935;
  }
`

export default function ResumePage() {

  const {
    email,
    twitter,
    github,
    linkedIn,
    medium
  } = useContactInfo()

  return (
    <Layout>
      <SeoMetadata title='Resume' description='Resume of Amitosh Swain Mahapatra' />

      <Links>
        <DownloadLink href='https://drive.google.com/file/d/15PgsupwKCtukArAqy-nBMHKdI8W5q7hW/view?usp=sharing'>
          <FaFilePdf /> Download as PDF
        </DownloadLink>
      </Links>
      <Hero>
        <Portrait>
          <HeaderImage name='Amitosh Swain Mahapatra' />
        </Portrait>
        <About>
          <HeroHeading>Amitosh Swain Mahapatra</HeroHeading>
          <h3>Software Engineer from Bangalore, India</h3>
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

            <SocialLink href={`https://www.linkedin.com/in/${linkedIn}`}>
              <FaLinkedin />
            </SocialLink>

            <SocialLink href={`https://${medium}`}>
              <FaMedium />
            </SocialLink>
          </Social>
        </About>
      </Hero>


      <Intro>
        <p>
          I'm a software engineer based in Bangalore, India with 2 years of
          experience in the software industry. My focus area for the past few
          years has been back-end development with Java and Go, but I'm also
          skilled in Python, NodeJS and front-end development with React.</p>
        <p>I currently working at Gojek, building Gopay, a e-wallet for south-east
          asia. I have made a considerable amount of contribution to open-source.
          I maintain a popular NodeJS module called `bcrypt`, which gets around
          2 million installs every day making it one of the most used NodeJS
          modules. I have worked with the FOSSi Foundation as part of the Google
          Summer of Code, 2017, and the Fedora Project as part of the Google
          Summer of Code, 2018</p>
        <p>
          When not coding, I love to revel in creativity &mdash; I draw, paint,
          sketch and cook. I'm also a passionate gamer. I like djent, metal and
          rock music.
        </p>
      </Intro>
      <Section>
        <h2><FaToolbox /> Skills</h2>
        <SkillList>
          <li>Java (expert)</li>
          <li>Golang (advanced)</li>
          <li>Python (advanced)</li>
          <li>Javascript (expert)</li>
          <li>SQL (advanced)</li>
          <li>Kubernetes (intermediate)</li>
        </SkillList>
      </Section>

      <Section>
        <h2><FaBriefcase /> Work Experience</h2>

        <ResumeItem>
          <Title>Product Engineer at Gojek</Title>
          <Description>Bangalore, India &mdash; May 2019 &ndash; present</Description>
          <p>
            Backend engineer in the team responsible for the external-facing APIs
            of Gojek's payment and digital wallet — Gopay. I'm in charge of defining
            and improving the integration of Gopay with other Gojek services,
            third-party payment gateways and merchants. Most of my work uses Java
            and Golang with some Python for internal tools. Some of my notable work:
          </p>
          <ul>
            <li>
              Worked on engineering and maintaining core APIs of Gopay exposed to
              customers and merchants.
            </li>
            <li>Rewrote gRPC transport libraries to optimize connection reuse
              and caching to improve service throughput up to 200%.
            </li>
            <li> As a part of a two-person team, worked on the design and implementation
              of the GoPay payment state management system and API gateway in modern Java.
            </li>
          </ul>
        </ResumeItem>
        <ResumeItem>
          <Title>Google Summer of Code 2018 with Fedora Project</Title>
          <Description>May 2018 &ndash; August 2018</Description>
          <p>
            I was selected to work with Fedora for Google Summer of Code 2018 on
            the Fedora Community app, an app for interacting with the
            Fedora infrastructure services, in terms of performance and utility.
            My work was primarily on AngularJS.
          </p>
        </ResumeItem>
        <ResumeItem>
          <Title>Data Engineering Intern at Mytrah Energy (India) Limited</Title>
          <Description>Hyderabad, India &mdash; December 2017 &ndash; January 2018</Description>
          <p>
            It was a two month winter internship with Mytrah Enegry (India) Limited,
            a renewable energy company. My work was to develop pipelines to ingest
            data from wind mills for long-term storage and analytics using Python
            for pipelines, React for the UI, and PySpark for analytics.
          </p>
          <ul>
            <li> Developed a pipeline for sanitizing and ingesting sensor data
              from windmills into a data warehouse on Amazon S3 and Amazon Athena.
            </li>
            <li> Developed a web-based UI for generating reports from sensor data</li>
            <li> Worked on extracting operation efficiency metrics from the windmill data.</li>
          </ul>
        </ResumeItem>
        <ResumeItem>
          <Title>Google Summer of Code 2018 at Free and Open Source Sillicon Foundation</Title>
          <Description>May 2017 &ndash; Aug 2017</Description>
          <p>
            I was selected to work with Fedora for Google Summer of Code 2017 on
            Librecores, a platform to discover free and open-source hardware IP
            cores. I implemented an automated pipeline to analyze source code
            repositories listed on LibreCores.org, to determine the quality of
            the project and designate a metric score.
          </p>
        </ResumeItem>
      </Section>

      <Section>
        <h2><FaGraduationCap /> Education</h2>
        <ResumeItem>
          <Title>B.Tech Computer Science and Engineering (Hons.)</Title>
          <Description>
            College of Engineering and Technology, Bhubaneswar, India
            &mdash; Graduated in May 2019 &ndash; GPA: 8.85/10
          </Description>
        </ResumeItem>
      </Section>

      <Section>
        <h2><FaProjectDiagram /> Projects</h2>
        <ResumeItem>
          <Title>Sphere &mdash; Natural Language Interface to RDBMS</Title>
          <p>
            Developed a system which converts questions into SQL queries using a
            probabilistic CFG, executes them on a configured database and turns
            the results into natural language using a seq2seq neural network
            model built on Tensorflow.
          </p>
        </ResumeItem>
        <ResumeItem>
          <Title>POS Tagger and NER for Indian Languages</Title>
          <p>
            Worked on designing parts of speech tagging and named entity
            recognition for Odia and Bengali using HMM, Perceptron and CRF models.
          </p>
        </ResumeItem>
      </Section>
      <Section>
        <h2><FaOsi /> Volunteering and Open Source</h2>
        <ResumeItem>
          <Title>bcrypt</Title>
          <p>
            I maintain <a href='https://www.npmjs.com/package/bcrypt'>bcrypt</a>,
            a popular NodeJS module for password hashing with bcrypt algorithm.
          </p>
        </ResumeItem>
        <ResumeItem>
          <Title>Fedora Project</Title>
          <p>
            Member of DotNet SIG, a group dedicated to the release and availability
            of .NET Core in Fedora
          </p>
        </ResumeItem>
      </Section>
    </Layout>
  )
}
