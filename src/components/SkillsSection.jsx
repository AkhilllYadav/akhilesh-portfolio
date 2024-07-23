import React from 'react';
import { Container, Table } from 'react-bootstrap';
import SkillComponent from './SkillComponent';
import skillsData from '../data/skillsData';
import './styles/SkillsSection.css'; // Custom CSS for Skills Section

const SkillsSection = () => {

  return (
    <Container className="skills-section" id='skills' >
      <h2 className="text-center mb-4">My Skills</h2>
      <Table responsive="md" className="skills-table">
        <thead>
          <tr>
            <th>Languages</th>
            <th>Frontend Technologies</th>
            <th>Tools & Technologies</th>
            <th>Frameworks</th>
            
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: Math.max(
            skillsData['Languages'].length,
            skillsData['Frontend Technologies'].length,
            skillsData['Tools & Technologies'].length,
            skillsData['Frameworks'].length,
          ) }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              <td>{skillsData['Languages'][rowIndex] && <SkillComponent {...skillsData['Languages'][rowIndex]} />}</td>
              <td>{skillsData['Frontend Technologies'][rowIndex] && <SkillComponent {...skillsData['Frontend Technologies'][rowIndex]} />}</td>
              <td>{skillsData['Tools & Technologies'][rowIndex] && <SkillComponent {...skillsData['Tools & Technologies'][rowIndex]} />}</td>
              <td>{skillsData['Frameworks'][rowIndex] && <SkillComponent {...skillsData['Frameworks'][rowIndex]} />}</td>
              
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default SkillsSection;
