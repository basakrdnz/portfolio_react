import React, { useState } from "react";

// SkillCard bileşeni her bir yetenek için kullanılacak, 
// bu kart hem yetenek adını hem de ilerleme barını gösterecek
const SkillCard = ({ skillName, percentage }) => {
  return (
    <div className="skill mb-6 md:max-w-4xl">
      {/* Yetenek adı burada gösterilecek */}
      <h3 className="font-bold text-xl md:text-4xl mb-2">{skillName}</h3>

      {/* İlerleme barı */}
      <div className="w-full bg-gray-700 rounded-full h-3">
        <div
          className="bg-emerald-400 h-2.5 rounded-full"
          style={{ width: `${percentage}%` }} // yetenek yüzdesine göre bar genişliği ayarlanıyor
        ></div>
      </div>
    </div>
  );
};

// skills bileşeni yeteneklerin listesini ve "Show More" butonunu içerecek
const Skills = () => {
  const [showMore, setShowMore] = useState(false); // daha fazla göster/küçült durumu için state kullanıyoruz

  // Yeteneklerin listesi
  const skills = [
    { skillName: "HTML", percentage: 100 },
    { skillName: "CSS", percentage: 90 },
    { skillName: "JavaScript", percentage: 75 },
    { skillName: "React", percentage: 75 },
    { skillName: "Sass", percentage: 70 },
    { skillName: "Tailwind", percentage: 90 },
    { skillName: "Next.js", percentage: 70 },
    { skillName: "ASP.Net MVC", percentage: 60 },
    { skillName: "RestFull API", percentage: 50 },
  ];

  return (
    <section className="max-w-md md:max-w-2xl mx-auto md:text-xl">
      {/* Yetenek kartları gridi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-12">
        {/* İlk üç yeteneği göster */}
        {skills.slice(0, 4).map((skill, index) => (
          <SkillCard
            key={index}
            skillName={skill.skillName}
            percentage={skill.percentage}
          />
        ))}

        {/* Eğer showMore true ise, geri kalan yetenekleri göster */}
        {showMore &&
          skills.slice(4).map((skill, index) => (
            <SkillCard
              key={index + 4} // index'e 4 ekleyerek her yeteneğin key'ini benzersiz yapıyoruz
              skillName={skill.skillName}
              percentage={skill.percentage}
            />
          ))}
      </div>

      {/* "Show More/Show Less" butonu */}
      <div className="text-center mt-6">
        <button
          onClick={() => setShowMore(!showMore)} // Butona tıklandığında, showMore tersine çevriliyor
          className="bg-emerald-500 font-bold px-4 py-2 rounded-full hover:bg-gray-500 transition duration-300"
        >
          {showMore ? "Show Less" : "Show More"} {/* Eğer showMore true ise "Show Less" yazıyor */}
        </button>
      </div>
    </section>
  );
};

export default Skills;
