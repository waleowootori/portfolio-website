import { useEffect, useState, useRef } from "react";

function ProjectCard({ project }) {
  if (!project || !project.images || project.images.length === 0) return null;

  const [index, setIndex] = useState(0);
  const isHoveredRef = useRef(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!isHoveredRef.current) {
        setIndex((prev) => (prev + 1) % project.images.length);
      }
    }, 6000);

    return () => clearInterval(intervalId);
  }, [project.images.length]);

  return (
    <div className="border rounded-2xl p-5 bg-white shadow-md hover:shadow-xl transition">
      {/* Carousel */}
      <div
        className="relative h-56 rounded-xl overflow-hidden mb-6 group"
        onMouseEnter={() => (isHoveredRef.current = true)}
        onMouseLeave={() => (isHoveredRef.current = false)}>
        <div
          className="flex h-full transition-all duration-1000 ease-in-out"
          style={{ transform: `translateX(-${index * 100}%)` }}>
          {project.images.map((img, i) => (
            <div key={i} className="min-w-full h-full">
              <img
                src={img}
                alt={project.title}
                className={`h-full w-full object-cover rounded-xl transition-opacity duration-1000 ${
                  i === index ? "opacity-100" : "opacity-30"
                }`}
              />
            </div>
          ))}
        </div>

        {/* Arrows */}
        <button
          onClick={() =>
            setIndex((i) => (i === 0 ? project.images.length - 1 : i - 1))
          }
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-1 rounded-full opacity-0 group-hover:opacity-100 transition">
          ‹
        </button>

        <button
          onClick={() => setIndex((i) => (i + 1) % project.images.length)}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/60 p-1 rounded-full opacity-0 group-hover:opacity-100 transition">
          ›
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mb-4">
        {project.images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-2 w-2 rounded-full cursor-pointer transition-all duration-300 ${
              i === index ? "bg-blue-600 w-5" : "bg-gray-300"
            }`}
          />
        ))}
      </div>

      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm mt-3 text-gray-600">{project.description}</p>

      <div className="mt-4 flex gap-4">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline">
            GitHub
          </a>
        )}
        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline">
            Live Demo
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
