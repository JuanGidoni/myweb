import ContentLayer from "../../layers/ContentLayer";
import Header from "../Header/Header";
import List, { ListProps } from "../List/List";

interface ServicesProps {
  listItems: ListProps["items"];
}

const ServicesList = ({ listItems }: ServicesProps) => {
  return (
    <ContentLayer type="section" className="service">
      <Header type="H3" className="h3 service-title" title="What I'm doing" />
      <List items={listItems} className="service-list" />
    </ContentLayer>
  );
};

export default ServicesList;
