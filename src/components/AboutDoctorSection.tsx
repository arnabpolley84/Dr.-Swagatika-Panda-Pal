import React from 'react';
import {
  ShieldCheck,
  HeartHandshake,
  Stethoscope,
  MessageCircleHeart,
  Sparkles,
  Star,
  ArrowRight,
} from 'lucide-react';
import { CLINIC_INFO, DOCTOR_TRUST_POINTS, IMAGES } from '../data/clinicData';
import { RevealSection } from './RevealSection';
import { TypeText } from './TypeText';
import { SafeImage } from './SafeImage';

const TRUST_ICONS = [Stethoscope, HeartHandshake, ShieldCheck, MessageCircleHeart, Sparkles];

export const AboutDoctorSection: React.FC = () => {
  return (
    <RevealSection id="about-doctor" className="bg-[#EFF3F0] overflow-hidden">
      <div className="max-w-[1312px] mx-auto px-5 sm:px-10 lg:px-14 py-14 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Doctor Bilingual Spotlight & Bio Panel */}
          <div className="lg:col-span-6 bg-[#FBF9F5] p-7 sm:p-10 border-l-2 border-[#B85C38] shadow-sm">
            <span className="block text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B85C38]">
              <TypeText text="EXPERTISE YOU CAN TRUST" delay={40} />
            </span>

            <h2 className="font-display text-[30px] sm:text-[36px] font-normal leading-[1.2] tracking-[-0.02em] text-[#1B3B36] mt-5 text-balance">
              <TypeText text="Expert guidance. " delay={120} speedMs={16} />
              <span className="text-[#B85C38] italic">
                <TypeText text="Compassionate care." delay={320} speedMs={16} />
              </span>
            </h2>

            {/* Prominent Bilingual English + Bengali Doctor Spotlight */}
            <div className="mt-5 pb-5 border-b border-[#E6DFD3]">
              <h3 className="font-display text-[22px] sm:text-[25px] font-semibold text-[#1B3B36]">
                <TypeText text={CLINIC_INFO.doctorName} delay={220} />
              </h3>
              <p className="font-bengali text-[18px] sm:text-[19px] text-[#B85C38] font-semibold mt-1">
                <TypeText text={CLINIC_INFO.doctorNameBengali} delay={280} />
              </p>
              <p className="text-[13px] font-medium text-[#5A6560] mt-1.5">
                <TypeText text={`${CLINIC_INFO.speciality} · ${CLINIC_INFO.clinicName}`} delay={330} />
              </p>
              <p className="text-[11px] text-[#5A6560]/90 mt-2 italic">
                <TypeText
                  text="Qualifications & registration details: [Editable placeholder for confirmation by Dr. Swagatika Panda Pal]"
                  delay={380}
                />
              </p>
            </div>

            <p className="text-[13.5px] sm:text-[14px] leading-[1.85] text-[#5A6560] mt-5">
              <TypeText
                text="Dr. Swagatika Panda Pal provides women's healthcare consultations with an emphasis on compassionate communication, individual attention and patient comfort."
                delay={360}
              />
            </p>
            <p className="text-[13.5px] sm:text-[14px] leading-[1.85] text-[#5A6560] mt-3">
              <TypeText
                text="Her approach focuses on understanding each patient's concerns, explaining available healthcare options and providing appropriate medical guidance."
                delay={480}
              />
            </p>

            {/* 5 Trust Points */}
            <ul className="mt-6 space-y-4">
              {DOCTOR_TRUST_POINTS.map((point, idx) => {
                const Icon = TRUST_ICONS[idx] ?? ShieldCheck;
                return (
                  <li key={point.title} className="flex items-start gap-3">
                    <Icon className="w-[19px] h-[19px] text-[#B85C38] shrink-0 mt-0.5" aria-hidden="true" />
                    <div>
                      <strong className="block text-[12.5px] font-semibold text-[#1B3B36]">
                        <TypeText text={point.title} delay={420 + idx * 60} />
                      </strong>
                      <span className="block text-[11.5px] leading-[1.65] text-[#5A6560] mt-0.5">
                        <TypeText text={point.description} delay={460 + idx * 60} />
                      </span>
                    </div>
                  </li>
                );
              })}
            </ul>

            {/* Google Rating + CTA */}
            <div className="mt-7 pt-5 border-t border-[#E6DFD3] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-[13px] font-semibold text-[#1B3B36] tabular-nums">
                <Star className="w-4 h-4 text-[#B85C38] fill-[#B85C38] shrink-0" aria-hidden="true" />
                <TypeText
                  text={`${CLINIC_INFO.rating}/5 Google Rating · ${CLINIC_INFO.reviewCount} Reviews`}
                  delay={640}
                />
              </div>

              <a
                href={CLINIC_INFO.phoneHref}
                className="group inline-flex items-center gap-2 text-[13px] font-semibold text-[#B85C38] border-b border-[#D4C8B8] pb-1.5 hover:text-[#1B3B36] transition-colors"
              >
                <TypeText text="Book a Consultation" delay={680} />
                <ArrowRight
                  className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>
            </div>
          </div>

          {/* Right Column: Doctor Profile Photograph in Natural 3:4 Aspect Ratio */}
          <div className="lg:col-span-6 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[460px]">
              <div className="rounded-2xl overflow-hidden bg-[#FBF9F5] p-2.5 shadow-md border border-[#E6DFD3]">
                <div className="aspect-[3/4] w-full overflow-hidden rounded-xl">
                  <SafeImage
                    src={IMAGES.doctorProfile}
                    alt="Dr. Swagatika Panda Pal at Jivantika Diagnostic Clinic with patients and their newborn"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="pt-3.5 pb-1.5 px-2 flex flex-wrap items-center justify-between gap-2 text-[12px] text-[#5A6560]">
                  <span className="font-semibold text-[#1B3B36]">
                    <TypeText text={CLINIC_INFO.doctorName} delay={300} />
                  </span>
                  <span className="font-bengali text-[#B85C38] font-medium">
                    <TypeText text={CLINIC_INFO.doctorNameBengali} delay={380} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
};
