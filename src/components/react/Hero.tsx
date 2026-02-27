import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { heroSocialLinks, profile } from '../../data/profile';
import { getBrandIcon } from './iconMaps';

const revealUp = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: 'easeOut' },
};

export default function Hero() {
  useEffect(() => {
    let disposed = false;
    let cleanup: Array<() => void> = [];

    void import('gsap').then(({ gsap }) => {
      if (disposed) {
        return;
      }

      const trails = [
        { selector: '.Trail1', duration: 8 },
        { selector: '.Trail2', duration: 12 },
        { selector: '.Trail3', duration: 16 },
        { selector: '.Trail4', duration: 20 },
      ].map(({ selector, duration }, index) =>
        gsap.to(selector, {
          rotation: index % 2 === 0 ? 360 : -360,
          duration,
          ease: 'none',
          transformOrigin: '50% 50%',
          repeat: -1,
        }),
      );

      cleanup = trails.map((trail) => () => trail.kill());
    });

    return () => {
      disposed = true;
      cleanup.forEach((run) => run());
    };
  }, []);

  return (
    <section className="section-shell grid min-h-[calc(100vh-7rem)] items-center gap-12 py-12 lg:grid-cols-[1.1fr_0.9fr]" id="top">
      <div className="space-y-6">
        <motion.p className="text-base uppercase tracking-[0.25em] text-accent md:text-lg" {...revealUp}>
          {profile.greeting}
        </motion.p>
        <motion.h1
          className="bg-LinkBtnGradient bg-clip-text text-7xl font-extrabold leading-none text-transparent md:text-8xl lg:text-9xl"
          {...revealUp}
          transition={{ ...revealUp.transition, delay: 0.1 }}
        >
          {profile.heroDisplayName}
        </motion.h1>
        <motion.p
          className="max-w-xl text-3xl font-bold text-white md:text-4xl"
          {...revealUp}
          transition={{ ...revealUp.transition, delay: 0.2 }}
        >
          {profile.titleLine}
        </motion.p>
        <motion.p
          className="max-w-xl text-xl text-slate-300 md:text-2xl"
          {...revealUp}
          transition={{ ...revealUp.transition, delay: 0.3 }}
        >
          {profile.subtitleLine}
        </motion.p>

        <motion.div
          className="flex flex-wrap items-center gap-4 pt-2"
          {...revealUp}
          transition={{ ...revealUp.transition, delay: 0.35 }}
        >
          {heroSocialLinks.map((link) => {
            const Icon = getBrandIcon(link.icon);
            return (
              <a
                key={link.label}
                aria-label={link.label}
                className="inline-flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-white/5 text-slate-100 transition hover:-translate-y-0.5 hover:border-primary hover:text-primary"
                href={link.href}
                rel="noreferrer"
                target="_blank"
              >
                <Icon size={24} />
              </a>
            );
          })}
        </motion.div>
      </div>

      <motion.div className="relative mx-auto h-[320px] w-[320px] md:h-[420px] md:w-[420px]" {...revealUp}>
        <div className="absolute inset-0 m-auto h-48 w-48 overflow-hidden rounded-full border border-white/20 bg-cardGradient p-2 shadow-soft md:h-60 md:w-60">
          <img alt="Profile avatar" className="h-full w-full rounded-full object-cover" src={profile.avatarPath} />
        </div>

        <span className="Trail1 absolute left-1/2 top-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10">
          <span className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full bg-primary shadow-neon" />
        </span>
        <span className="Trail2 absolute left-1/2 top-1/2 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent">
          <span className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 rounded-full bg-accent shadow-[0_0_20px_rgba(53,219,255,0.7)]" />
        </span>
        <span className="Trail3 absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-primary">
          <span className="absolute bottom-0 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-primary" />
        </span>
        <span className="Trail4 absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10">
          <span className="absolute left-0 top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-accent" />
        </span>
      </motion.div>
    </section>
  );
}
