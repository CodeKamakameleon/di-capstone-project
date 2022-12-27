import clsx from "clsx";
import { useState } from "react";
import { NavLink } from "react-router-dom";

export const Hamburger = () => {
  const [isOpen, setOpen] = useState(false);
  return (
    <div className="hamburger">
      <Hamburger toggled={isOpen} toggle={setOpen} />

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
    </div>
  );
};
