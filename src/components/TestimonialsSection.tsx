import React from 'react';
import { Quote, Star } from 'lucide-react';
import { CLINIC_INFO, NAMED_REVIEW_REFERENCES, SUPPLIED_REVIEWS } from '../data/clinicData';
import { RevealSection } from './RevealSection';
import { TypeText } from './TypeText';

export const TestimonialsSection: React.FC = () => {
  return (
    <RevealSection id="reviews" className="bg-[#1B3B36] text-[#FBF9F5]">
      <div className="max-w-[1312px] mx-auto px-5 sm:px-10 lg:px-14 py-16 sm:py-20 lg:py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="border-l-2 border-[#B85C38] pl-6">
            <span className="block text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E8C5B0]">
              <TypeText text="THE PATIENT EXPERIENCE" delay={40} />
            </span>
            <h2 className="font-display text-[30px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-[-0.02em] text-[#FBF9F5] mt-5 text-balance">
              <TypeText text="Care that makes a difference." delay={130} speedMs={16} />
            </h2>
          </div>

          <div className="flex items-center gap-3.5 bg-[#122925]/70 border border-[#E8C5B0]/25 rounded-xl px-5 py-3.5 self-start md:self-end ml-6 md:ml-0">
            <Star className="w-5 h-5 text-[#E8C5B0] fill-[#E8C5B0] shrink-0" aria-hidden="true" />
            <div className="tabular-nums">
              <strong className="block text-[16px] font-semibold text-[#FBF9F5]">
                <TypeText text={`${CLINIC_INFO.rating}/5 | ${CLINIC_INFO.reviewCount} Google Reviews`} delay={220} />
              </strong>
              <span className="block text-[11px] text-[#B9D3CC]">
                <TypeText text="Verified patient feedback on Google" delay={290} />
              </span>
            </div>
          </div>
        </div>

        {/* 4 Supplied Patient Feedback Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {SUPPLIED_REVIEWS.map((review, idx) => (
            <article
              key={review.quote}
              className="border-t border-[#E8C5B0]/20 pt-6 flex flex-col justify-between transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div>
                <Quote className="w-6 h-6 text-[#E8C5B0]" strokeWidth={1.8} aria-hidden="true" />
                <blockquote className="mt-5 mb-6 font-display text-[17px] leading-[1.68] font-normal text-[#F2EDE4]">
                  “<TypeText text={review.quote} delay={140 + idx * 80} />”
                </blockquote>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-full bg-[#122925] border border-[#E8C5B0]/30 flex items-center justify-center text-[10px] font-semibold text-[#E8C5B0] shrink-0">
                  {review.initials}
                </span>
                <div>
                  <strong className="block text-[12px] font-medium text-[#FBF9F5]">
                    <TypeText text={review.author} delay={240 + idx * 80} />
                  </strong>
                  <small className="block text-[10.5px] text-[#B9D3CC] mt-0.5">
                    <TypeText text={review.context} delay={290 + idx * 80} />
                  </small>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Detailed Patient Review References */}
        <div className="mt-12 pt-8 border-t border-[#E8C5B0]/20">
          <span className="block text-[9px] font-semibold tracking-[0.2em] uppercase text-[#E8C5B0] mb-5">
            <TypeText text="FEATURED PATIENT REVIEW HIGHLIGHTS" delay={380} />
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {NAMED_REVIEW_REFERENCES.map((item, idx) => (
              <div
                key={item.name}
                className="bg-[#122925]/60 border border-[#E8C5B0]/15 rounded-xl p-5"
              >
                <p className="text-[13.5px] leading-[1.7] text-[#F2EDE4]">
                  “<TypeText text={item.highlight} delay={420 + idx * 70} />”
                </p>
                <p className="text-[12px] font-semibold text-[#E8C5B0] mt-3">
                  — <TypeText text={item.name} delay={500 + idx * 70} />
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </RevealSection>
  );
};
