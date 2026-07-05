import { FadeIn } from '../components/FadeIn';
import { Magnet } from '../components/Magnet';
import { ContactButton } from '../components/ContactButton';

const navLinks = ['About', 'Price', 'Projects', 'Contact'];

export function HeroSection() {
  return (
    <section className="h-screen flex flex-col relative overflow-x-clip">
      <FadeIn as="nav" delay={0} y={-20} className="flex justify-between px-6 md:px-10 pt-6 md:pt-8">
        {navLinks.map((link) => (
          <a
            key={link}
            href="#"
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200"
          >
            {link}
          </a>
        ))}
      </FadeIn>

      <div className="flex-1 flex flex-col relative overflow-hidden">
        <div className="overflow-hidden w-full mt-6 sm:mt-4 md:-mt-5">
          <FadeIn delay={0.15} y={40}>
            <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]">
              Hi,&nbsp;i&apos;m&nbsp;jack
            </h1>
          </FadeIn>
        </div>

        <div className="flex justify-between items-end pb-7 sm:pb-8 md:pb-10 px-6 md:px-10 mt-auto">
          <FadeIn delay={0.35} y={20} className="max-w-[160px] sm:max-w-[220px] md:max-w-[260px]">
            <p className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug" style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}>
              a 3d creator driven by crafting striking and unforgettable projects
            </p>
          </FadeIn>
          <FadeIn delay={0.5} y={20}>
            <ContactButton />
          </FadeIn>
        </div>
      </div>

      <FadeIn
        delay={0.6}
        y={30}
        className="absolute left-1/2 -translate-x-1/2 z-10 top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0"
      >
        <Magnet padding={150} strength={3} activeTransition="transform 0.3s ease-out" inactiveTransition="transform 0.6s ease-in-out">
          <img
            src="/avatar.png"
            alt="Jack portrait"
            className="w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
          />
        </Magnet>
      </FadeIn>
    </section>
  );
}
