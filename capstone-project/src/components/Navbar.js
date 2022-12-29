import { Link, NavLink } from "react-router-dom";
import { Burger } from "./Burger";
import clsx from "clsx";
import { useState } from "react";
import { Dropdown } from "./Dropdown";

export const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <nav className="nav-container">
      <div className="navbar">
        <div className="title-header">
          <Link className="title" to="/">
            Pihanaka`ikena o Kaua`i
          </Link>
        </div>

        <div className="nav-desktop">
          <NavLink
            className={({ isActive }) =>
              clsx("nav-link", { "nav-link-active": isActive })
            }
            to="/"
          >
            HOME
          </NavLink>

          <div className="dropdown">
            <NavLink
              className={({ isActive }) =>
                clsx("nav-link", { "nav-link-active": isActive })
              }
              to="/about"
            >
              ABOUT
            </NavLink>

            <Link
              className="submenu-item"
              to="/kupuna"
              onClick={() => setDropdown(false)}
            >
              KUPUNA
            </Link>

            <Link
              className="submenu-item"
              to="/gallery"
              onClick={() => setDropdown(false)}
            >
              GALLERY
            </Link>
          </div>

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
