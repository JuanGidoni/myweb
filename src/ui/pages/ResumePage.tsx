// File: src/ui/pages/ResumePage.tsx

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
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Software Engineer</h4>
            <h5 className="h5 timeline-item-title">Capgemini</h5>
            <span>Nov 2021 — Present</span>
            <p className="timeline-text">
              ● Collaborated on migrating a legacy React project to the latest
              technologies.
            </p>
            <p className="timeline-text">
              ● Implemented Redux Toolkit, ESLint configurations, project
              structure, and updated/added key dependencies.
            </p>
            <p className="timeline-text">
              ● Developed new features and components for logistics applications
              using React.
            </p>
            <p className="timeline-text">
              ● Fixed bugs and styled current and new features, writing unit
              tests.
            </p>
            <p className="timeline-text">
              ● Assisted in pre-production and production deployments, syncing
              repositories using GitHub.
            </p>
            <p className="timeline-text">
              ● Contributed to creating web applications for international
              logistics management using React, Redux, GitHub, CI/CD, and Jira.
            </p>
            <p className="timeline-text">
              ● Helped redesign and develop new UI for insurance products,
              creating common component libraries with React and Sass.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">Frontend Engineer</h4>
            <h5 className="h5 timeline-item-title">JBKnowledge</h5>
            <span>Jul 2021 — Nov 2021</span>
            <p className="timeline-text">
              ● Improved an insurance quotation web application for better
              customer agility and effectiveness.
            </p>
            <p className="timeline-text">
              ● Developed a new automated insurance form web application from
              scratch for another department.
            </p>
            <p className="timeline-text">
              ● Used technologies like React, Redux, Custom Hooks, Tailwind CSS,
              unit testing with React Testing Library and Jest.
            </p>
            <p className="timeline-text">
              ● Followed best practices in agile development and clean code.
            </p>
            <p className="timeline-text">
              ● Implemented Azure DevOps and Storybook for project management
              and documentation.
            </p>
          </li>
          <li className="timeline-item">
            <h4 className="h4 timeline-item-title">React Tutor</h4>
            <h5 className="h5 timeline-item-title">Coderhouse</h5>
            <span>Jul 2021 — Nov 2021</span>
            <p className="timeline-text">
              ● Assisted students with their React JS courses.
            </p>
            <p className="timeline-text">
              ● Provided additional sessions to clarify doubts and explain React
              JS concepts.
            </p>
            <p className="timeline-text">
              ● Helped students with their final projects.
            </p>
          </li>
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
            <h4 className="h4 timeline-item-title">Meta Frontend Developer</h4>
            <span>2022 — 2023</span>
            <ul className="timeline-text-class contact-info">
              <li>
                <a
                  className="contact-link"
                  href="https://www.coursera.org/account/accomplishments/specialization/certificate/JH49YNFJRFNH"
                  target="_blank"
                >
                  View Coursera Credential
                </a>
              </li>
            </ul>
          </li>
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
