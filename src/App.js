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
          imageUrl="https://media.licdn.com/dms/image/D5603AQHt9lkW7WgWJg/profile-displayphoto-shrink_800_800/0/1707206460153?e=1727308800&v=beta&t=BvxVtQSOAk3tf8SzKYWEO3ITzscOfDAQBt9_WwsVyzw"
          cvLink="https://docs.google.com/document/d/1D5i8O6ZLhjNACBYBH7_bxlKTA5TQwADz7Rcy7LaIqw8/edit?usp=sharing" // Replace with your actual CV link
/>

      <AboutSection/>
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
