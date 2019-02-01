import './index.css'
import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { FaGithubSquare } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[
        `kevinchisholm`,
        `kevin chisholm`,
        `kevin jamaul chisholm`,
        `portfolio`,
        `web developer`,
        `web development`,
        `designer`,
      ]}
    />

    <div className="hero">
      <h1 className="hero-primary-text">Kevin Chisholm</h1>
      <p className="hero-sub-text">Designer | Developer | Innovator</p>
      <div className="contact-icons">
        <a
          href="https://github.com/itsjustkevin"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithubSquare size={20} />
        </a>
        <a
          href="https://www.linkedin.com/in/kevin-chisholm/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn size={20} />
        </a>
        <a href="mailto:kevinjchisholm@gmail.com">
          <FaEnvelope size={20} />
        </a>
      </div>
    </div>

    <div className="main">
      <div className="section">
        <p className="section-label">My Story</p>
        <p className="section-content">
          Hi, I'm <strong>Kevin</strong>! I'm a <strong>web developer</strong>{' '}
          and <strong>designer</strong> from the great state of Texas. For the
          last eight years I've been proudly serving in the United States Navy,
          based in Yokosuka, Japan as a Radar Systems Technician, Weapon Systems
          Technician, Explosives Safety Manager, Instructional Designer, and
          Instructor.
          <br />
          <br />
          My love for development came when I was given the opportunity to look
          into the source code for one of the radar systems I worked on and give
          feedback on future features. From that moment, I stuck my head in the
          books and began studying the <strong>Ruby</strong> programming
          language, and enrolled in school to obtain a Bachelors of Science in
          Computer Science, all while being a top perfomer and innovator in my
          current role.
          <br />
          <br />
          The challenge of software engineering and design have both become my{' '}
          <strong>passion</strong> and <strong>obsession</strong>! I have met
          the challenge of obtaining 100% uptime on systems critical to national
          defense while under the greatest pressures imaginable, all over the
          world! I hope to soon become part of a team of devolopers that share
          my love of the craft.
        </p>
      </div>

      <div className="section">
        <p className="section-label">Skills</p>
        <p className="section-content">
          <span className="section-skill-label">Front-End:</span> JavaScript,
          HTML, CSS, SCSS
        </p>
        <p className="section-content">
          <span className="section-skill-label">Back-End:</span> Node, Java,
          PHP, Ruby
        </p>
        <p className="section-content">
          <span className="section-skill-label">Frameworks:</span> Express,
          Laravel
        </p>
        <p className="section-content">
          <span className="section-skill-label">Libraries:</span> React, Vue
        </p>
      </div>

      <div className="section">
        <p className="section-label">Resume</p>
        <a
          href="/resume/Kevin_Chisholm_Resume.pdf"
          download="Kevin_Chisholm_Resume.pdf"
        >
          Download Resume
        </a>
      </div>

      <div className="section">
        <p className="section-label">Projects</p>
        <p className="section-content">Coming soon ...</p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
