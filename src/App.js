
import './main.scss';
import ProjectsList from './components/ProjectsList';
import Contact from './components/Contact/Contact';

const projects = [
  {
    title: 'Project 1',
    description: 'Description of your first project.',
    link: '',
  },
  {
    title: 'Project 2',
    description: 'Description of your second project.',
    link: '',
  },
];

function App() {
  return (
    <div className="portfolio-container">
      <header className="portfolio-header">
        <h1>Slobodan's Portfolio</h1>
        <p>Software Engineer</p>
      </header>
      <section className="portfolio-section about">
        <h2>About Me</h2>
        <p>
          I’m a results-driven Software Engineer with over four years of
          experience building secure, scalable, and user-focused applications.
          Skilled in C#, ASP.NET, .NET, Java, Spring Boot, JavaScript and SQL.
          I work across the full stack in a unified
          engineering role—covering development, testing (QA), deployment, and
          ongoing production support. My expertise spans authorization,
          authentication, observability, and performance optimization in
          production environments. With a strong background in SaaS development,
          API design, and end-to-end system reliability, I thrive on solving
          complex problems and delivering solutions that are both technically
          sound and impactful.
        </p>
      </section>
      <section className="portfolio-section projects">
        <h2>Projects</h2>
        <ProjectsList projects={projects} />
      </section>
      <section className="portfolio-section techstack">
        <h2>Tech Stack</h2>
        <p>C#, .NET, Java, Spring Boot, JavaScript, SQL, Grafana/Prometheus</p>
      </section>
      <section className="portfolio-section contact">
        <h2>Contact</h2>
        <Contact />
      </section>
      <footer className="portfolio-footer">

      </footer>
    </div>
  );
}

export default App;
