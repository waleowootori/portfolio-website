import { Link } from "react-router-dom";
import projects from "../data/projects";

const capabilities = [
  ["01", "Interface design", "Clear visual systems, responsive layouts, and interfaces that feel natural from the first click."],
  ["02", "Frontend engineering", "Reusable React components, accessible interactions, and clean code that can grow with the product."],
  ["03", "Product thinking", "I connect business goals to user journeys so the final experience is useful, not just attractive."],
];

const process = [
  ["Discover", "Understand the audience, the job to be done, and what a successful outcome looks like."],
  ["Shape", "Turn the brief into a focused structure, visual direction, and responsive interaction model."],
  ["Build", "Develop the experience with a maintainable component system and careful attention to detail."],
  ["Refine", "Test the important paths, improve the rough edges, and prepare the work for a confident launch."],
];

function Home() {
  return (
    <main>
      <section className="home-hero" id="top">
        <div className="home-hero-grid max-w-6xl mx-auto px-6">
          <div className="hero-copy">
            <p className="eyebrow">Frontend developer · React · MERN</p>
            <h1 className="hero-heading">Digital experiences with a little more thought behind them.</h1>
            <p className="hero-lede">I’m Babawale Owootori, a frontend-focused developer building fast, responsive interfaces and practical web products for businesses, teams, and ambitious founders.</p>
            <div className="hero-proof"><span>Available for frontend roles</span><span>Open to freelance work</span></div>
            <div className="mt-8 flex flex-wrap gap-3"><Link to="/projects" className="button button-primary">Explore selected work <span>↗</span></Link><Link to="/contacts" className="button button-secondary">Let’s talk</Link></div>
          </div>
          <div className="hero-art-wrap"><div className="hero-orbit orbit-one" /><div className="hero-orbit orbit-two" /><div className="hero-photo-wrap"><img src="/myphoto2.jpg" alt="Babawale Owootori" className="hero-photo" /></div><div className="hero-float-card"><span>Currently focused on</span><strong>Useful, beautiful web products</strong></div></div>
        </div>
        <div className="scroll-cue">Scroll to explore <span>↓</span></div>
      </section>

      <section className="statement-band"><div className="max-w-6xl mx-auto px-6"><p className="statement-kicker">A frontend practice built around</p><div className="statement-line"><span>clarity</span><i>·</i><span>craft</span><i>·</i><span>momentum</span></div></div></section>

      <section className="home-section capabilities-section" id="capabilities"><div className="max-w-6xl mx-auto px-6"><div className="section-intro"><p className="eyebrow">What I bring</p><h2 className="display-heading">The useful space between design and engineering.</h2><p className="section-lede">I like working where ideas become interfaces: shaping the experience, building the system, and making sure the result works for the people it is meant to serve.</p></div><div className="capability-grid">{capabilities.map(([number, title, text]) => <article className="capability-item" key={number}><span className="capability-number">{number}</span><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="home-section work-section" id="work"><div className="max-w-6xl mx-auto px-6"><div className="work-heading"><div><p className="eyebrow">Selected work</p><h2 className="display-heading">Recent work, made to be used.</h2></div><Link to="/projects" className="text-link">View all projects ↗</Link></div><div className="featured-projects">{projects.slice(0, 4).map((project, index) => <Link to="/projects" className={`featured-project featured-project-${index + 1}`} key={project.title}><div className={`featured-project-visual project-visual-${project.accent || "blue"}`}>{project.images?.[0] && <img src={project.images[0]} alt="" />}</div><div className="featured-project-meta"><span>0{index + 1} / Case study</span><h3>{project.title}</h3><p>{project.description}</p><b>View project ↗</b></div></Link>)}</div></div></section>

      <section className="home-section process-section" id="process"><div className="max-w-6xl mx-auto px-6"><div className="section-intro"><p className="eyebrow">How I work</p><h2 className="display-heading">A calm process for complex work.</h2></div><div className="process-list">{process.map(([title, text], index) => <div className="process-row" key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></div>)}</div></div></section>

      <section className="closing-section" id="contact"><div className="max-w-5xl mx-auto px-6"><p className="eyebrow">Have something in mind?</p><h2>Let’s make the next screen worth stopping for.</h2><p>I’m open to frontend roles, freelance builds, and thoughtful collaborations.</p><div className="mt-8 flex flex-wrap justify-center gap-3"><Link to="/contacts" className="button button-primary">Start a conversation ↗</Link><a href="https://www.linkedin.com/in/wale-owootori" target="_blank" rel="noreferrer" className="button button-secondary">LinkedIn</a></div></div></section>
    </main>
  );
}

export default Home;
