// File: src/ui/context/IconContext.tsx

import React from 'react';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHome, faGraduationCap, faBriefcase, faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

// Add more icons as needed
const icons: Record<string, IconDefinition> = {
    home: faHome,
    graduationCap: faGraduationCap,
    briefcase: faBriefcase,
    email: faEnvelope,
    github: faGithub,
    linkedin: faLinkedin,
    location: faMapLocationDot,
};

export const IconContext = React.createContext(icons);