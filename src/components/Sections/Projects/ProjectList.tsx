import { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
// import { getProjects } from '../../../services/api';
import dbList from '../../../../db.json'

// type ProjectListProps = {
//   metadata: {
//     descricao_do_projeto: string;
//     imagem_do_projeto: {
//       url: string;
//     };
//     tags: string;
//   };
//   slug: string;
//   title: string;
// };

type DbListProps = {
  "id": number,
  "projectName": string,
  "tags": string[],
  "icon": string,
  "url": string
}

function ProjectList() {
  const [projects, setProjects] = useState<DbListProps[]>([]);

  useEffect(() => {
    // getProjects().then((data) => setProjects(data));
    setProjects(dbList)
  }, []);

  return (
    <section className="bg-dark-600" id="projetos">
      <div className="max-w-screen-xl mx-auto p-8">
        <h1 className="text-center text-2xl mb-4 font-bold text-white">
          Projetos
        </h1>
        <div
          className="grid gap-4 grid-cols-1 justify-center
          sm:grid-cols-2
          md:grid-cols-[repeat(auto-fill,292px)]"
        >
          {projects?.map((project) => (
            <ProjectCard
              id={ project.id }
              projectName={ project.projectName }
              tags={ project.tags.map((tag) => tag.trim()) }
              icon={ project.icon }
              url={ project.url }
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectList;
