// File: src/ui/pages/ResumePage.tsx

import WorkBox from "../components/Experiences/WorkBox";
import Header from "../components/Header/Header";
import Icon from "../components/Icon/Icon";
import Timeline from "../components/Timeline/Timeline";

const ResumePage = () => {
  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  return (
    <>
      <Header
        type="H2"
        title="Resume"
        className="h2 article-title"
        id="resume"
      />
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <Icon name="briefcase" />
          </div>
          <h3 className="h3">Experience</h3>
        </div>
        <ol className="timeline-list">
          <WorkBox
            items={[
              {
                title: "Software Engineer",
                company: "Capgemini",
                date: "Nov 2021 — Present",
                highlights: [
                  "Collaborated on migrating a legacy React project to the latest technologies.",
                  "Implemented Redux Toolkit, ESLint configurations, project structure, and updated/added key dependencies.",
                  "Developed new features and components for logistics applications using React.",
                  "Fixed bugs and styled current and new features, writing unit tests.",
                  "Assisted in pre-production and production deployments, syncing repositories using GitHub.",
                  "Contributed to creating web applications for international logistics management using React, Redux, GitHub, CI/CD, and Jira.",
                  "Helped redesign and develop new UI for insurance products, creating common component libraries with React and Sass.",
                ],
              },
              {
                title: "Frontend Engineer",
                company: "JBKnowledge",
                date: "Jul 2021 — Nov 2021",
                highlights: [
                  "Improved an insurance quotation web application for better customer agility and effectiveness.",
                  "Developed a new automated insurance form web application from scratch for another department.",
                  "Used technologies like React, Redux, Custom Hooks, Tailwind CSS, unit testing with React Testing Library and Jest.",
                  "Followed best practices in agile development and clean code.",
                  "Implemented Azure DevOps and Storybook for project management and documentation.",
                ],
              },
              {
                title: "React Tutor",
                company: "Coderhouse",
                date: "Jul 2021 — Nov 2021",
                highlights: [
                  "Assisted students with their React JS courses.",
                  "Provided additional sessions to clarify doubts and explain React JS concepts.",
                  "Helped students with their final projects.",
                ],
              },
            ]}
          />
        </ol>
      </section>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <Icon name="graduationCap" />
          </div>
          <h3 className="h3">Education</h3>
        </div>
        <ol className="timeline-list">
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Higher Technician Frontend Development
            </h4>
            <span>2020 - 2022</span>
            <ul className="timeline-text-class contact-info">
              <li>
                <a
                  className="contact-link"
                  href="https://www.linkedin.com/in/juangidoni/details/education/"
                  target="_blank"
                >
                  Da Vinci School
                </a>
              </li>
            </ul>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">
              Higher Technician in Multimedia Design
            </h4>
            <span>2016 - 2019</span>
            <ul className="timeline-text-class contact-info">
              <li>
                <a
                  className="contact-link"
                  href="https://www.linkedin.com/in/juangidoni/details/education/"
                  target="_blank"
                >
                  Da Vinci School
                </a>
              </li>
            </ul>
          </li>
          <a
            className="contact-link"
            href="https://www.linkedin.com/in/juangidoni/details/education/"
            target="_blank"
          >
            <h4 className="h4 timeline-item-title ">
              View more education information at LinkedIn
            </h4>
          </a>
        </ol>
      </section>
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <Icon name="graduationCap" />
          </div>
          <h3 className="h3">Certifications</h3>
        </div>

        <Timeline
          items={[
            {
              title: "SI Associate Certification Program",
              date: formatDate("2024-10-01"),
              link: "https://learn.mongodb.com/c/E574IcgxSZeYfd-vsQMLfg",
              status: "Completed",
              progress: 100,
            },
            {
              title: "Meta Frontend Developer",
              date: formatDate("2023-11-01"),
              link: "https://www.linkedin.com/in/juangidoni/details/certifications/",
              status: "Completed",
              progress: 100,
            },
            {
              title: "GitLab CI/CD: Pipelines, CI/CD and DevOps for Beginners",
              date: formatDate("2024-10-01"),
              link: "https://www.linkedin.com/in/juangidoni/details/certifications/",
              status: "In progress",
              progress: 75,
            },
            {
              title: "MERN Full Stack: MongoDB, Express, React y Node",
              date: formatDate("2024-11-01"),
              link: "https://www.linkedin.com/in/juangidoni/details/certifications/",
              status: "In progress",
              progress: 25,
            },
            {
              title:
                "NestJS Zero to Hero - Modern TypeScript Back-end Development",
              date: formatDate("2024-12-01"),
              link: "https://www.linkedin.com/in/juangidoni/details/certifications/",
              status: "In progress",
              progress: 10,
            },
            {
              title: "NestJS: The Complete Developer's Guide",
              date: formatDate("2024-12-01"),
              link: "https://www.linkedin.com/in/juangidoni/details/certifications/",
              status: "In progress",
              progress: 10,
            },
            {
              title: "Python for Data Science and Machine Learning Bootcamp",
              date: formatDate("2025-02-01"),
              link: "https://www.linkedin.com/in/juangidoni/details/certifications/",
              status: "In progress",
              progress: 5,
            },
            {
              title: "React - The Complete Guide 2024 (incl. Next.js, Redux)",
              date: formatDate("2024-11-01"),
              link: "https://www.linkedin.com/in/juangidoni/details/certifications/",
              status: "In progress",
              progress: 70,
            },
            {
              title: "SQL and PostgreSQL: The Complete Developer's Guide",
              date: formatDate("2025-01-01"),
              link: "https://www.linkedin.com/in/juangidoni/details/certifications/",
              status: "In progress",
              progress: 8,
            },
            {
              title: "The Complete SQL Bootcamp: Go from Zero to Hero",
              date: formatDate("2025-01-01"),
              link: "https://www.linkedin.com/in/juangidoni/details/certifications/",
              status: "In progress",
              progress: 5,
            },
            // sort by progress
          ].sort((a, b) => b.progress - a.progress)}
        />
      </section>
    </>
  );
};

export default ResumePage;
