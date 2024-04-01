import SectionTitle from "../SectionTitle";
import { FaLink } from "react-icons/fa6";
import ProjectCard from "./project-card";
import { projects } from "./projects";

const Portfolio = () => {
  return (
    <section className="w-full p-4 space-y-8" id="portfolio">
      <SectionTitle icon={FaLink} label="Portfolio" title="Projects" />
      <div className="w-full h-full flex flex-col space-y-4 justify-center items-center p-2 md:flex-row md:space-y-0 md:justify-between md:space-x-4 md:overflow-x-scroll">
        {projects.map((project, index) => (
            <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            languages={project.languages}
            href={project.href}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
