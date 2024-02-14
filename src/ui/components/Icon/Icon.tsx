// File: src/ui/components/Icon.tsx

import React, { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconContext } from '../../context/IconContext';

interface IconProps {
    name: string;
    color?: string;
}

const Icon: React.FC<IconProps> = ({ name, color }) => {
    const icons = useContext(IconContext);
    const icon = icons[name];

    if (!icon) {
        throw new Error(`Icon "${name}" is not registered.`);
    }

    return <FontAwesomeIcon icon={icon} color={color} />;
};

export default Icon;