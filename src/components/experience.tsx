import React from 'react';

interface JobExperience {
  company: string;
  position: string;
  startDate: string;
  endDate: string;
  website: string;
}

const experiences: JobExperience[] = [
  {
    company: 'Roketin',
    position: 'Software Engineer',
    startDate: 'September 2022',
    endDate: 'Present',
    website: 'https://roketin.com'
  },
];

export default function Experience() {
  return (
    <div className="space-y-5">
      <h2 className='text-2xl font-bold'>Work Experience</h2>
      {experiences.map((experience, index) => (
        <a
          href={experience.website}
          target='_blank'
          key={index}
          className="cursor-pointer inline-flex w-full border-2 border-black rounded p-3 shadow-[4px_4px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none"
        >
          <div className='flex flex-col'>
            <h3 className='text-xl font-semibold'>{experience.company}</h3>
            <p>{experience.position}</p>
          </div>
          <p className='ml-auto text-xs sm:text-sm'>
            {experience.startDate} - {experience.endDate}
          </p>
        </a>
      ))}
    </div>
  );
}
