// File: src/ui/context/IconContext.tsx

import React from "react";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faHome,
  faGraduationCap,
  faBriefcase,
  faEnvelope,
  faMapLocationDot,
  faBars,
  faArrowLeftLong,
  faArrowRightLong,
  faChartBar,
  faSitemap,
  faMoon,
  faSun,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faUikit,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

// Add more icons as needed
const icons: Record<string, IconDefinition> = {
  home: faHome,
  graduationCap: faGraduationCap,
  briefcase: faBriefcase,
  email: faEnvelope,
  github: faGithub,
  linkedin: faLinkedin,
  location: faMapLocationDot,
  menu: faBars,
  right: faArrowRightLong,
  left: faArrowLeftLong,
  ui: faUikit,
  front: faReact,
  research: faChartBar,
  arquitecture: faSitemap,
  sitemap: faSitemap,
  moon: faMoon,
  sun: faSun,
  ["arrow-up"]: faArrowUp,
};

export const IconContext = React.createContext(icons);
