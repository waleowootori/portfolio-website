import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projects = [
    {
      title: "BetterPay",
      description:
        "A MERN web application for comparing cross-border payment routes by fees, FX rates, settlement time, and provider value.",
      tech: ["MongoDB", "Express", "React", "Node.js"],
      github: "https://github.com/waleowootori",
      live: "https://better-pay-mu.vercel.app/",
      images: [
        "/betterpay-ui.png",
        "/betterpay-ui2.png",
        "/betterpay-footer.png",
        "/betterpay-code.png",
      ],
    },
    {
      title: "Todo App",
      description:
        "A task manager app with CRUD functionality built using React and Tailwind.",
      tech: ["React", "Tailwind", "JavaScript", "LocalStorage"],
      github: "https://github.com/waleowootori/todos-app", // replace with your real repo
      live: "", // add Netlify/Vercel link later
      images: ["/todo-ui.jpg", "/todo-code.jpg", "/todo-credit.jpg"],
    },
    {
      title: "Narosundar Barbing Salon",
      description:
        "A modern barbing salon website built with React, featuring services, gallery, and contact sections.",
      tech: ["React", "CSS"],
      github: "https://github.com/waleowootori/narosundar-salon",
      live: "", // add live link later
      images: [
        "/narosundar-ui.jpg",
        "/narosundar-code.jpg",
        "/narosundar-credit.jpg",
      ],
    },
    {
      title: "Culinary Blog",
      description:
        "A responsive culinary blog built with HTML and CSS, showcasing recipes and food content with a clean layout.",
      tech: ["HTML", "CSS"],
      github: "https://github.com/waleowootori/culinary-blog", // your real repo
      live: "",
      images: ["/meranda-ui.jpg", "/meranda-code.jpg", "/meranda-credit.jpg"],
    },
    {
      title: "Modern Landing Page",
      description:
        "A visually modern landing page that feels fast, intuitive, and user-focused.",
      tech: ["React", "HTML", "CSS", "Tailwind"],
      github: "https://github.com/waleowootori/Landing-page",
      live: "https://marvelous-mermaid-e18c93.netlify.app/",
      images: [
        "/landingpage-ui.png",
        "/landingpage-ui2.png",
        "/landingpage-ui3.png",
        "/landingpage-cta.png",
        "/landingpage-test.png",
        "/landingpage-footer.png",
        "/landingpage-code.png",
      ],
    },
    {
      title: "Capitalshop (Fashion & Lifestyle Clone)",
      description:
        "A cloned fashion and lifestyle e-commerce UI built with React, replicating a modern shopping experience.",
      tech: ["React", "CSS"],
      github: "https://github.com/waleowootori/capitalshop-clone", // update if different
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
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-10">
          Featured Projects
        </h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={i} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
