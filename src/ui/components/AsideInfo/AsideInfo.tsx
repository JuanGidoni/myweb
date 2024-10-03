import Logo from "../../assets/logo.jpeg";
import Icon from "../Icon/Icon";
import Navbar from "../AsideNavbar/AsideNavbar";
import { useEffect, useState } from "react";
const AsideInfo = () => {
  const [theme, setTheme] = useState("light");
  const [icon, setIcon] = useState("moon");

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
      setIcon(localTheme === "light" ? "moon" : "sun");
    }
    document.body.classList.toggle("dark-theme", theme === "dark");
  }, [theme]);
  return (
    <aside className="sidebar active">
      <Navbar />
      <div className="sidebar-info">
        <div
          className="icon-box"
          style={{
            position: "absolute",
            top: "0",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "25px",
            height: "25px",
            cursor: "pointer",
            zIndex: 1,
          }}
          onClick={
            theme === "light"
              ? () => {
                  setTheme("dark");
                  setIcon("sun");
                  window.localStorage.setItem("theme", "dark");
                }
              : () => {
                  setTheme("light");
                  setIcon("moon");
                  window.localStorage.setItem("theme", "light");
                }
          }
        >
          <Icon name={icon} />
        </div>
        <figure className="avatar-box">
          <img src={Logo} alt="Juan Ignacio Gidoni" width="80" />
        </figure>
        <div className="info-content">
          <h1 className="name" title="Juan Ignacio Gidoni">
            Juan Ignacio Gidoni
          </h1>
          <p className="title">Software Engineer</p>
        </div>
      </div>
      <div className="sidebar-info_more">
        <div className="separator"></div>
        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <Icon name="linkedin" />
            </div>
            <div className="contact-info">
              <p className="contact-title">LinkedIn</p>

              <a
                href="https://linkedin.com/in/JuanGidoni"
                target="_BLANK"
                className="contact-link"
              >
                JuanGidoni
              </a>
            </div>
          </li>
          <li className="contact-item">
            <div className="icon-box">
              <Icon name="location" />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Barcelona, Spain</address>
            </div>
          </li>
        </ul>
        <div className="separator"></div>
        <ul className="social-list">
          <li className="social-item">
            <a
              href="https://www.linkedin.com/in/juangidoni/"
              className="contact-link"
              target="_blank"
            >
              <Icon name="linkedin" color="grey" />
            </a>
          </li>
          <li className="social-item">
            <a
              href="https://github.com/juangidoni"
              className="contact-link"
              target="_blank"
            >
              <Icon name="github" color="grey" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default AsideInfo;
