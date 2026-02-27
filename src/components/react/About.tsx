import { motion } from 'framer-motion';
import { profile } from '../../data/profile';

const reveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.55, ease: 'easeOut' },
};

export default function About() {
  return (
    <section className="section-shell scroll-mt-28 py-20" id="about">
      <div className="mx-auto max-w-3xl text-center">
        <motion.h2 className="mb-6 text-5xl font-bold text-primary md:text-6xl" {...reveal}>
          About Me
        </motion.h2>
        {profile.aboutParagraphs.map((paragraph, index) => (
          <motion.p
            key={paragraph}
            className="mb-5 text-xl leading-relaxed text-slate-300 md:text-2xl"
            {...reveal}
            transition={{ ...reveal.transition, delay: 0.1 * index }}
          >
            {paragraph}
          </motion.p>
        ))}
      </div>
    </section>
  );
}
