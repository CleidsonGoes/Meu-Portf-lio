import Skill from './Skill';

const softSkills = [
  'Comunicação Efetiva',
  'Trabalho em Equipe',
  'Liderança',
  'Resolução de Problemas',
  'Criatividade',
  'Adaptabilidade',
  'Empatia',
];

function SoftSkills() {
  return (
    <div className="flex flex-wrap gap-4">
      {softSkills.map((skill, index) => {
        return <Skill key={ index } title={ skill } />;
      })}
    </div>
  );
}

export default SoftSkills;
