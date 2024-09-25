import ContentLayer from "../layers/ContentLayer";
import Parragraph from "./Parragraph/Parragraph";

const About = () => {
  return (
    <ContentLayer type="section" className="about-text">
      <Parragraph
        text="I'm a Software Engineer with over 3 years of experience, specializing in React and TypeScript, with a strong foundation in developing scalable, modern applications."
        isBold
      />
      <Parragraph text="While my core expertise is in frontend development, I’m increasingly drawn to the world of AI, blockchain, and other emerging technologies that are shaping the future." />
      <Parragraph text="I'm actively learning and exploring how these innovations can be integrated into the projects I work on, and I'm excited to expand my skill set in these areas. I believe in continuous growth, staying curious, and leveraging cutting-edge tech to build solutions that drive progress." />
    </ContentLayer>
  );
};

export default About;
