// File: src/ui/pages/MainPage.tsx

import About from "../components/About";
import Header from "../components/Header/Header";
import ServicesList from "../components/Services/Services";
import ContentLayer from "../layers/ContentLayer";

const MainPage = () => {
    return (
        <ContentLayer type="article" className="about active" data-page="about">
            <Header type="H2" title="About Me" className="h2 article-title" />
            <About />
            <ServicesList listItems={[
                {
                    title: "UI Development",
                    subtitle: "I design and develop user interfaces for web applications using HTML, CSS, and JavaScript. I create responsive and accessible UI components that provide a great user experience.",
                    className: "service-item",
                    icon: "ui"
                }, {
                    title: "React Development",
                    subtitle: "I develop web applications using React, a JavaScript library for building user interfaces. I create reusable UI components and manage the application state using Redux.",
                    className: "service-item",
                    icon: "front"
                },
                {
                    title: "Research",
                    subtitle: "I research and analyze the latest trends in web development to provide the best solutions to the clients. I also help in developing new features and functionalities.",
                    className: "service-item",
                    icon: "research"
                },
                {
                    title: "Arquitecture",
                    subtitle: "I design and develop the architecture of web applications to ensure that the application is scalable, maintainable, and secure. I use the best practices and patterns to build the application.",
                    className: "service-item",
                    icon: "arquitecture"
                }
            ]} />
        </ContentLayer>
    );
};

export default MainPage;