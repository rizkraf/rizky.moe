interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  achievements: string[];
  color: string;
}

export function ExperienceCard({
  title,
  company,
  period,
  achievements,
  color,
}: ExperienceCardProps) {
  return (
    <div
      className={`${color} border-4 border-black p-6 shadow-[8px_8px_0px_0px_rgba(0,0,0)]`}
    >
      <div className="flex flex-col md:flex-row justify-between mb-4">
        <div>
          <h3 className="text-2xl font-bold">{title}</h3>
          <p className="text-lg font-medium">{company}</p>
        </div>
        <span className="bg-black text-white px-4 py-1 font-bold mt-2 md:mt-0 w-fit h-fit">
          {period}
        </span>
      </div>
      <div>
        <h4 className="font-bold mb-2">Key Achievements:</h4>
        <ul className="list-disc pl-5 space-y-1">
          {achievements.map((achievement, index) => (
            <li key={index}>{achievement}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
