import ContentLayer from "../layers/ContentLayer";
import Parragraph from "./Parragraph/Parragraph";

const About = () => {
  return (
    <ContentLayer type="section" className="about-text">
      <Parragraph
        text="I want to help others to learn from me and try to learn from others. 😎"
        isBold
      />
      <Parragraph text="I try to be the best version of myself both personally and professionally. I want to learn everything that is within my reach." />
      <Parragraph text="I believe that technology is our future and that if we make good use of it we can achieve great things" />
    </ContentLayer>
  );
};

export default About;