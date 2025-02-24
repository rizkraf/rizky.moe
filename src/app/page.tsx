import Experience from '@/components/experience';
import Projects from '@/components/projects';

export default function Page() {
  return (
    <section className='mb-16'>
      <h1 className="mb-8 text-2xl font-bold tracking-tighter">
        Rizky Rafi Azhara
      </h1>
      <p className="mb-4">
        {`I'm a software engineer who loves making things that hopefully help people. Currently working at Roketin and building Permaloka as main project in my free time.`}
      </p>
      <div className="my-8">
        <Experience />
      </div>
      <div>
        <Projects />
      </div>
    </section>
  );
}
