const Projects = () => {
  const projectData = [
    {
      title: "Samraddh Bharat",
      desc: "A smart India platform using MERN stack",
    },
    {
      title: "Portfolio Website",
      desc: "Personal website built using React",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>Projects</h2>

      <div className="project-container">
        {projectData.map((proj, index) => (
          <div key={index} className="card">
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;