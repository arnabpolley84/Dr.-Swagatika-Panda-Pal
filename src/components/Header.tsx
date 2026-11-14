import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, ArrowRight } from 'lucide-react';
import { CLINIC_INFO, NAV_LINKS } from '../data/clinicData';
import { TypeText } from './TypeText';

export const Header: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  return (
    <header
      className="sticky top-0 z-40 bg-[#FBF9F5]/95 backdrop-blur-md border-b border-[#E6DFD3]"
      style={{ paddingTop: 'env(safe-area-inset-top)' }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-14 h-[74px] sm:h-[82px] lg:h-[86px] flex items-center justify-between gap-4 lg:gap-8">
        {/* Zone 1: Brand Lockup */}
        <a
          href="#home"
          className="inline-flex items-center gap-2.5 shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B85C38] rounded-md"
        >
          <span
            className="w-[32px] h-[32px] sm:w-[35px] sm:h-[35px] rounded-[10px] bg-[#1B3B36] text-[#FBF9F5] inline-flex items-center justify-center shrink-0"
            aria-hidden="true"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5v14" />
            </svg>
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-[17px] sm:text-[19px] font-semibold tracking-[-0.02em] text-[#1B3B36] whitespace-nowrap">
              <TypeText text={CLINIC_INFO.brandShort} delay={0} active={true} />
              <span className="text-[#B85C38]">.</span>
            </span>
            <span className="text-[10px] sm:text-[11px] font-medium tracking-[0.04em] text-[#5A6560] mt-0.5 whitespace-nowrap">
              <TypeText text={CLINIC_INFO.brandSub} delay={80} active={true} />
            </span>
          </span>
        </a>

        {/* Zone 2: Single-line Desktop Navigation */}
        <nav
          aria-label="Primary navigation"
          className="hidden lg:flex items-center gap-6 xl:gap-8 text-[13px] font-medium text-[#242B28]"
        >
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.href}
              href={link.href}
              className="whitespace-nowrap shrink-0 py-1.5 text-[#242B28] hover:text-[#B85C38] transition-colors duration-200 border-b border-transparent hover:border-[#B85C38]/60 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#B85C38]"
            >
              <TypeText text={link.label} delay={120 + idx * 45} active={true} />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Appointment CTA + Mobile Menu Toggle */}
        <div className="flex items-center gap-2.5 sm:gap-3 shrink-0">
          <a
            href={CLINIC_INFO.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B85C38] hover:bg-[#984728] text-white font-semibold text-[11px] sm:text-[12.5px] px-3.5 sm:px-5 py-2.5 min-h-[40px] sm:min-h-[44px] whitespace-nowrap shrink-0 transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#984728]"
          >
            <Phone className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />
            <TypeText text="Book an Appointment" delay={320} active={true} />
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="lg:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg text-[#1B3B36] hover:bg-[#F3EFE7] transition-colors shrink-0 focus-visible:outline-2 focus-visible:outline-[#B85C38]"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="lg:hidden bg-[#FBF9F5] border-t border-[#E6DFD3] px-5 py-5 flex flex-col gap-1.5 shadow-lg"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="flex items-center justify-between py-3 px-2 text-[15px] font-medium text-[#242B28] hover:text-[#B85C38] border-b border-[#E6DFD3]/70 last:border-b-0"
            >
              <span>
                <TypeText text={link.label} active={true} delay={20} />
              </span>
              <ArrowRight className="w-4 h-4 text-[#B85C38]" aria-hidden="true" />
            </a>
          ))}
          <div className="pt-3 mt-1">
            <a
              href={CLINIC_INFO.phoneHref}
              onClick={() => setMobileOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#B85C38] hover:bg-[#984728] text-white font-semibold text-[13px] px-5 py-3.5 min-h-[46px]"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              <TypeText text={`Call ${CLINIC_INFO.phoneDisplay}`} active={true} delay={60} />
            </a>
          </div>
        </nav>
      )}
    </header>
  );
};
