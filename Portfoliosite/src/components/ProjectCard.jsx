import { useEffect, useRef, useState } from "react";

function ProjectCard({ project }) {
  const images = project.images || [];
  const [index, setIndex] = useState(0);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    if (images.length < 2) return undefined;
    const intervalId = setInterval(() => {
      if (!isHoveredRef.current) setIndex((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <article className="border border-slate-200 rounded-2xl p-5 bg-white shadow-sm hover:shadow-xl transition">
      <div className={`relative h-56 rounded-xl overflow-hidden mb-6 group project-visual project-visual-${project.accent || "blue"}`} onMouseEnter={() => (isHoveredRef.current = true)} onMouseLeave={() => (isHoveredRef.current = false)}>
        {images.length ? <div className="flex h-full transition-all duration-1000 ease-in-out" style={{ transform: `translateX(-${index * 100}%)` }}>{images.map((img) => <div key={img} className="min-w-full h-full"><img src={img} alt={project.title} className="h-full w-full object-cover" /></div>)}</div> : <div className="project-placeholder"><span className="project-placeholder-mark">{project.title.slice(0, 2).toUpperCase()}</span><span>{project.shortTitle || project.title}</span><small>Frontend case study</small></div>}
        {images.length > 1 && <><button aria-label="Previous project image" onClick={() => setIndex((i) => (i === 0 ? images.length - 1 : i - 1))} className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/40 p-2 rounded-full opacity-0 group-hover:opacity-100 transition">‹</button><button aria-label="Next project image" onClick={() => setIndex((i) => (i + 1) % images.length)} className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/40 p-2 rounded-full opacity-0 group-hover:opacity-100 transition">›</button></>}
      </div>
      {images.length > 1 && <div className="flex justify-center gap-2 mb-4">{images.map((img, i) => <button aria-label={`Show image ${i + 1}`} key={img} onClick={() => setIndex(i)} className={`h-2 rounded-full transition-all ${i === index ? "bg-orange-500 w-5" : "bg-slate-300 w-2"}`} />)}</div>}
      <div className="project-card-heading"><h2>{project.title}</h2><span>Case study</span></div>
      <p className="project-description">{project.description}</p>
      {project.outcome && <p className="project-outcome">{project.outcome}</p>}
      <div className="project-tech">{project.tech.map((item) => <span key={item}>{item}</span>)}</div>
      <div className="mt-5 flex gap-5 text-sm font-bold">{project.github && <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-700 hover:text-orange-500">View code ↗</a>}{project.live && <a href={project.live} target="_blank" rel="noreferrer" className="text-orange-500 hover:text-orange-600">Live product ↗</a>}</div>
    </article>
  );
}

export default ProjectCard;
