import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGitAlt, FaFigma } from 'react-icons/fa';

import { SiTailwindcss, SiVite, SiTypescript } from 'react-icons/si';

import Skill from './Skill';

function HardSkills() {
  // hardskills, react, git, vite, typescript

  const hardSkills = [
    {
      title: 'HTML5',
      icon: FaHtml5,
    },
    {
      title: 'CSS3',
      icon: FaCss3Alt,
    },
    {
      title: 'JavaScript',
      icon: FaJs,
    },
    {
      title: 'React',
      icon: FaReact,
    },
    {
      title: 'TypeScript',
      icon: SiTypescript,
    },
    {
      title: 'Git',
      icon: FaGitAlt,
    },
    {
      title: 'Vite',
      icon: SiVite,
    },
    {
      title: 'Figma',
      icon: FaFigma,
    },
    {
      title: 'Tailwind',
      icon: SiTailwindcss,
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {hardSkills.map((skill, index) => {
        return <Skill key={ index } title={ skill.title } icon={ skill.icon } />;
      })}
    </div>
  );
}

export default HardSkills;
