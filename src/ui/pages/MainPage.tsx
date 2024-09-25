import About from "../components/About";
import Header from "../components/Header/Header";
import Parragraph from "../components/Parragraph/Parragraph";
import ServicesList from "../components/Services/Services";
import ContentLayer from "../layers/ContentLayer";
import ResumePage from "./ResumePage";

// Example in MainPage.tsx
const MainPage = () => {
  return (
    <ContentLayer type="article" className="about active" data-page="about">
      <Header
        type="H2"
        title="Hello 🚀"
        className="h2 article-title"
        id="about"
      />
      <About />
      <ServicesList
        listItems={[
          {
            title: "Frontend Development",
            subtitle:
              "Building responsive web apps using React, TypeScript, and modern frameworks.",
            className: "service-item",
            icon: "front",
          },
          {
            title: "Agile Methodologies",
            subtitle:
              "Delivering efficient solutions through agile practices and continuous collaboration.",
            className: "service-item",
            icon: "research",
          },
          {
            title: "Legacy System Migration",
            subtitle:
              "Upgrading outdated systems with modern tech for better performance and scalability.",
            className: "service-item",
            icon: "arquitecture",
          },
          {
            title: "UI/UX Improvement",
            subtitle:
              "Enhancing user experiences with intuitive interfaces and clean, reusable components.",
            className: "service-item",
            icon: "ui",
          },
        ]}
      />
      <ResumePage />
      <footer>
        <Parragraph
          className="text-grey text-small"
          isBold
          text={`Copyright © ${new Date().getFullYear()} - Made with ❤️ by Juan Ignacio Gidoni. All rights reserved.`}
        />
      </footer>
    </ContentLayer>
  );
};

export default MainPage;
