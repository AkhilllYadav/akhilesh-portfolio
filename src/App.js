import './App.css';
import AboutSection from './components/AboutSection';
import Certificate from './components/Certificate';
import ContactSection from './components/ContactSection';
import EducationComponent from './components/EducationComponent';
import educationData from './data/educationData';
import Experience from './components/Experience';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import HeroComponent from './components/HeroComponent';
import Projects from './components/Projects';
import IncludeAI from './components/IncludeAI';
import SkillsSection from './components/SkillsSection';

function App() {
  return (

    
    <>
    <HeaderComponent/>
    
    <HeroComponent
      title="Welcome to My Portfolio"
      subtitle="Discover my projects, skills, and experience."
       buttonText1="Download CV"
         buttonText2="Contact Me"
          imageUrl="https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png"
          cvLink="https://docs.google.com/document/d/1D5i8O6ZLhjNACBYBH7_bxlKTA5TQwADz7Rcy7LaIqw8/edit?usp=sharing" // Replace with your actual CV link
/>
            
      
      <AboutSection/>
            <IncludeAI/>
            <EducationComponent education={educationData} />
      <Experience/>
      <SkillsSection/>
      <Projects />
      
      <Certificate/>
      <ContactSection/>
      <FooterComponent/>
    </>
  );
}

export default App;
