import React from 'react';
import { Phone, ArrowRight, ShieldCheck } from 'lucide-react';
import { CLINIC_INFO, IMAGES } from '../data/clinicData';
import { RevealSection } from './RevealSection';
import { TypeText } from './TypeText';
import { SafeImage } from './SafeImage';

export const FinalCtaSection: React.FC = () => {
  return (
    <RevealSection className="relative min-h-[430px] sm:min-h-[460px] overflow-hidden bg-[#1B3B36] text-[#FBF9F5] flex items-center">
      <SafeImage
        src={IMAGES.finalCtaWalk}
        alt="Women walking along a sunlit peaceful garden pathway"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, rgba(27,59,54,0.95) 0%, rgba(27,59,54,0.8) 52%, rgba(27,59,54,0.32) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 w-full max-w-[1312px] mx-auto px-5 sm:px-10 lg:px-14 py-16 sm:py-20">
        <span className="block text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E8C5B0]">
          <TypeText text="JIVANTIKA DIAGNOSTIC CLINIC · KOLKATA" delay={40} />
        </span>

        <h2 className="font-display text-[36px] sm:text-[48px] lg:text-[56px] font-normal leading-[1.12] tracking-[-0.02em] mt-5 max-w-[680px] text-balance">
          <TypeText text="Your health. Your journey. " delay={140} speedMs={16} />
          <span className="text-[#E8C5B0] italic">
            <TypeText text="We're here for you." delay={420} speedMs={16} />
          </span>
        </h2>

        <p className="text-[14px] sm:text-[15px] text-[#DCE5E2] mt-5 max-w-[480px] leading-[1.75]">
          <TypeText
            text="Take the first step towards thoughtful, personalised women's healthcare."
            delay={320}
          />
        </p>

        <div className="flex flex-wrap items-center gap-3.5 mt-7">
          <a
            href={CLINIC_INFO.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 rounded-full bg-[#B85C38] hover:bg-[#984728] text-white font-semibold text-[13px] px-7 py-3.5 min-h-[48px] whitespace-nowrap transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8C5B0]"
          >
            <TypeText text="Book an Appointment" delay={460} />
            <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
          </a>

          <a
            href={CLINIC_INFO.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#FBF9F5]/30 bg-white/[0.08] hover:bg-white/[0.16] text-[#FBF9F5] font-medium text-[13px] px-6 py-3.5 min-h-[48px] whitespace-nowrap backdrop-blur-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBF9F5]"
          >
            <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
            <TypeText text={`Call ${CLINIC_INFO.phoneDisplay}`} delay={540} />
          </a>
        </div>

        <span className="inline-flex items-center gap-2 text-[11px] text-[#B9D3CC] mt-6">
          <ShieldCheck className="w-4 h-4 text-[#E8C5B0] shrink-0" aria-hidden="true" />
          <TypeText
            text={`${CLINIC_INFO.doctorName} (${CLINIC_INFO.doctorNameBengali}) · ${CLINIC_INFO.speciality}`}
            delay={620}
          />
        </span>
      </div>
    </RevealSection>
  );
};
