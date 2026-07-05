import { FadeIn } from '../components/FadeIn';

const frameworks = [
  {
    name: 'Angular',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
    desc: 'Front-end framework for building dynamic single-page applications with TypeScript.',
  },
  {
    name: 'React',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    desc: 'JavaScript library for building interactive user interfaces and component-based UIs.',
  },
  {
    name: 'NestJS',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg',
    desc: 'Progressive Node.js framework for building efficient and scalable server-side applications.',
  },
  {
    name: 'Spring Boot',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg',
    desc: 'Java-based framework for creating production-grade microservices and web applications.',
  },
  {
    name: 'Laravel',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg',
    desc: 'PHP framework with elegant syntax for crafting modern and robust web applications.',
  },
  {
    name: 'Symfony',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/symfony/symfony-original.svg',
    desc: 'High-performance PHP framework following MVC pattern for scalable enterprise projects.',
  },
  {
    name: 'Figma',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
    desc: 'Cloud-based design tool for collaborative UI/UX design and prototyping.',
  },
  {
    name: 'Metabase',
    logo: 'https://raw.githubusercontent.com/get-icon/geticon/master/icons/metabase.svg',
    desc: 'Open-source business intelligence tool for easy data exploration and visualization.',
  },
  {
    name: 'Power BI',
    logo: 'https://raw.githubusercontent.com/microsoft/PowerBI-Icons/master/SVG/Power-BI.svg',
    desc: 'Business analytics tool for visualizing data and sharing actionable insights across teams.',
  },
  {
    name: 'Databases',
    logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    desc: 'SQL (MySQL, PostgreSQL) and NoSQL (MongoDB) databases for structured and flexible data storage.',
  },
];

export function ServicesSection() {
  return (
    <section className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32">
      <h2
        className="text-[#0C0C0C] font-black uppercase text-center mb-16 sm:mb-20 md:mb-28"
        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
      >
        Technologies
      </h2>

      <div className="max-w-5xl mx-auto flex flex-col">
        {frameworks.map((item, i) => (
          <FadeIn key={item.name} delay={i * 0.08} y={20}>
            <div
              className={`flex items-center gap-4 sm:gap-6 md:gap-8 py-6 sm:py-8 md:py-10 ${
                i < frameworks.length - 1 ? 'border-b border-[rgba(12,12,12,0.15)]' : ''
              }`}
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 shrink-0 object-contain"
              />
              <div className="flex flex-col justify-center">
                <h3
                  className="font-medium uppercase text-[#0C0C0C]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {item.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl opacity-60"
                  style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
