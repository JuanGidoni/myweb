// src/ui/components/Timeline/TimelineItem.tsx
type Props = {
  title: string;
  date: string;
  link: string;
  status: string;
  progress: number;
};

function TimelineItem({ title, date, link, status, progress }: Props) {
  return (
    <li className="timeline-item">
      <a href={link} target="_blank">
        <h4 className="h4 timeline-item-title">{title}</h4>
      </a>
      <span>{date}</span>
      <ul className="timeline-text-class contact-info">
        <li>
          <span className={`contact-link ${progress === 100 ? "" : "disabled"}`}>
            {status}
          </span>
        </li>
        {progress !== 100 && (
          <li>
            <div className="progress-bar">
              <div className="progress" style={{ width: `${progress}%` }}></div>
            </div>
          </li>
        )}
      </ul>
    </li>
  );
}

export default TimelineItem;