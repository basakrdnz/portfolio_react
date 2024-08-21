import React from 'react';
import ProjectCard from '../ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "DESIGN PORTFOLIO",
      techStack: ["HTML", "CSS"],
      imageUrl: "public/images/projects/productlist_img_1.png",
      hoverImageUrl: "public/images/projects/productlist_img_3.png",
      projectUrl: "#",
      codeUrl: "#"
    },
    {
      title: "E-LEARNING LANDING PAGE",
      techStack: ["HTML", "CSS"],
      imageUrl: "public/images/projects/linkedin_nextjs_img_1.png",
      hoverImageUrl: "public/images/projects/linkedin_nextjs_img_3.png",
      projectUrl: "#",
      codeUrl: "#"
    },
    {
      title: "TODO WEB APP",
      techStack: ["HTML", "CSS", "JAVASCRIPT"],
      imageUrl: "/images/portfolio-image-3.png",
      hoverImageUrl: "/images/portfolio-image-3-hover.png",
      projectUrl: "#",
      codeUrl: "#"
    },
    {
      title: "ENTERTAINMENT WEB APP",
      techStack: ["HTML", "CSS", "JAVASCRIPT"],
      imageUrl: "/images/portfolio-image-4.png",
      hoverImageUrl: "/images/portfolio-image-4-hover.png",
      projectUrl: "#",
      codeUrl: "#"
    },

  ];

  return (
    <section className="max-w-md mx-auto">
      <h2 className="text-white text-3xl font-bold mb-8">Projects</h2>
      <div className="flex flex-col gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            hoverImageUrl={project.hoverImageUrl}
            techStack={project.techStack}
            projectUrl={project.projectUrl}
            codeUrl={project.codeUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
