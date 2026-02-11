import { useEffect, useState } from "react";

// 🔹 ProjectCard component lives here (no separate file needed)
function ProjectCard({ project }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!project?.images?.length) return;

    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % project.images.length);
    }, 6000); // auto slide every 6s

    return () => clearInterval(intervalId);
  }, [project.images.length]);

  return (
    <div className="border rounded-2xl p-5 bg-white shadow-md hover:shadow-xl transition">
      {/* Carousel */}
      <div className="relative h-56 rounded-xl overflow-hidden mb-8 group">
        <div
          className="flex h-full transition-transform duration-1000 ease-in-out"
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}>
          {project.images.map((img, i) => (
            <div key={i} className="min-w-full h-full">
              <img
                src={img}
                alt={project.title}
                className="h-full w-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        {/* Simple arrows */}
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

      <h3 className="text-xl font-semibold">{project.title}</h3>
      <p className="text-sm mt-3 text-gray-600">{project.description}</p>
      <div className="mt-4 flex gap-4">
        <a
          href={project.github}
          target="_blank"
          className="text-blue-600 hover:underline">
          GitHub
        </a>
        <a
          href={project.live}
          target="_blank"
          className="text-blue-600 hover:underline">
          Live Demo
        </a>
      </div>
    </div>
  );
}

export default function Projects() {
  const projects = [
    {
      title: "Todo App",
      description:
        "A task manager app with CRUD functionality built using React and Tailwind.",
      tech: ["React", "Tailwind", "Javascript", "LocalStorage"],
      github: "",
      live: "",
      images: ["/todo-ui.jpg", "/todo-code.jpg", "/todo-credit.jpg"], // Add screenshot here
    },
    {
      title: "Narosundar Barbing Salon",
      description:
        "A modern barbing salon website built with React, featuring services, gallery, and contact sections.",
      tech: ["React", "CSS"],
      github: "",
      live: "",
      images: [
        "/narosundar-ui.jpg",
        "/narosundar-code.jpg",
        "/narosundar-credit.jpg",
      ],
    },
    {
      title: "Culinary Blog",
      description:
        "A responsive culinary blog built with HTML and CSS, showcasing recipes and food content with clean layout.",
      tech: ["HTML", "CSS"],
      github: "",
      live: "",
      images: ["/meranda-ui.jpg", "/meranda-code.jpg", "/meranda-credit.jpg"],
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio built with React, Tailwind, and Vite.",
      tech: ["React", "Tailwind", "Vite"],
      github: "",
      live: "",
      images: ["/portfolio-ui.jpg", "/portfolio-credit.jpg"], // Screenshot of this site
    },
    {
      title: "Capitalshop (Fashion & Lifestyle Clone)",
      description:
        "A cloned fashion and lifestyle e-commerce UI built with React, replicating a modern shopping experience.",
      tech: ["React", "CSS"],
      github: "",
      live: "",
      images: [
        "/capitalshop-ui.jpg",
        "/capitalshop-code.jpg",
        "/capitalshop-credit.jpg",
      ],
    },
  ];

  return (
    <section className="min-h-screen px-6 py-20 bg-gray-50">
      <h2 className="text-3xl font-bold mb-10">Featured Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>
    </section>
  );
}
