// File: src/ui/pages/ResumePage.tsx

import Header from "../components/Header/Header";
import Icon from "../components/Icon/Icon";

const ResumePage = () => {
    return (
        <article className="about active" data-page="about">
            <Header type="H2" title="Resume" className="h2 article-title" />
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        {/* Error: Icon "graduation-cap" is not registered. */}
                        <Icon name="graduationCap" />
                    </div>
                    <h3 className="h3">Education</h3>
                </div>
                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">IBM DevOps & Software Engineering</h4>
                        <span>2023 — 2024</span>
                        <ul className="timeline-text-class contact-info">
                            <li>In progress</li>
                        </ul>
                    </li>
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Meta Frontend Developer</h4>
                        <span>2022 — 2023</span>
                        <ul className="timeline-text-class contact-info">
                            <li><a className="contact-link" href="https://www.coursera.org/account/accomplishments/specialization/certificate/JH49YNFJRFNH" target="_blank">View Coursera Credential</a></li>
                        </ul>
                    </li>
                    <a className="contact-link" href="https://www.linkedin.com/in/juangidoni/details/education/" target="_blank">
                        <h4 className="h4 timeline-item-title ">View more education information at Linkedin</h4></a>
                </ol>
            </section>
            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <Icon name="briefcase" />
                    </div>
                    <h3 className="h3">Experience</h3>
                </div>
                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h4 className="h4 timeline-item-title">Ssr Frontend Developer</h4>
                        <h5 className="h5 timeline-item-title">Capgemini DCX</h5>
                        <span>Nov 2021 — Present</span>
                        <p className="timeline-text">
                            • Working on applications with React, Redux, and TypeScript, and developing new features for the client's platform.
                        </p>
                    </li>
                </ol>
            </section>
        </article>
    );
};

export default ResumePage;