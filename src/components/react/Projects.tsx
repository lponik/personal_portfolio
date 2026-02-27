import { motion } from 'framer-motion';
import { ExternalLink, Wrench } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { projects } from '../../data/projects';

export default function Projects() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [loopDistance, setLoopDistance] = useState(0);
  const carouselProjects = [...projects, ...projects];

  useEffect(() => {
    const updateLoopDistance = () => {
      const track = trackRef.current;
      if (!track) {
        return;
      }

      setLoopDistance(Math.max(track.scrollWidth / 2, 0));
    };

    updateLoopDistance();
    window.addEventListener('resize', updateLoopDistance);
    return () => window.removeEventListener('resize', updateLoopDistance);
  }, []);

  return (
    <section className="section-shell scroll-mt-28 py-20" id="projects">
      <motion.h2
        className="mb-8 text-center text-5xl font-bold text-primary md:text-6xl"
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        My Projects
      </motion.h2>

      <div className="rounded-[2rem] border border-white/10 bg-cardGradient/20 p-3 sm:p-4">
        <div className="relative overflow-hidden rounded-[1.4rem]" ref={viewportRef}>
          <motion.div
            ref={trackRef}
            animate={loopDistance > 0 ? { x: [0, -loopDistance] } : { x: 0 }}
            className="flex w-max gap-6 px-2 py-1"
            transition={
              loopDistance > 0
                ? {
                    duration: Math.max(22, loopDistance / 36),
                    ease: 'linear',
                    repeat: Infinity,
                  }
                : undefined
            }
          >
            {carouselProjects.map((project, index) => (
              <motion.article
                key={`${project.slug}-${index}`}
                className="w-[360px] flex-none overflow-hidden rounded-3xl border border-white/10 bg-cardGradient shadow-soft sm:w-[430px]"
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: Math.min(index, projects.length - 1) * 0.06 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="space-y-5 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-3xl font-bold text-primary">{project.title}</h3>
                    <a
                      aria-label={`Open ${project.title}`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-slate-100 transition hover:border-primary hover:text-primary"
                      href={project.liveUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <p className="text-center text-lg leading-relaxed text-slate-300 md:text-xl">{project.description}</p>

                  {project.isUnderDevelopment && (
                    <p className="flex items-center justify-center gap-2 text-lg font-semibold text-orange-300">
                      <Wrench size={20} /> Under Development
                    </p>
                  )}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
