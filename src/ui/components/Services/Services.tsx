import ContentLayer from "../../layers/ContentLayer";
import List, { ListProps } from "../List/List";

interface ServicesProps {
  listItems: ListProps["items"];
}

const ServicesList = ({ listItems }: ServicesProps) => {
  return (
    <ContentLayer type="section" className="service">
      <List items={listItems} className="service-list" />
    </ContentLayer>
  );
};

export default ServicesList;
