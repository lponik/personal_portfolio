import { footerSocialLinks, profile } from '../../data/profile';
import { getBrandIcon } from './iconMaps';

export default function Footer() {
  return (
    <footer className="mt-20" style={{ background: 'var(--footer)' }}>
      <svg className="w-full" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="footerSvgA" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(247, 131, 255, 0.65)" />
            <stop offset="100%" stopColor="rgba(53, 219, 255, 0.5)" />
          </linearGradient>
          <linearGradient id="footerSvgB" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(53, 219, 255, 0.45)" />
            <stop offset="100%" stopColor="rgba(247, 131, 255, 0.42)" />
          </linearGradient>
        </defs>
        <path
          className="footer-wave-a"
          d="M0,192L80,181.3C160,171,320,149,480,149.3C640,149,800,171,960,170.7C1120,171,1280,149,1360,138.7L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
        />
        <path
          className="footer-wave-b"
          d="M0,256L60,250.7C120,245,240,235,360,224C480,213,600,203,720,192C840,181,960,171,1080,176C1200,181,1320,203,1380,213.3L1440,224L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        />
        <path
          className="footer-wave-c"
          d="M0,288L48,282.7C96,277,192,267,288,250.7C384,235,480,213,576,213.3C672,213,768,235,864,240C960,245,1056,235,1152,218.7C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>

      <div className="section-shell -mt-10 pb-10 text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-white/25 bg-cardGradient text-2xl font-bold text-primary">
          {profile.footerInitial}
        </div>
        <p className="mb-5 text-lg font-semibold text-slate-100">{profile.footerTitle}</p>

        <div className="mx-auto mb-6 grid w-fit grid-cols-3 gap-3 sm:grid-cols-6">
          {footerSocialLinks.map((link) => {
            const Icon = getBrandIcon(link.icon);
            return (
              <a
                key={link.label}
                aria-label={link.label}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-slate-100 transition hover:border-primary hover:text-primary"
                href={link.href}
                rel="noreferrer"
                target="_blank"
              >
                <Icon size={16} />
              </a>
            );
          })}
        </div>

        <p className="text-xs tracking-[0.15em] text-slate-400">{profile.copyright}</p>
      </div>
    </footer>
  );
}
