// src/ui/components/Timeline/Timeline.tsx
import TimelineItem from "./TimelineItem";

type Props = {
  items: Array<{ title: string; date: string; link: string; status: string; progress: number }>;
};

function Timeline({ items }: Props) {
  return (
    <ol className="timeline-list">
      {items.map((item) => (
        <TimelineItem
          key={item.title}
          title={item.title}
          date={item.date}
          link={item.link}
          status={item.status}
          progress={item.progress}
        />
      ))}
      <a
        className="contact-link"
        href="https://www.linkedin.com/in/juangidoni/details/certifications/"
        target="_blank"
      >
        <h4 className="h4 timeline-item-title ">
          View more certifications at LinkedIn
        </h4>
      </a>
    </ol>
  );
}

export default Timeline;