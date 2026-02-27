import { motion } from 'framer-motion';
import { skillGroups } from '../../data/skills';

const reveal = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, ease: 'easeOut' },
};

export default function Skills() {
  return (
    <section className="section-shell scroll-mt-28 py-20" id="skills">
      <motion.h2 className="mb-10 text-center text-5xl font-bold text-primary md:text-6xl" {...reveal}>
        Technical Skills
      </motion.h2>

      <div className="mx-auto max-w-4xl divide-y divide-white/10 border-y border-white/10">
        {skillGroups.map((group, groupIndex) => (
          <motion.div
            key={group.title}
            className="py-6"
            {...reveal}
            transition={{ ...reveal.transition, delay: groupIndex * 0.05 }}
          >
            <h3 className="mb-3 text-3xl font-semibold text-primary">{group.title}</h3>
            <ul className="flex flex-wrap gap-x-5 gap-y-2">
              {group.items.map((skill) => (
                <li key={skill.name} className="text-xl text-slate-300 md:text-2xl">
                  {skill.name}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
