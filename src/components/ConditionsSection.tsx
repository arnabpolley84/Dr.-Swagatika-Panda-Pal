import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Info } from 'lucide-react';
import { CLINIC_INFO, CONDITION_CATEGORIES } from '../data/clinicData';
import { RevealSection } from './RevealSection';
import { TypeText } from './TypeText';

export const ConditionsSection: React.FC = () => {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const currentCategory = CONDITION_CATEGORIES[activeTabIdx] ?? CONDITION_CATEGORIES[0];

  return (
    <RevealSection id="conditions" className="bg-[#F3EFE7] border-y border-[#E6DFD3]">
      <div className="max-w-[1312px] mx-auto px-5 sm:px-10 lg:px-14 py-16 sm:py-20">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="border-l-2 border-[#B85C38] pl-6">
            <span className="block text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B85C38]">
              <TypeText text="WHAT WE CAN HELP WITH" delay={40} />
            </span>
            <h2 className="font-display text-[30px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-[-0.02em] text-[#1B3B36] mt-5 text-balance">
              <TypeText text="Your concerns deserve attention." delay={130} speedMs={16} />
            </h2>
          </div>

          <a
            href={CLINIC_INFO.phoneHref}
            className="group inline-flex items-center gap-3 text-[13px] font-medium text-[#B85C38] hover:text-[#1B3B36] border-b border-[#D4C8B8] pb-2 self-start sm:self-end ml-6 sm:ml-0 transition-colors"
          >
            <TypeText text="Enquire about a consultation" delay={260} />
            <ArrowUpRight
              className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </a>
        </div>

        {/* Interactive Tabs */}
        <div
          role="tablist"
          aria-label="Women's health concern categories"
          className="flex flex-wrap gap-6 sm:gap-8 border-b border-[#DED5C7] mt-9"
        >
          {CONDITION_CATEGORIES.map((cat, idx) => {
            const selected = idx === activeTabIdx;
            return (
              <button
                key={cat.id}
                type="button"
                role="tab"
                id={`condition-tab-${idx}`}
                aria-selected={selected}
                aria-controls="condition-panel"
                onClick={() => setActiveTabIdx(idx)}
                className={`inline-flex items-center gap-3 py-3.5 text-[13px] border-b-2 -mb-[1px] transition-colors whitespace-nowrap cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B85C38] ${
                  selected
                    ? 'border-[#B85C38] text-[#1B3B36] font-semibold'
                    : 'border-transparent text-[#5A6560] hover:text-[#1B3B36]'
                }`}
              >
                <TypeText text={cat.label} delay={220 + idx * 60} />
                <span className="text-[10px] opacity-65 tabular-nums">
                  <TypeText text={cat.count} delay={260 + idx * 60} />
                </span>
              </button>
            );
          })}
        </div>

        {/* Tab Panel */}
        <div
          key={currentCategory.id}
          role="tabpanel"
          id="condition-panel"
          aria-labelledby={`condition-tab-${activeTabIdx}`}
          className="pt-8"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 min-h-[84px]">
            {currentCategory.items.map((item, idx) => (
              <div
                key={item}
                className="flex items-center gap-2.5 text-[13px] font-medium text-[#242B28] py-1"
              >
                <CheckCircle2
                  className="w-[17px] h-[17px] text-[#B85C38] shrink-0"
                  strokeWidth={2}
                  aria-hidden="true"
                />
                <TypeText text={item} delay={60 + idx * 55} />
              </div>
            ))}
          </div>

          <p className="flex items-start gap-2.5 text-[12px] sm:text-[12.5px] leading-[1.85] text-[#5A6560] mt-7 max-w-[900px]">
            <Info className="w-[17px] h-[17px] text-[#1B3B36] shrink-0 mt-0.5" aria-hidden="true" />
            <span>
              <TypeText text={currentCategory.detail} delay={240} />
            </span>
          </p>
        </div>

        {/* Required Medical Disclaimer */}
        <div className="text-[11.5px] leading-[1.7] text-[#5A6560] border-t border-[#DED5C7] pt-5 mt-7">
          <TypeText
            text="Every patient's needs are different. Consult your doctor for an appropriate medical assessment and treatment recommendations."
            delay={340}
          />
        </div>
      </div>
    </RevealSection>
  );
};
