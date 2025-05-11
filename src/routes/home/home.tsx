import React from 'react'
import './home.css';
import ElectronicsSection from './electronicsSection';
import ProjectsSection from './projectsSection';
import AccomplishmentsSection from './accomplishmentsSection';
import Contact from '../contact/contact';
import Gallery from './gallery';

const Home = () => {
  return (
    <>
      <ElectronicsSection />
      <AccomplishmentsSection />
      <ProjectsSection />
      <Gallery />
      <Contact />
    </>
  )
}

export default Home