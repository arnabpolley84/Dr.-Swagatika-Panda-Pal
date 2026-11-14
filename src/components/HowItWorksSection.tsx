import React from 'react';
import { PhoneCall, Stethoscope, ClipboardCheck, ArrowRight } from 'lucide-react';
import { CLINIC_INFO, HOW_IT_WORKS_STEPS } from '../data/clinicData';
import { RevealSection } from './RevealSection';
import { TypeText } from './TypeText';

const STEP_ICONS = [PhoneCall, Stethoscope, ClipboardCheck];

export const HowItWorksSection: React.FC = () => {
  return (
    <RevealSection
      id="how-it-works"
      className="max-w-[1312px] mx-auto px-5 sm:px-10 lg:px-14 py-16 sm:py-20 lg:py-24"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="border-l-2 border-[#B85C38] pl-6">
          <span className="block text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B85C38]">
            <TypeText text="HOW IT WORKS" delay={30} />
          </span>
          <h2 className="font-display text-[30px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-[-0.02em] text-[#1B3B36] mt-5 text-balance">
            <TypeText text="Your healthcare journey, made simpler." delay={120} speedMs={16} />
          </h2>
        </div>

        <p className="text-[13px] leading-[1.8] text-[#5A6560] max-w-[330px] pl-6 md:pl-0">
          <TypeText
            text="Clear steps from your first call to personalised medical follow-up."
            delay={260}
          />
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mt-12 sm:mt-14 mb-10">
        {HOW_IT_WORKS_STEPS.map((step, idx) => {
          const Icon = STEP_ICONS[idx] ?? PhoneCall;
          return (
            <article
              key={step.number}
              className="relative border-t border-[#E6DFD3] pt-7 group transition-transform duration-200 hover:-translate-y-0.5"
            >
              <span className="absolute right-0 top-6 font-display text-[30px] font-normal text-[#D9C7B8] tabular-nums">
                <TypeText text={step.number} delay={150 + idx * 110} />
              </span>
              <Icon className="w-[26px] h-[26px] text-[#B85C38]" strokeWidth={1.8} aria-hidden="true" />
              <h3 className="font-display text-[19px] font-medium tracking-[-0.015em] text-[#1B3B36] mt-5">
                <TypeText text={`${step.number} – ${step.title}`} delay={220 + idx * 110} />
              </h3>
              <p className="text-[13px] leading-[1.85] text-[#5A6560] mt-3 max-w-[340px]">
                <TypeText text={step.description} delay={320 + idx * 110} />
              </p>
            </article>
          );
        })}
      </div>

      <div>
        <a
          href={CLINIC_INFO.phoneHref}
          className="inline-flex items-center justify-center gap-3 rounded-full bg-[#B85C38] hover:bg-[#984728] text-white font-semibold text-[13px] px-7 py-3.5 min-h-[48px] transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#984728]"
        >
          <TypeText text="Schedule Your Visit" delay={520} />
          <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
        </a>
      </div>
    </RevealSection>
  );
};
