import Logo from '../../assets/logo.jpeg'
import Icon from '../Icon/Icon'
const AsideInfo = () => {
    return (
        <aside className="sidebar" data-sidebar>
            <div className="sidebar-info">
                <figure className="avatar-box">
                    <img src={Logo} alt="Juan Ignacio Gidoni" width="80" />
                </figure>
                <div className="info-content">
                    <h1 className="name" title="Juan Ignacio Gidoni">Juan Ignacio Gidoni</h1>
                    <p className="title">Software Developer</p>
                </div>

                <button id="theme" onClick={
                    () => {
                        const body = document.querySelector('body')
                        body?.classList.toggle('dark-theme')
                    }
                }>🌙</button>

                <button className="info_more-btn" data-sidebar-btn>
                    <span>Show Contacts</span>
                    {/* TODO: Icon and button should expand sidebar-info_more */}
                </button>
            </div>
            <div className="sidebar-info_more">
                <div className="separator"></div>
                <ul className="contacts-list">
                    <li className="contact-item">
                        <div className="icon-box">
                            <Icon name="email" />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">Email</p>
                            <a href="mailto:juan.gidoni@gmail.com" className="contact-link">contact@juani.dev</a>
                        </div>
                    </li>
                    <li className="contact-item">
                        <div className="icon-box">
                            <Icon name="linkedin" />
                        </div>
                        <div className="contact-info">
                            <p className="contact-title">LinkedIn</p>

                            <a href="https://linkedin.com/in/JuanGidoni" target='_BLANK' className="contact-link">@ JuanGidoni</a>
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
                        <a href="https://www.linkedin.com/in/juangidoni/" className='contact-link' target="_blank">
                            <Icon name="linkedin" color='grey' />
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="https://github.com/juangidoni" className='contact-link' target="_blank">
                            <Icon name="github" color='grey' />
                        </a>
                    </li>
                </ul>
            </div>

        </aside >
    )
}

export default AsideInfo