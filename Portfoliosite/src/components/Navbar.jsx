import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition
     ${isActive ? "bg-blue-600 text-white shadow" : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"}`;

  return (
    <nav className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <NavLink to="/">
          <span className="font-bold tracking-tight text-xl">
            <span className="text-blue-600">My </span>Portfolio
          </span>
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex gap-2">
          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>
          <NavLink to="/skills" className={linkClass}>
            Skills
          </NavLink>
          <NavLink to="/contacts" className={linkClass}>
            Contact
          </NavLink>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600"
          onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile links */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2 bg-white/90 backdrop-blur border-t border-slate-200">
          <NavLink
            to="/"
            className={linkClass}
            onClick={() => setIsOpen(false)}>
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={linkClass}
            onClick={() => setIsOpen(false)}>
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={linkClass}
            onClick={() => setIsOpen(false)}>
            Skills
          </NavLink>
          <NavLink
            to="/contacts"
            className={linkClass}
            onClick={() => setIsOpen(false)}>
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
