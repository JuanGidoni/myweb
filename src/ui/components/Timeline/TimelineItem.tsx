type Props = {
  title: string;
  date: string;
  link: string;
  status: string;
};

function TimelineItem({ title, date, link, status }: Props) {
  return (
    <li className="timeline-item">
      <a href={link} target="_blank">
        <h4 className="h4 timeline-item-title">{title}</h4>
      </a>
      <span>{date}</span>
      <ul className="timeline-text-class contact-info">
        <li>
          <span className="contact-link disabled">{status}</span>
        </li>
      </ul>
    </li>
  );
}

export default TimelineItem;
