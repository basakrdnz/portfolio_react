import React from 'react';
import ProjectCard from '../ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "REACT PRODUCT LIST",
      techStack: ["HTML", "CSS", "JAVASCRIPT"],
      imageUrl: "/images/projects/productlist_img_1.png",
      hoverImageUrl: "/images/projects/productlist_img_3.png",
      projectUrl: "#",
      codeUrl: "https://github.com/basakrdnz/product_list_react"
    },
    {
      title: "NEXT.JS LINKEDIN PAGE",
      techStack: ["HTML", "CSS"],
      imageUrl: "/images/projects/linkedin_nextjs_img_1.png",
      hoverImageUrl: "/images/projects/linkedin_nextjs_img_3.png",
      projectUrl: "#",
      codeUrl: "https://github.com/basakrdnz/linkedin_profile_page_next"
    },
    {
      title: "NEXT.JS TRAVEL PAGE",
      techStack: ["HTML", "CSS"],
      imageUrl: "/images/projects/nexttravel_img_1.png",
      hoverImageUrl: "/images/projects/nexttravel_img_2.png",
      projectUrl: "#",
      codeUrl: "https://github.com/basakrdnz/Next-Travel-Example-Web-Page"
    },
    {
      title: "NEXT.JS RICK & MORTY API PAGE",
      techStack: ["HTML", "CSS", "JAVASCRIPT" , "API"],
      imageUrl: "/images/projects/rickmorty_img_2.png",
      hoverImageUrl: "/images/projects/rickmorty_img_1.png",
      projectUrl: "https://rick-morty-next-api-page.vercel.app",
      codeUrl: "https://github.com/basakrdnz/RickMorty_Next_Api_Page?tab=readme-ov-file"
    },
    {
      title: "SASS FIGMA HOME PAGE",
      techStack: ["HTML", "CSS"],
      imageUrl: "/images/projects/sasshomepage_img_1.png",
      hoverImageUrl: "/images/projects/sasshomepage_img_2.png",
      projectUrl: "#",
      codeUrl: "https://github.com/basakrdnz/Saas-Website-Home-Page"
    },
    {
      title: "NEXT.JS TICKET FORM PAGE",
      techStack: ["HTML", "CSS", "JAVASCRIPT"],
      imageUrl: "/images/projects/ticketformpage_img_1.png",
      hoverImageUrl: "/images/projects/ticketprompage_img_2.png",
      projectUrl: "#",
      codeUrl: "https://github.com/basakrdnz/Ticket-Form-Page"
    },
  ];

  return (
    <section className="max-w-6xl mx-auto p-4">
      {/* Başlık */}
      <h2 className="text-white text-3xl font-bold mb-8">Projects</h2>

      {/* Proje Kartları */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
