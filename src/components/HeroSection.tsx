import React from 'react';
import { ArrowRight, Phone, Star, MapPin, HeartHandshake } from 'lucide-react';
import { CLINIC_INFO, IMAGES } from '../data/clinicData';
import { RevealSection } from './RevealSection';
import { TypeText } from './TypeText';
import { SafeImage } from './SafeImage';

export const HeroSection: React.FC = () => {
  return (
    <RevealSection
      id="home"
      immediate={true}
      ariaLabelledBy="hero-title"
      className="relative bg-[#1B3B36] text-[#FBF9F5] overflow-hidden"
    >
      {/* Subtle architectural linen grid */}
      <div className="hero-grid-bg absolute inset-0 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-transparent to-[#122925]/70"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1312px] mx-auto px-5 sm:px-10 lg:px-14 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Bilingual Doctor Spotlight, Editorial Headline, CTAs & Trust Indicator */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <div className="inline-flex items-center gap-2.5 text-[10px] sm:text-[11px] font-semibold tracking-[0.18em] uppercase border border-[#E8C5B0]/35 bg-[#B85C38]/20 text-[#F3DFD3] px-4 py-2 rounded-full">
              <TypeText
                text="TRUSTED WOMEN'S HEALTHCARE IN KOLKATA"
                delay={60}
                speedMs={16}
                showCaret={true}
              />
            </div>

            {/* Prominent Bilingual English + Bengali Doctor Spotlight */}
            <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1 text-[#E8C5B0]">
              <span className="text-[14px] sm:text-[15px] font-semibold tracking-wide">
                <TypeText text={CLINIC_INFO.doctorName} delay={150} />
              </span>
              <span aria-hidden="true" className="text-[#E8C5B0]/50">·</span>
              <span className="font-bengali text-[15px] sm:text-[16px] font-medium text-[#B9D3CC]">
                <TypeText text={CLINIC_INFO.doctorNameBengali} delay={210} />
              </span>
            </div>

            <h1
              id="hero-title"
              className="font-display text-[36px] sm:text-[50px] lg:text-[60px] xl:text-[66px] font-normal leading-[1.12] tracking-[-0.025em] mt-4 text-balance"
            >
              <TypeText text="Care for every chapter of " delay={260} speedMs={22} />
              <span className="text-[#E8C5B0] italic">
                <TypeText text="your womanhood." delay={760} speedMs={24} showCaret={true} />
              </span>
            </h1>

            <p className="text-[#DCE5E2] text-[15px] sm:text-[16px] leading-[1.82] max-w-[520px] mt-5 sm:mt-6 font-normal">
              <TypeText
                text="Compassionate pregnancy care, expert gynaecological guidance and personalised healthcare to support women through every stage of life."
                delay={420}
              />
            </p>

            {/* Primary & Secondary CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 mt-7 sm:mt-8">
              <a
                href={CLINIC_INFO.phoneHref}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#B85C38] hover:bg-[#984728] text-white font-semibold text-[13px] px-6 py-3.5 min-h-[48px] whitespace-nowrap transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E8C5B0]"
              >
                <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
                <TypeText text="Book an Appointment" delay={560} />
              </a>

              <a
                href="#care"
                className="inline-flex items-center justify-center gap-3 rounded-full border border-[#FBF9F5]/30 bg-white/[0.06] hover:bg-white/[0.14] text-[#FBF9F5] font-medium text-[13px] px-6 py-3.5 min-h-[48px] whitespace-nowrap backdrop-blur-sm transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FBF9F5]"
              >
                <TypeText text="Explore Our Care" delay={650} />
                <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
              </a>
            </div>

            {/* Trust Indicator Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-8 sm:mt-10 w-full max-w-[610px]">
              <div className="flex items-center gap-3 bg-[#122925]/65 border border-[#E8C5B0]/20 rounded-xl px-4 py-3.5 backdrop-blur-md">
                <Star className="w-5 h-5 text-[#E8C5B0] fill-[#E8C5B0] shrink-0" aria-hidden="true" />
                <div>
                  <strong className="block text-[13px] font-semibold text-[#FBF9F5] tabular-nums">
                    <TypeText text="4.8 ★ Google Rating" delay={720} />
                  </strong>
                  <small className="block text-[10px] tracking-[0.12em] uppercase text-[#B9D3CC] mt-0.5 tabular-nums">
                    <TypeText text="127 Patient Reviews" delay={800} />
                  </small>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#122925]/65 border border-[#E8C5B0]/20 rounded-xl px-4 py-3.5 backdrop-blur-md">
                <MapPin className="w-5 h-5 text-[#E8C5B0] shrink-0" aria-hidden="true" />
                <div>
                  <strong className="block text-[13px] font-semibold text-[#FBF9F5]">
                    <TypeText text="Jivantika Clinic" delay={780} />
                  </strong>
                  <small className="block text-[10px] tracking-[0.12em] uppercase text-[#B9D3CC] mt-0.5">
                    <TypeText text="Purbalok · Mukundapur" delay={860} />
                  </small>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-[#122925]/65 border border-[#E8C5B0]/20 rounded-xl px-4 py-3.5 backdrop-blur-md">
                <HeartHandshake className="w-5 h-5 text-[#E8C5B0] shrink-0" aria-hidden="true" />
                <div>
                  <strong className="block text-[13px] font-semibold text-[#FBF9F5]">
                    <TypeText text="Women-Owned" delay={840} />
                  </strong>
                  <small className="block text-[10px] tracking-[0.12em] uppercase text-[#B9D3CC] mt-0.5">
                    <TypeText text="LGBTQ+ Friendly" delay={920} />
                  </small>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Prominent Verified Photograph of Dr. Swagatika Panda Pal */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[420px]">
              <div
                className="absolute -inset-3 rounded-3xl bg-gradient-to-tr from-[#B85C38]/25 via-transparent to-[#B9D3CC]/15 blur-xl pointer-events-none"
                aria-hidden="true"
              />

              <div className="relative rounded-2xl overflow-hidden border border-[#E8C5B0]/25 bg-[#122925] shadow-2xl">
                <div className="aspect-[3/4] w-full overflow-hidden">
                  <SafeImage
                    src={IMAGES.doctorHero}
                    alt="Dr. Swagatika Panda Pal consulting with a happy family and newborn at Jivantika Diagnostic Clinic, Kolkata"
                    loading="eager"
                    fetchPriority="high"
                    className="w-full h-full object-cover object-top"
                  />
                </div>

                <div
                  className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#122925]/95 via-[#122925]/65 to-transparent pointer-events-none"
                  aria-hidden="true"
                />

                <div className="absolute inset-x-3 bottom-3 bg-[#FBF9F5]/95 backdrop-blur-md rounded-xl px-4 py-3 text-[#242B28] shadow-lg border border-[#E6DFD3]">
                  <div className="flex items-center justify-between gap-3">
                    <div className="min-w-0">
                      <p className="font-display text-[14px] font-semibold text-[#1B3B36] truncate">
                        <TypeText text={CLINIC_INFO.doctorName} delay={450} />
                      </p>
                      <p className="text-[11px] text-[#5A6560] mt-0.5">
                        <TypeText
                          text={`${CLINIC_INFO.doctorNameBengali} · ${CLINIC_INFO.speciality}`}
                          delay={550}
                        />
                      </p>
                    </div>
                    <a
                      href={CLINIC_INFO.phoneHref}
                      aria-label={`Call ${CLINIC_INFO.doctorName} at ${CLINIC_INFO.phoneDisplay}`}
                      className="w-9 h-9 rounded-full bg-[#F3EFE7] hover:bg-[#B85C38] text-[#B85C38] hover:text-white flex items-center justify-center shrink-0 transition-colors"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </RevealSection>
  );
};
