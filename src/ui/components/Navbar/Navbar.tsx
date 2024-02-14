import { Link } from 'react-router-dom';
import './Navbar.css';
import { useState } from 'react';

const Navbar = () => {
    const [activeLink, setActiveLink] = useState('about');
    const handleActiveLink = (link: string) => {
        setActiveLink(link);
    }
    return (
        <nav className="navbar">
            <ul className='navbar-list'>
                <li className='navbar-item'>
                    <Link to="/" className={activeLink === 'about' ? 'navbar-link active' : 'navbar-link'} onClick={() => handleActiveLink('about')}>About</Link>
                </li>
                <li className='navbar-item'>
                    <Link to="/resume" className={activeLink === 'resume' ? 'navbar-link active' : 'navbar-link'} onClick={() => handleActiveLink('resume')}>Resume</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;