export type ProjectCardProps = {
  projectName: string;
  tags: string[];
  slug: string;
  image: string;
};

function ProjectCard({ projectName, tags, slug, image }: ProjectCardProps) {
  return (
    <div className="rounded-2xl shadow-lg overflow-hidden bg-dark-900 flex flex-col h-full" id="projetos">
      <img src={ image } alt="" className="w-full object-cover" />
      <div className="p-4 flex flex-col flex-grow">
        <h2 className="text-xl font-bold text-white">{projectName}</h2>
        <div className="flex flex-wrap mt-2 mb-auto">
          {tags.map((tag) => (
            <span
              key={ tag }
              className="bg-gray-200 rounded-md text-xs px-2 py-1 mr-2 mb-2"
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={ `/${slug}` }
          className="bg-green-500 mt-4 px-4 py-2 rounded-md w-full block text-center"
        >
          Ver mais detalhes
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
