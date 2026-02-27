import { motion } from 'framer-motion';
import { contactCircleLinks } from '../../data/profile';
import { getBrandIcon } from './iconMaps';

const radius = 130;

export default function ContactOrbit() {
  return (
    <motion.div
      className="relative mx-auto h-[320px] w-[320px]"
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.55 }}
      viewport={{ once: true }}
      whileInView={{ opacity: 1, y: 0 }}
    >
      <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/20" />

      {contactCircleLinks.map((link, index) => {
        const Icon = getBrandIcon(link.icon);
        const angle = (Math.PI * 2 * index) / contactCircleLinks.length - Math.PI / 2;
        const left = 160 + radius * Math.cos(angle);
        const top = 160 + radius * Math.sin(angle);

        return (
          <a
            key={link.label}
            aria-label={link.label}
            className="absolute inline-flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-cardGradient text-slate-100 transition hover:border-primary hover:text-primary"
            href={link.href}
            rel="noreferrer"
            style={{ left, top }}
            target="_blank"
          >
            <Icon size={18} />
          </a>
        );
      })}
    </motion.div>
  );
}
