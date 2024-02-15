import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';
import Icon from '../Icon/Icon';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('about');
    const handleActiveLink = (link: string) => {
        setActiveLink(link);
    }
    return (
        <nav className="navbar">
            <ul className='navbar-list'>
                {activeLink === 'resume' ? (
                    <li className='navbar-item'>
                        <Link to="/" className='navbar-link' onClick={() => handleActiveLink('')}>
                            <Icon name='left' title='Return about me' />
                        </Link>
                    </li>
                ) :
                    <li className='navbar-item'>
                        <Link to="/resume" className={activeLink === 'resume' ? 'navbar-link active' : 'navbar-link'} onClick={() => handleActiveLink('resume')}><Icon name='briefcase' title='Resume' /></Link>
                    </li>
                }
            </ul>
        </nav >
    );
};

export default Navbar;