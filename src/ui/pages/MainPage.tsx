// File: src/ui/pages/MainPage.tsx

import Header from "../components/Header/Header";

const MainPage = () => {
    return (
        <article className="about active" data-page="about">
            <Header type="H2" title="About Me" className="h2 article-title" />
            <section className="about-text">
                <p>
                    <b>I want to help others to learn from me and try to learn from others. 😎</b>
                </p>

                <p>
                    I try to be the best version of myself both personally and professionally. I want to learn everything that is within my reach.
                </p>

                <p>
                    I believe that technology is our future and that if we make good use of it we can achieve great things
                </p>
            </section>
            <section className="service">
                <h3 className="h3 service-title">What I'm doing</h3>
                <ul className="service-list">
                    <li className="service-item">
                        <div className="service-icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45">
                                <path d="M19.5 17C19.37 17 19.24 17 19.11 17.04L17.5 13.79C17.95 13.34 18.25 12.71 18.25 12C18.25 10.62 17.13 9.5 15.75 9.5C15.62 9.5 15.5 9.5 15.36 9.54L13.73 6.29C14.21 5.84 14.5 5.21 14.5 4.5C14.5 3.12 13.38 2 12 2S9.5 3.12 9.5 4.5C9.5 5.21 9.79 5.84 10.26 6.29L8.64 9.54C8.5 9.5 8.38 9.5 8.25 9.5C6.87 9.5 5.75 10.62 5.75 12C5.75 12.71 6.05 13.34 6.5 13.79L4.89 17.04C4.76 17 4.63 17 4.5 17C3.12 17 2 18.12 2 19.5C2 20.88 3.12 22 4.5 22S7 20.88 7 19.5C7 18.8 6.71 18.16 6.24 17.71L7.86 14.46C8 14.5 8.12 14.5 8.25 14.5C8.38 14.5 8.5 14.5 8.64 14.46L10.27 17.71C9.8 18.16 9.5 18.8 9.5 19.5C9.5 20.88 10.62 22 12 22S14.5 20.88 14.5 19.5C14.5 18.12 13.38 17 12 17C11.87 17 11.74 17 11.61 17.04L10 13.79C10.46 13.34 10.75 12.71 10.75 12S10.46 10.66 10 10.21L11.61 6.96C11.74 7 11.87 7 12 7S12.26 7 12.39 6.96L14 10.21C13.55 10.66 13.25 11.3 13.25 12C13.25 13.38 14.37 14.5 15.75 14.5C15.88 14.5 16 14.5 16.14 14.46L17.77 17.71C17.3 18.16 17 18.8 17 19.5C17 20.88 18.12 22 19.5 22S22 20.88 22 19.5C22 18.12 20.88 17 19.5 17Z" />
                            </svg>
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">UI Development</h4>
                            <p className="service-item-text">
                                I design and develop user interfaces for web applications using HTML, CSS, and JavaScript. I create responsive and accessible UI components that provide a great user experience.
                            </p>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45">
                                <path d="M6.27 17.05C6.72 17.58 7 18.25 7 19C7 20.66 5.66 22 4 22S1 20.66 1 19 2.34 16 4 16C4.18 16 4.36 16 4.53 16.05L7.6 10.69L5.86 9.7L9.95 8.58L11.07 12.67L9.33 11.68L6.27 17.05M20 16C18.7 16 17.6 16.84 17.18 18H11V16L8 19L11 22V20H17.18C17.6 21.16 18.7 22 20 22C21.66 22 23 20.66 23 19S21.66 16 20 16M12 8C12.18 8 12.36 8 12.53 7.95L15.6 13.31L13.86 14.3L17.95 15.42L19.07 11.33L17.33 12.32L14.27 6.95C14.72 6.42 15 5.75 15 5C15 3.34 13.66 2 12 2S9 3.34 9 5 10.34 8 12 8Z" />
                            </svg>
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">React Development</h4>
                            <p className="service-item-text">
                                I develop web applications using React, a JavaScript library for building user interfaces. I create reusable UI components and manage the application state using Redux.
                            </p>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45">
                                <path d="M9 17H7V10H9V17M13 17H11V7H13V17M17 17H15V13H17V17M19 19H5V5H19V19.1M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3Z" />
                            </svg>
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Research</h4>
                            <p className="service-item-text">
                                I research and analyze the latest trends in web development to provide the best solutions to the clients. I also help in developing new features and functionalities.
                            </p>
                        </div>
                    </li>
                    <li className="service-item">
                        <div className="service-icon-box">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="45">
                                <path d="M22,17H18V10H22M23,8H17A1,1 0 0,0 16,9V19A1,1 0 0,0 17,20H23A1,1 0 0,0 24,19V9A1,1 0 0,0 23,8M4,6H22V4H4A2,2 0 0,0 2,6V17H0V20H14V17H4V6Z" />
                            </svg>
                        </div>
                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Arquitecture</h4>
                            <p className="service-item-text">
                                I design and develop the architecture of web applications to ensure that the application is scalable, maintainable, and secure. I use the best practices and patterns to build the application.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        </article>
    );
};

export default MainPage;