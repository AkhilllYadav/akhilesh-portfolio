import React from 'react';
import { Container, Table } from 'react-bootstrap';
import SkillComponent from './SkillComponent';
import skillsData from '../data/skillsData';
import './styles/SkillsSection.css'; // Custom CSS for Skills Section

const SkillsSection = () => {

  const skillCategories = [
    'Languages',
    'Data Analysis & Visualization',
    'Machine Learning & AI',
    'Databases',
    'Tools & Technologies',
    'Software Engineering',
    'Frameworks'
  ];

  return (
    <Container className="skills-section" id='skills'>
      <h2 className="text-center mb-4">My Skills</h2>
      <Table responsive="md" className="skills-table">
        <thead>
          <tr>
            {skillCategories.map(category => (
              <th key={category}>{category}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: Math.max(...skillCategories.map(category => skillsData[category]?.length || 0)) }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {skillCategories.map(category => (
                <td key={category}>
                  {skillsData[category] && skillsData[category][rowIndex] && <SkillComponent {...skillsData[category][rowIndex]} />}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default SkillsSection;
