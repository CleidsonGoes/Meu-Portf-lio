// create a componente to render de skill card, that could have a title and icon, but icon optional
// i'm using just tailwind and typescript

import { IconType } from 'react-icons/lib';

interface SkillProps {
  title: string;
  icon?: IconType | null;
}

function Skill({ title, icon: Icon = null }: SkillProps) {
  return (
    <div
      className={ `flex flex-col items-center justify-center  
      p-4 rounded-lg bg-dark-500 gap-2
      ${Icon && 'w-24'}` }
    >
      {Icon ? <Icon size={ 32 } color="#1EB720" /> : null}
      <h3 className="text-base font-normal text-center text-white">{title}</h3>
    </div>
  );
}

export default Skill;
