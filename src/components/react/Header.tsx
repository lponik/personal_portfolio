import { AnimatePresence, motion } from 'framer-motion';
import { Download, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import { navLinks, profile } from '../../data/profile';

export default function Header() {
  const [activeSection, setActiveSection] = useState('about');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sectionIds = navLinks.map((item) => item.id);

    const handleScroll = () => {
      const fromTop = window.scrollY + 140;
      let nextSection = sectionIds[0];

      for (const id of sectionIds) {
        const element = document.getElementById(id);
        if (element && element.offsetTop <= fromTop) {
          nextSection = id;
        }
      }

      setActiveSection(nextSection);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      return;
    }

    const closeOnResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('resize', closeOnResize);
    return () => window.removeEventListener('resize', closeOnResize);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-headerGradient/75 backdrop-blur-xl">
      <div className="section-shell flex h-28 items-center justify-between gap-5">
        <a
          aria-label="Back to top"
          className="inline-flex h-14 min-w-14 items-center justify-center rounded-full border border-primary bg-cardGradient px-4 text-base font-semibold tracking-[0.16em] text-primary shadow-soft"
          href="#top"
        >
          LP
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;

            return (
              <a
                key={link.id}
                className={`border-b px-1 py-2 text-base uppercase tracking-[0.2em] transition ${
                  isActive
                    ? 'border-accent text-accent'
                    : 'border-transparent text-primary hover:border-primary hover:text-primary'
                }`}
                href={`#${link.id}`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          <a
            className="hidden items-center gap-2 rounded-full bg-LinkBtnGradient px-6 py-3.5 text-lg font-semibold text-white shadow-neon transition hover:opacity-90 md:inline-flex"
            href={profile.resumePath}
            download
          >
            <Download size={20} /> Resume
          </a>
          <button
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="inline-flex rounded-full border border-primary p-3.5 text-primary transition hover:border-primary md:hidden"
            onClick={() => setMenuOpen((state) => !state)}
            type="button"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            animate={{ opacity: 1, height: 'auto' }}
            className="section-shell overflow-hidden border-t border-white/10 py-3 md:hidden"
            exit={{ opacity: 0, height: 0 }}
            initial={{ opacity: 0, height: 0 }}
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  className="rounded-xl px-4 py-3 text-base uppercase tracking-[0.22em] text-primary transition hover:bg-white/10 hover:text-accent"
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-LinkBtnGradient px-6 py-3.5 text-lg font-semibold text-white"
                href={profile.resumePath}
                download
              >
                <Download size={20} /> Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
