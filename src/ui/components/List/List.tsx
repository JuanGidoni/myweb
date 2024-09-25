import ContentLayer from "../../layers/ContentLayer";
import Header from "../Header/Header";
import Icon from "../Icon/Icon";
import Parragraph from "../Parragraph/Parragraph";

interface ListItems {
  title?: string;
  subtitle?: string;
  className?: string;
  icon?: string;
}

export interface ListProps {
  className?: string;
  items?: ListItems[];
}

const List = ({ items, className }: ListProps) => {
  return (
    <ul className={className}>
      {(items?.length ?? 0) > 0 &&
        items?.map((item, index) => (
          <li key={index} className={item?.className}>
            {item?.icon && (
              <ContentLayer type="div" className="service-icon-box">
                <Icon name={item?.icon} size="3x" />
              </ContentLayer>
            )}
            <ContentLayer type="div" className="service-content-box">
              {item?.title && (
                <Header
                  type="H4"
                  className="h4 service-item-title"
                  title={item?.title}
                />
              )}
              {item?.subtitle && (
                <Parragraph
                  className="service-item-text"
                  text={item?.subtitle}
                />
              )}
            </ContentLayer>
          </li>
        ))}
    </ul>
  );
};

export default List;
