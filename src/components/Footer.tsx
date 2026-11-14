import React from 'react';
import { Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { RevealSection } from './RevealSection';
import { TypeText } from './TypeText';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  return (
    <RevealSection as="footer" id="contact" className="bg-[#FBF9F5] border-t border-[#E6DFD3]">
      <div className="max-w-[1312px] mx-auto px-5 sm:px-10 lg:px-14 pt-14 sm:pt-16 pb-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          {/* Column 1: Brand & Bilingual Doctor Spotlight */}
          <div>
            <a href="#home" className="inline-flex items-center gap-2.5">
              <span
                className="w-[32px] h-[32px] rounded-[9px] bg-[#1B3B36] text-[#FBF9F5] inline-flex items-center justify-center shrink-0"
                aria-hidden="true"
              >
                <svg
                  width="19"
                  height="19"
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
                <span className="font-display text-[18px] font-semibold tracking-[-0.02em] text-[#1B3B36]">
                  <TypeText text={CLINIC_INFO.brandShort} delay={20} />
                  <span className="text-[#B85C38]">.</span>
                </span>
                <span className="text-[11px] font-medium text-[#5A6560] mt-0.5">
                  <TypeText text={CLINIC_INFO.brandSub} delay={60} />
                </span>
              </span>
            </a>

            <p className="font-display text-[15px] font-semibold text-[#1B3B36] mt-5">
              <TypeText text={CLINIC_INFO.doctorName} delay={110} />
            </p>
            <p className="font-bengali text-[14px] font-medium text-[#B85C38] mt-0.5">
              <TypeText text={CLINIC_INFO.doctorNameBengali} delay={150} />
            </p>
            <p className="text-[12px] text-[#5A6560] mt-1">
              <TypeText text={CLINIC_INFO.speciality} delay={190} />
            </p>

            <a
              href={CLINIC_INFO.phoneHref}
              className="inline-flex items-center gap-2 border-b border-[#D4C8B8] pb-2 text-[12.5px] font-semibold text-[#B85C38] hover:text-[#1B3B36] mt-5 transition-colors tabular-nums"
            >
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              <TypeText text={CLINIC_INFO.phoneDisplay} delay={230} />
              <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <span className="block text-[9px] font-semibold tracking-[0.2em] uppercase text-[#7B7267] mb-5">
              <TypeText text="NAVIGATION" delay={60} />
            </span>
            <ul className="space-y-3 text-[12.5px] text-[#5A6560]">
              <li>
                <a href="#home" className="hover:text-[#B85C38] transition-colors">
                  <TypeText text="Home" delay={100} />
                </a>
              </li>
              <li>
                <a href="#about-doctor" className="hover:text-[#B85C38] transition-colors">
                  <TypeText text="About Doctor" delay={140} />
                </a>
              </li>
              <li>
                <a href="#care" className="hover:text-[#B85C38] transition-colors">
                  <TypeText text="Our Care" delay={180} />
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#B85C38] transition-colors">
                  <TypeText text="Patient Reviews" delay={220} />
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#B85C38] transition-colors">
                  <TypeText text="FAQs" delay={260} />
                </a>
              </li>
              <li>
                <a href="#appointment" className="hover:text-[#B85C38] transition-colors">
                  <TypeText text="Contact" delay={300} />
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Clinic Address */}
          <div>
            <span className="block text-[9px] font-semibold tracking-[0.2em] uppercase text-[#7B7267] mb-5">
              <TypeText text="CLINIC ADDRESS" delay={80} />
            </span>
            <p className="text-[12.5px] font-semibold text-[#1B3B36]">
              <TypeText text={CLINIC_INFO.clinicName} delay={130} />
            </p>
            <p className="text-[12px] leading-[1.8] text-[#5A6560] mt-2">
              <TypeText text={CLINIC_INFO.address} delay={180} />
            </p>
            <p className="text-[11.5px] text-[#5A6560] mt-2.5">
              <TypeText text={`Plus Code: ${CLINIC_INFO.plusCode}`} delay={260} />
            </p>
            <p className="text-[11.5px] text-[#5A6560] mt-1">
              <TypeText text={CLINIC_INFO.hoursNote} delay={310} />
            </p>
          </div>

          {/* Column 4: Quick Actions & Policies */}
          <div>
            <span className="block text-[9px] font-semibold tracking-[0.2em] uppercase text-[#7B7267] mb-5">
              <TypeText text="APPOINTMENTS & HELP" delay={100} />
            </span>

            <div className="flex flex-col gap-3">
              <a
                href={CLINIC_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#B85C38] hover:bg-[#984728] text-white font-semibold text-[12px] px-5 py-2.5 min-h-[42px] transition-colors"
              >
                <Phone className="w-3.5 h-3.5" aria-hidden="true" />
                <TypeText text="Call Clinic" delay={160} />
              </a>

              <a
                href={CLINIC_INFO.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#D4C8B8] text-[#1B3B36] hover:bg-[#F3EFE7] font-semibold text-[12px] px-5 py-2.5 min-h-[42px] transition-colors"
              >
                <MapPin className="w-3.5 h-3.5 text-[#B85C38]" aria-hidden="true" />
                <TypeText text="Get Directions" delay={220} />
              </a>
            </div>

            <div className="mt-5 space-y-2 text-[12px] text-[#5A6560]">
              <div>
                <button
                  type="button"
                  onClick={onOpenPrivacy}
                  className="hover:text-[#B85C38] underline underline-offset-4 cursor-pointer"
                >
                  <TypeText text="Privacy Policy" delay={280} />
                </button>
              </div>
              <p className="text-[11px] leading-[1.6]">
                <TypeText text="LGBTQ+ friendly · Women-owned clinic" delay={330} />
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Medical Disclaimer */}
        <div className="flex flex-col sm:flex-row justify-between gap-3 border-t border-[#E6DFD3] pt-6 mt-12 text-[11px] text-[#7B7267]">
          <span>
            <TypeText
              text={`© ${new Date().getFullYear()} Jivantika Diagnostic Clinic · Dr. Swagatika Panda Pal. All rights reserved.`}
              delay={200}
            />
          </span>
          <span>
            <TypeText text="Purbalok, Mukundapur, Kolkata 700099" delay={280} />
          </span>
        </div>

        <p className="text-[10.5px] leading-[1.8] text-[#7B7267] mt-4 max-w-[1080px]">
          <TypeText
            text="Medical Disclaimer: Information on this website is intended for general patient education and clinic contact purposes only and does not constitute medical advice, diagnosis, or treatment. Every patient's healthcare needs are different—please consult Dr. Swagatika Panda Pal or a qualified healthcare provider for an appropriate medical assessment. For medical emergencies, please seek immediate emergency hospital care."
            delay={340}
          />
        </p>
      </div>
    </RevealSection>
  );
};
