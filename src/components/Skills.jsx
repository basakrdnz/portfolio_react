import React, { useState } from "react";

const SkillCard = ({ skillName, percentage }) => {
  return (
    <div className="skill mb-6">
      <h3 className="text-white font-bold text-xl mb-2">{skillName}</h3>
      <div className="w-full bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-emerald-400 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
};

const Skills = () => {
  const [showMore, setShowMore] = useState(false);

  const skills = [
    { skillName: "HTML", percentage: 100 },
    { skillName: "CSS", percentage: 90 },
    { skillName: "JavaScript", percentage: 75 },
    { skillName: "React", percentage: 75 },
    { skillName: "Sass", percentage: 70 },
    { skillName: "Tailwind", percentage: 90 },
    { skillName: "Next.js", percentage: 70 },
    { skillName: "ASP.Net MVC", percentage: 60 },
    { skillName: "RestFull API", percentage: 70 },
  ];

  return (
    <section className="max-w-md mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-12">
        {skills.slice(0, 3).map((skill, index) => (
          <SkillCard
            key={index}
            skillName={skill.skillName}
            percentage={skill.percentage}
          />
        ))}
        {showMore &&
          skills.slice(4).map((skill, index) => (
            <SkillCard
              key={index + 4}
              skillName={skill.skillName}
              percentage={skill.percentage}
            />
          ))}
      </div>
      <div className="text-center mt-6">
        <button
          onClick={() => setShowMore(!showMore)}
          className="bg-emerald-500 text-white font-bold px-4 py-2 rounded-full hover:bg-gray-500 transition duration-300"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </section>
  );
};

export default Skills;
