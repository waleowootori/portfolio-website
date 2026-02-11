import { Link } from "react-router-dom";

function Home() {
  return (
    <section className="min-h-[97vh] flex items-center py-24 bg-linear-to-br from-slate-50 to-slate-100 ">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block mb-3 px-3 py-1 text-xs rounded-full bg-blue-100 text-blue-700">
            Full-stack Web Developer
          </span>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Building clean, responsive web apps with{" "}
            <span className="text-blue-600">React & MERN</span>
          </h1>
          <p className="mt-4 text-slate-600 text-lg">
            Hi, my name is Babawale Owootori. I'm an entry-level Web Developer
            focused on building clean, responsive web apps with React and the
            MERN stack. Welcome to my portfolio!
          </p>
          <div className="mt-6 flex gap-3">
            <Link
              to="/projects"
              className="px-5 py-3 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition shadow">
              View Projects
            </Link>
            <Link
              to="/contacts"
              className="px-5 py-3 rounded-lg border border-slate-300 hover:border-blue-600 hover:text-blue-600 transition">
              Contact Me
            </Link>
          </div>
        </div>

        <div>
          <div className="relative w-full max-w-lg h-88 rounded-3xl overflow-hidden border border-slate-200 shadow-xl">
            <img
              src="/myphoto2.jpg"
              alt="Your Name"
              className="absolute inset-0 h-full w-full object-cover rounded-3xl transition-transform duration-300 hover:scale-[1.02]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
