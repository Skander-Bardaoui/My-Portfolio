import { useState } from 'react';
import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/ContactButton';
import { ContactModal } from '../components/ContactModal';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Technologie', href: '#technologie' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
];

export function HeroSection() {
  const [contactOpen, setContactOpen] = useState(false);
  return (
    <section className="h-screen flex flex-col relative overflow-x-clip">
      <FadeIn as="nav" delay={0} y={-20} className="flex justify-between gap-2 sm:gap-4 px-4 sm:px-6 md:px-10 pt-4 sm:pt-6 md:pt-8">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={link.label === 'Contact' ? (e) => { e.preventDefault(); setContactOpen(true); } : undefined}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-xs sm:text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {link.label}
          </a>
        ))}
      </FadeIn>

      <div className="flex-1 flex flex-col relative overflow-hidden">
        <div className="overflow-hidden w-full mt-6 sm:mt-4 md:-mt-5">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[10vw] sm:text-[11vw] md:text-[12vw] lg:text-[13vw]">
              Hi,&nbsp;i&apos;m&nbsp;Skander
            </h1>
          </FadeIn>
        </div>

        <div className="sm:hidden flex-1 flex items-center justify-center">
          <FadeIn delay={0.6} y={30}>
            <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
              <img src="/avatar.png" alt="Jack portrait" className="w-[200px]" />
            </Magnet>
          </FadeIn>
        </div>

        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 mt-auto">
          <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
              a software engineering student passionate about building innovative solutions
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton onClick={() => setContactOpen(true)} />
          </FadeIn>
        </div>
      </div>
      <ContactModal isOpen={contactOpen} onClose={() => setContactOpen(false)} />

      <div className="hidden sm:block absolute left-1/2 -translate-x-[55%] z-10 bottom-0">
        <FadeIn delay={0.6} y={30}>
          <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
            <img
              src="/avatar.png"
              alt="Jack portrait"
              className="w-[360px] md:w-[440px] lg:w-[520px]"
            />
          </Magnet>
        </FadeIn>
      </div>
    </section>
  );
}
