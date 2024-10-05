import React from "react";
import Icon from "../Icon/Icon";

const AsideNavbar = () => {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    sectionId: string
  ) => {
    event.preventDefault();
    const section = document.querySelector(sectionId);
    if (section) {
      const offsetTop =
        section.getBoundingClientRect().top + window.scrollY - 40;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <nav className="newNavbar">
      <ul className="newNavbar-list">
        <li className="newNavbar-item">
          <a
            href="#about"
            className="navbar-link"
            onClick={(e) => handleClick(e, "#about")}
          >
            <Icon name="home" color="#fff" size="lg" />
          </a>
        </li>
        <li className="newNavbar-item">
          <a
            href="#services"
            className="navbar-link"
            onClick={(e) => handleClick(e, "#services")}
          >
            <Icon name="sitemap" color="#fff" size="lg" />
          </a>
        </li>
        <li className="newNavbar-item">
          <a
            href="#resume"
            className="navbar-link"
            onClick={(e) => handleClick(e, "#resume")}
          >
            <Icon name="briefcase" color="#fff" size="lg" />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default AsideNavbar;
