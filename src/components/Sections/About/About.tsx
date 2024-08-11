import HardSkills from './HardSkills';
import SoftSkills from './SoftSkills';

function About() {
  return (
    <div className="bg-dark-900" id="sobre">
      <section className="max-w-screen-xl mx-auto p-8 text-white">
        <div className="flex flex-col md:flex-row">
          <h2
            className="flex-shrink-0 w-1/4 text-2xl
          mb-4 font-bold
          text-white md:mb-0 md:mr-4"
          >
            Sobre mim
          </h2>
          <p className="text-base md:w-3/4 text-justify">
            Sou um entusiasta de tecnologia dedicado ao estudo e prática 
            de desenvolvimento web. Tenho diversos projetos em Javascript, 
            HTML, CSS e React.js na parte front-end e em Node.js com 
            TypeScript em projetos back-end, estou constantemente 
            explorando novas tecnologias e metodologias para aprimorar 
            minhas habilidades e criar experiências web incríveis.<br/>
            <br/>
            🎓 <b>Formação Acadêmica</b><br/>
            Estou formando em Análise e Desenvolvimento de Sistemas pela 
            Estácio. Durante a graduação, estou tendo a oportunidade de 
            participar em diversas disciplinas que agregam imensamente na 
            atuação no desenvolvimento Web, sendo a primeira delas 
            algoritmos e programação de computadores, com foco em lógica 
            de programação em Python e Java. Atualmente sou formado em 
            Desenvolvimento Full Stack Web pela Trybe.
          </p>
        </div>
        <div className="flex flex-col mt-4 md:flex-row font-bold">
          <h2 className="flex-shrink-0 w-1/4 text-2xl mb-2 md:mb-0 md:mr-4">
            Habilidades
          </h2>
          <div className="text-base md:w-3/4">
            <h3 className="mb-4">Hard Skills</h3>
            <HardSkills />
            <h3 className="mb-4">Soft Skills</h3>
            <SoftSkills />
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
