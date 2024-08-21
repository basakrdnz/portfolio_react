import React from 'react';

const ProjectCard = ({ title, techStack, imageUrl, hoverImageUrl, projectUrl, codeUrl }) => {
  return (
    <div className="rounded-lg mb-8 relative overflow-hidden text-left">
<div className="relative m-auto h-64 w-full max-w-md overflow-hidden">
  
  {/* Görsellerin oturması için cover ve overflow hidden */}
  {/* Normal resim */}
  <img
    src={imageUrl}
    alt={title}
    className="rounded-lg h-full w-full object-cover transition-opacity duration-300"
  />
  {/* Hover resim */}
  <img
    src={hoverImageUrl}
    alt={title}
    className="rounded-lg absolute top-0 left-0 h-full w-full object-cover opacity-0 hover:opacity-100 transition-opacity duration-300"
  />
</div>

      <h3 className="text-2xl font-bold mb-2 mt-4">{title}</h3>
      <p className="text-gray-400 mb-2 text-lg ">{techStack.join('  ')}</p>
      <div className="flex gap-4">
        {/* <a
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-green-500 hover:underline"
        >
          VIEW PROJECT
        </a> */}
        <a
          href={codeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xl border-b-2 border-emerald-400 hover:border-emerald-600"
        >
          VIEW CODE
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
