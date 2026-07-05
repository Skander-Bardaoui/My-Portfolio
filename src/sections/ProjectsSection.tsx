import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  num: string;
  name: string;
  category: string;
  col1img1: string;
  col1img2: string;
  col2img: string;
  details: string;
}

const projects: Project[] = [
  {
    num: '01',
    name: 'UrbanLink',
    category: 'Esprit',
    col1img1: '/projet 1/projet1.2.png',
    col1img2: '',
    col2img: '/projet 1/projet1.png',
    details: `urbanlink-symfony.onrender.com  |  Academic Project  |  January 2025 - May 2025

Developed a full-stack Symfony web application for managing urban transport services such as taxi booking, subscription plans, trip management, and vehicle operations. Designed for scalability with Docker containerization and clean backend/frontend separation.

Built with: Symfony 6, PHP 8+, MySQL/PostgreSQL, Twig templates, Tailwind CSS
Features: User authentication, role-based access, CRUD for users/vehicles/routes, trip tracking, customer reviews, subscription management
Testing: PHPUnit
DevOps: Docker + docker-compose, hosted on Render

github.com/AchRef864/UrbanLinkSymfony.git`,
  },
  {
    num: '02',
    name: 'Aura Brand Identity',
    category: 'Personal',
    col1img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
    col1img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
    col2img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    details: '',
  },
  {
    num: '03',
    name: 'Solaris Digital',
    category: 'Client',
    col1img1:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
    col1img2:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
    col2img:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    details: '',
  },
];

function ProjectCard({ project, index, total }: { project: Project; index: number; total: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [showDetails, setShowDetails] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.9', 'start 0.25'],
  });

  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <>
      <div
        ref={ref}
        className="sticky h-[85vh] flex items-center justify-center"
        style={{ top: `${index * 28}px` }}
      >
        <motion.div
          style={{ scale, transformOrigin: 'top center' }}
          className="rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 w-full"
        >
          <div className="flex items-start justify-between mb-4 sm:mb-6 md:mb-8">
            <div className="flex items-start gap-3 sm:gap-4 md:gap-6">
              <span
                className="font-black leading-none text-[#D7E2EA]"
                style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
              >
                {project.num}
              </span>
              <div className="flex flex-col pt-1 sm:pt-2 md:pt-4">
                <span
                  className="font-medium uppercase text-[#D7E2EA]"
                  style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                >
                  {project.name}
                </span>
                <span className="text-[#D7E2EA]/60 uppercase tracking-wider text-xs sm:text-sm">
                  {project.category}
                </span>
              </div>
            </div>
            <button
              onClick={() => setShowDetails(true)}
              className="rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200"
            >
              Details
            </button>
          </div>

          <img
            src={project.col2img}
            alt=""
            loading="lazy"
            className="w-full object-cover rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            style={{ height: 'clamp(320px, 50vh, 580px)' }}
          />
        </motion.div>
      </div>

      {showDetails && (
        <ProjectDetailOverlay project={project} onClose={() => setShowDetails(false)} />
      )}
    </>
  );
}

function ProjectDetailOverlay({ project, onClose }: { project: Project; onClose: () => void }) {
  const images = [
    { src: project.col2img, title: 'Main' },
    ...(project.col1img1 ? [{ src: project.col1img1, title: 'Side 1' }] : []),
    ...(project.col1img2 ? [{ src: project.col1img2, title: 'Side 2' }] : []),
  ];
  const [imgIndex, setImgIndex] = useState(0);

  return (
    <div className="fixed inset-0 z-50 bg-[#0C0C0C] overflow-y-auto">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 py-8">
        <div className="flex justify-between items-start mb-8">
          <div>
            <h2 className="text-[#D7E2EA] font-black uppercase text-3xl sm:text-5xl">
              {project.name}
            </h2>
            <p className="text-[#D7E2EA]/60 uppercase tracking-wider text-sm mt-1">{project.category}</p>
          </div>
          <button
            onClick={onClose}
            className="text-[#D7E2EA] text-3xl hover:opacity-70 transition-opacity leading-none"
          >
            ✕
          </button>
        </div>

        <div className="text-[#D7E2EA] text-sm sm:text-base leading-relaxed whitespace-pre-line mb-10">
          {project.details || 'No details available.'}
        </div>

        <div className="relative pb-10 flex flex-col items-center gap-4">
          <div className="relative w-full max-w-4xl overflow-hidden rounded-[30px]" style={{ aspectRatio: '16/9' }}>
            <AnimatePresence mode="wait">
              <motion.img
                key={imgIndex}
                src={images[imgIndex].src}
                alt={images[imgIndex].title}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full object-contain"
              />
            </AnimatePresence>
          </div>
          {images.length > 1 && (
            <div className="flex items-center gap-4">
              <button
                onClick={() => setImgIndex((i) => (i > 0 ? i - 1 : images.length - 1))}
                className="text-[#D7E2EA] hover:opacity-70 transition-opacity p-2"
              >
                <ChevronLeft className="size-8" />
              </button>
              <div className="flex items-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIndex(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === imgIndex ? 'w-7 bg-[#D7E2EA]' : 'w-2 bg-[#D7E2EA]/30'
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={() => setImgIndex((i) => (i < images.length - 1 ? i + 1 : 0))}
                className="text-[#D7E2EA] hover:opacity-70 transition-opacity p-2"
              >
                <ChevronRight className="size-8" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section className="bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-10 relative px-5 sm:px-8 md:px-10 pb-20 sm:pb-24 md:pb-32">
      <h2
        className="font-black uppercase text-center leading-none tracking-tight pt-20 sm:pt-24 md:pt-32 pb-40 sm:pb-48 md:pb-56 relative z-20 bg-[#0C0C0C]"
        style={{
          fontSize: 'clamp(3rem, 12vw, 160px)',
          background: 'linear-gradient(180deg, #646973 0%, #BBCCD7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Project
      </h2>

      <div className="max-w-6xl mx-auto">
        {projects.map((project, i) => (
          <ProjectCard key={project.num} project={project} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  );
}
