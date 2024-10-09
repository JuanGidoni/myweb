// Component to map work experiences
//

type Props = {
  items: Array<{
    title: string;
    company: string;
    date: string;
    highlights: string[];
  }>;
};

const WorkBox = ({ items }: Props) => {
  return (
    <>
      {items?.map((item) => (
        <li key={item.title} className="timeline-item">
          <h4 className="h4 timeline-item-title">{item.title}</h4>
          <span>{item.date}</span>
          <ul className="timeline-text-class contact-info">
            <li>
              <span className="contact-link">{item.company}</span>
            </li>
            {item.highlights?.map((highlight) => (
              <li key={highlight}>{highlight}</li>
            ))}
          </ul>
        </li>
      ))}
    </>
  );
};

export default WorkBox;
