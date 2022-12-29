import { Link, NavLink } from "react-router-dom";
import { Burger } from "./Burger";
import clsx from "clsx";

export const Navbar = () => {
  return (
    <nav className="nav-container">
      <div className="navbar">
        <div className="title-header">
          <Link className="title" to="/home">
            Pihanaka`ikena o Kaua`i
          </Link>
        </div>

        <div className="nav-desktop">
          <NavLink
            className={({ isActive }) =>
              clsx("nav-link", { "nav-link-active": isActive })
            }
            to="/home"
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

        <Burger />
      </div>
    </nav>
  );
};
