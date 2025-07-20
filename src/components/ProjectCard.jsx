import { useFadeIn } from '../hooks/useFadeIn';

const ProjectCard = ({ image, title, description, techs, githubUrl }) => {
  const [cardRef, cardClasses] = useFadeIn();

  return (
    <div ref={cardRef} className={cardClasses}>
      <div className="project-card bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden transition-all duration-300 border border-slate-700/30 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-black/40 hover:-translate-y-2">
        <div className="project-image h-52 bg-black flex items-center justify-center overflow-hidden">
          <img src={image} alt={title} className="object-cover w-full h-full" />
        </div>
        <div className="project-content p-8">
          <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
          <p className="text-slate-400 mb-6">{description}</p>
          <div className="project-tech flex flex-wrap gap-2 mb-6">
            {techs.map((tech) => (
              <span key={tech} className="tech-tag bg-violet-500/10 text-violet-400 py-1 px-3 rounded-full text-xs border border-violet-500/30">
                {tech}
              </span>
            ))}
          </div>
          <div className="project-links flex gap-6">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="text-blue-400 font-semibold transition-colors duration-300 hover:text-violet-400">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;