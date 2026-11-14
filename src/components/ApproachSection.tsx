import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { IMAGES } from '../data/clinicData';
import { RevealSection } from './RevealSection';
import { TypeText } from './TypeText';
import { SafeImage } from './SafeImage';

export const ApproachSection: React.FC = () => {
  return (
    <RevealSection id="approach" className="bg-[#152E2A] text-[#FBF9F5] border-t border-[#E8C5B0]/15">
      <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-2 items-stretch">
        {/* Left Copy Column */}
        <div className="px-6 sm:px-10 lg:px-16 xl:px-22 py-14 sm:py-16 lg:py-20 flex flex-col justify-center">
          <div className="border-l-2 border-[#B85C38] pl-6">
            <span className="block text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E8C5B0]">
              <TypeText text="A MORE PERSONAL APPROACH TO WOMEN'S HEALTH" delay={40} />
            </span>
            <h2 className="font-display text-[28px] sm:text-[34px] lg:text-[38px] font-normal leading-[1.22] tracking-[-0.02em] mt-5 text-balance">
              <TypeText
                text="Your health deserves care that listens, "
                delay={140}
                speedMs={16}
              />
              <span className="text-[#E8C5B0] italic">
                <TypeText text="understands and supports." delay={480} speedMs={18} />
              </span>
            </h2>
          </div>

          <p className="text-[13.5px] sm:text-[14.5px] leading-[1.9] text-[#D1DCD8] max-w-[440px] mt-7 pl-[26px]">
            <TypeText
              text="Every woman's healthcare journey is different. From adolescence and reproductive health to pregnancy, motherhood and beyond, having the right medical guidance makes a difference."
              delay={280}
            />
          </p>

          <p className="text-[13.5px] sm:text-[14.5px] leading-[1.9] text-[#D1DCD8] max-w-[440px] mt-4 pl-[26px]">
            <TypeText
              text="At Jivantika Diagnostic Clinic, Dr. Swagatika Panda Pal believes in providing thoughtful, compassionate and personalised gynaecological care."
              delay={480}
            />
          </p>

          <div className="mt-8 pl-[26px]">
            <a
              href="#care"
              className="group inline-flex items-center gap-3 text-[13px] font-medium text-[#E8C5B0] hover:text-white border-b border-[#E8C5B0]/40 pb-2 transition-colors"
            >
              <TypeText text="Care that meets you at every stage" delay={620} />
              <ArrowUpRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>

        {/* Right Supporting Image Column */}
        <div className="relative min-h-[340px] sm:min-h-[420px] lg:min-h-[520px] overflow-hidden">
          <SafeImage
            src={IMAGES.approachCare}
            alt="Woman feeling calm and supported in a sunlit lounge space"
            className="w-full h-full object-cover"
          />
          <span className="absolute bottom-5 left-6 text-[9px] tracking-[0.18em] uppercase text-[#FBF9F5] px-3.5 py-2.5 bg-[#1B3B36]/85 backdrop-blur-md rounded-[5px] border border-[#E8C5B0]/25">
            <TypeText text="JIVANTIKA · MUKUNDAPUR, KOLKATA" delay={320} />
          </span>
        </div>
      </div>
    </RevealSection>
  );
};
