import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { CLINIC_INFO, SERVICES_LIST } from '../data/clinicData';
import { RevealSection } from './RevealSection';
import { TypeText } from './TypeText';
import { SafeImage } from './SafeImage';

export const ServicesSection: React.FC = () => {
  return (
    <RevealSection
      id="care"
      className="max-w-[1312px] mx-auto px-5 sm:px-10 lg:px-14 py-16 sm:py-20 lg:py-24 border-t border-[#E6DFD3]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="border-l-2 border-[#B85C38] pl-6">
          <span className="block text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B85C38]">
            <TypeText text="CARE FOR EVERY STAGE OF WOMANHOOD" delay={40} />
          </span>
          <h2 className="font-display text-[30px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-[-0.02em] text-[#1B3B36] mt-5 text-balance">
            <TypeText text="Thoughtful care. Every step of the way." delay={150} speedMs={16} />
          </h2>
        </div>

        <p className="text-[13px] leading-[1.8] text-[#5A6560] max-w-[340px] pl-6 md:pl-0">
          <TypeText
            text="Obstetric and gynaecological consultations tailored to your health stage and questions."
            delay={260}
          />
        </p>
      </div>

      <div className="mt-14 sm:mt-16 flex flex-col gap-16 lg:gap-20">
        {SERVICES_LIST.map((service, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <RevealSection key={service.index} as="div" className="w-full">
              <article className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-24 items-center">
                {/* Text Copy */}
                <div className={`pl-2 sm:pl-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className="block text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B85C38]">
                    <span className="text-[#8E8377] font-normal mr-4 tabular-nums">
                      <TypeText text={service.index} delay={20} />
                    </span>
                    <TypeText text={service.eyebrow} delay={70} />
                  </span>

                  <h3 className="font-display text-[28px] sm:text-[34px] lg:text-[37px] font-normal leading-[1.22] tracking-[-0.02em] text-[#1B3B36] mt-4">
                    <TypeText text={service.title} delay={130} speedMs={16} />
                  </h3>

                  <p className="text-[13.5px] sm:text-[14px] leading-[1.85] text-[#5A6560] max-w-[430px] mt-5">
                    <TypeText text={service.description} delay={220} />
                  </p>

                  <ul className="my-6 space-y-2.5">
                    {service.highlights.map((item, hIdx) => (
                      <li
                        key={item}
                        className="flex items-center gap-2.5 text-[12.5px] text-[#3F4B47]"
                      >
                        <Check
                          className="w-4 h-4 text-[#B85C38] shrink-0"
                          strokeWidth={2.2}
                          aria-hidden="true"
                        />
                        <TypeText text={item} delay={300 + hIdx * 65} />
                      </li>
                    ))}
                  </ul>

                  <a
                    href={CLINIC_INFO.phoneHref}
                    className="inline-flex items-center justify-center gap-2.5 rounded-full border border-[#D4C8B8] text-[#1B3B36] hover:bg-[#F3EFE7] hover:border-[#B85C38] font-semibold text-[12px] px-5 py-3 min-h-[44px] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B85C38]"
                  >
                    <TypeText text={service.cta} delay={460} />
                    <ArrowRight className="w-4 h-4 shrink-0 text-[#B85C38]" aria-hidden="true" />
                  </a>
                </div>

                {/* Image with Terracotta & Forest signature corner accents */}
                <div className={`relative ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="overflow-hidden rounded-[6px] bg-[#F3EFE7]">
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <SafeImage
                        src={service.image}
                        alt={service.imageAlt}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]"
                      />
                    </div>
                  </div>
                  <span
                    aria-hidden="true"
                    className={`hidden sm:block absolute w-[52px] h-[52px] pointer-events-none border-b-2 border-r-2 ${
                      isEven
                        ? '-left-2.5 -bottom-2.5 border-[#1B3B36]/55 rotate-90'
                        : '-right-2.5 -bottom-2.5 border-[#B85C38]'
                    }`}
                  />
                </div>
              </article>
            </RevealSection>
          );
        })}
      </div>
    </RevealSection>
  );
};
