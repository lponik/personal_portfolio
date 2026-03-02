import { motion } from 'framer-motion';
import { ExternalLink, Wrench } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { getProjectTechIconData } from './iconMaps';
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
            className="flex w-max gap-6 px-3 py-3"
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
                className="group relative aspect-square w-[320px] flex-none overflow-hidden rounded-3xl border border-white/10 bg-cardGradient shadow-soft transition-[border-color,box-shadow] duration-500 will-change-transform hover:border-primary/50 hover:shadow-[0_22px_56px_rgba(67,156,239,0.3)] sm:w-[390px]"
                initial={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.5, delay: Math.min(index, projects.length - 1) * 0.06 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.04, y: -6 }}
                whileTap={{ scale: 1.02 }}
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(143,199,252,0.24),rgba(67,156,239,0.08)_40%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="relative flex h-full flex-col gap-5 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="text-2xl font-bold text-primary sm:text-3xl">{project.title}</h3>
                    <a
                      aria-label={`Open ${project.title}`}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-slate-100 transition duration-300 hover:border-primary hover:bg-white/10 hover:text-primary"
                      href={project.liveUrl}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>

                  <div className="flex flex-1 flex-col items-center justify-center gap-5">
                    <ul className="flex flex-wrap items-center justify-center gap-3">
                      {project.techIcons.map((tech, techIndex) => {
                        const techIconData = getProjectTechIconData(tech);
                        const techLabel = techIconData?.label ?? tech.toUpperCase();
                        return (
                          <li
                            key={`${project.slug}-${tech}-${techIndex}`}
                            className="relative"
                          >
                            <span className="peer inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-100 transition duration-300 group-hover:border-primary/40 group-hover:bg-white/10 group-hover:text-primary">
                              {techIconData ? (
                                <i
                                  aria-hidden="true"
                                  className={`${techIconData.className} colored text-[1.15rem] leading-none`}
                                />
                              ) : (
                                <span className="text-[0.68rem] font-semibold uppercase tracking-[0.08em]">
                                  {tech.slice(0, 2)}
                                </span>
                              )}
                              <span className="sr-only">{techLabel}</span>
                            </span>
                            <span
                              aria-hidden="true"
                              className="pointer-events-none absolute left-1/2 top-full z-20 mt-2 -translate-x-1/2 translate-y-1 whitespace-nowrap rounded-md border border-white/20 bg-slate-950/95 px-2 py-1 text-[0.65rem] font-semibold tracking-[0.04em] text-slate-100 opacity-0 shadow-lg transition-all duration-200 peer-hover:translate-y-0 peer-hover:opacity-100"
                            >
                              {techLabel}
                            </span>
                          </li>
                        );
                      })}
                    </ul>

                    <p className="text-center text-base leading-relaxed text-slate-300 md:text-lg">{project.description}</p>
                  </div>

                  {project.isUnderDevelopment && (
                    <p className="flex items-center justify-center gap-2 text-base font-semibold text-orange-300 md:text-lg">
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
