import clsx from "clsx";
import { Link, NavLink } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="title-header">
        <Link className="title" to="/home">
          Pihanaka`ikena o Kaua`i
        </Link>
      </div>

      <div className="footer-links">
        <NavLink
          className={({ isActive }) =>
            clsx("nav-link", { "nav-link-active": isActive })
          }
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx("nav-link", { "nav-link-active": isActive })
          }
          to="/about"
        >
          ABOUT
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx("nav-link", { "nav-link-active": isActive })
          }
          to="/contact"
        >
          CONTACT
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx("nav-link", { "nav-link-active": isActive })
          }
          to="/blog"
        >
          BLOG
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            clsx("nav-link", { "nav-link-active": isActive })
          }
          to="/events"
        >
          EVENTS
        </NavLink>
      </div>

      <div className="footer-made">Made by Dev-Island</div>
    </footer>
  );
};
