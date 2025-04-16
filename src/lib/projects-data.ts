import QuranWeb from '../../public/quran-web.png';
import Noter from '../../public/noter.png';

export const projects = [
  {
    title: 'Noter',
    description:
      'A web application that allows users to take notes and save them in local storage.',
    image: Noter.src,
    tags: ['React', 'Tailwind CSS', 'Javascript'],
    link: 'https://noter.rizky.moe',
    color: 'bg-blue-300',
  },
  {
    title: 'Quran Web',
    description:
      'A web application that allows users to read and listen to the Quran.',
    image: QuranWeb.src,
    tags: ['Vue.js', 'Tailwind CSS', 'Javascript'],
    link: 'https://quran.rizky.moe',
    color: 'bg-green-300',
  },
];
