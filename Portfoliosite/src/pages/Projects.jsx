import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  return (
    <section className="min-h-screen px-6 py-24 bg-[#f6f7f9]">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-2xl mb-12">
          <p className="eyebrow">Selected work</p>
          <h1 className="section-heading">Interfaces built for real people and real outcomes.</h1>
          <p className="section-lede">A selection of product pages, business websites, and full-stack tools where I focused on clarity, responsiveness, and useful user journeys.</p>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-7">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
      </div>
    </section>
  );
}
