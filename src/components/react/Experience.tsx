import { motion } from 'framer-motion';
import { experience } from '../../data/experience';

const reveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export default function Experience() {
  return (
    <section className="section-shell scroll-mt-28 py-20" id="experience">
      <motion.h2 className="mb-10 text-center text-5xl font-bold text-primary md:text-6xl" {...reveal}>
        Professional Experience
      </motion.h2>

      <div className="mx-auto max-w-4xl divide-y divide-white/10 border-y border-white/10">
        {experience.map((item, index) => (
          <motion.article
            key={`${item.company}-${item.role}`}
            className="py-7"
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            viewport={{ once: true }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
              <h3 className="text-3xl font-semibold text-primary">
                {item.role} · {item.company}
              </h3>
              <p className="text-base uppercase tracking-[0.14em] text-slate-400 md:text-lg">{item.period}</p>
            </div>

            <p className="mt-1 text-lg text-slate-500 md:text-xl">{item.location}</p>

            <ul className="mt-4 space-y-2">
              {item.highlights.map((highlight) => (
                <li key={highlight} className="text-lg leading-relaxed text-slate-300 md:text-xl">
                  {highlight}
                </li>
              ))}
            </ul>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
