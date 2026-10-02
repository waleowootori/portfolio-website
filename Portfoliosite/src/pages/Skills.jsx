function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind",
    "Git",
    "GitHub",
    "Accessibility",
    "Responsive Design",
    "REST APIs",
    "Component Architecture",
  ];

  return (
    <section className="content-section">
      <div className="max-w-6xl mx-auto px-6">
        <p className="eyebrow">How I work</p>
        <h1 className="section-heading">A practical frontend toolkit, backed by full-stack context.</h1>
        <p className="section-lede mb-8">I care about the details users feel: clear hierarchy, responsive behavior, accessible interactions, and interfaces that stay maintainable after launch.</p>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm hover:shadow transition">
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
