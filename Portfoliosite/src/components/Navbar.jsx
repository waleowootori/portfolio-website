import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition
     ${isActive ? "bg-blue-600 text-white shadow" : "text-slate-700 hover:bg-slate-100 hover:text-blue-600"}`;

  return (
    <nav className="site-nav sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <NavLink to="/">
          <span className="brand-mark">
            BO<span>.</span>
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
          type="button"
          className={`mobile-menu-toggle md:hidden ${isOpen ? "is-open" : ""}`}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile links */}
      {isOpen && (
        <div id="mobile-navigation" className="mobile-navigation md:hidden">
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
