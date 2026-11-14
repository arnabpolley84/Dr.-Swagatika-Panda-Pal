import React, { useState } from 'react';
import { Plus } from 'lucide-react';
import { FAQ_ITEMS } from '../data/clinicData';
import { RevealSection } from './RevealSection';
import { TypeText } from './TypeText';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleItem = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <RevealSection
      id="faq"
      className="max-w-[1312px] mx-auto px-5 sm:px-10 lg:px-14 py-16 sm:py-20 lg:py-24"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-20">
        {/* Left Sticky Heading Column */}
        <div className="lg:col-span-5">
          <div className="border-l-2 border-[#B85C38] pl-6 lg:sticky lg:top-28">
            <span className="block text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B85C38]">
              <TypeText text="FREQUENTLY ASKED QUESTIONS" delay={40} />
            </span>
            <h2 className="font-display text-[30px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-[-0.02em] text-[#1B3B36] mt-5 text-balance">
              <TypeText text="Good questions. Clear answers." delay={130} speedMs={16} />
            </h2>
            <p className="text-[13px] leading-[1.9] text-[#5A6560] mt-5 max-w-[300px]">
              <TypeText
                text="Because feeling informed is part of feeling cared for."
                delay={260}
              />
            </p>
          </div>
        </div>

        {/* Right Accordion List */}
        <div className="lg:col-span-7 divide-y divide-[#E6DFD3] border-b border-[#E6DFD3]">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={item.question} className="py-5 first:pt-1">
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${idx}`}
                  onClick={() => toggleItem(idx)}
                  className="w-full flex items-center justify-between gap-5 text-left py-1 text-[14.5px] sm:text-[15px] font-medium text-[#1B3B36] hover:text-[#B85C38] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#B85C38] rounded"
                >
                  <span>
                    <TypeText text={item.question} delay={120 + idx * 65} />
                  </span>
                  <Plus
                    className={`w-[18px] h-[18px] text-[#B85C38] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    aria-hidden="true"
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${idx}`}
                    className="mt-3.5 pr-6 text-[13px] sm:text-[13.5px] leading-[1.85] text-[#5A6560]"
                  >
                    <TypeText text={item.answer} active={true} delay={30} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </RevealSection>
  );
};
