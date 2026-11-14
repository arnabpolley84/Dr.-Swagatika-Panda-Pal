import React from 'react';
import { Phone, MapPin, Clock, Check, Navigation, HeartHandshake } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';
import { RevealSection } from './RevealSection';
import { TypeText } from './TypeText';

export const ConsultationSection: React.FC = () => {
  return (
    <RevealSection
      id="appointment"
      className="max-w-[1312px] mx-auto px-5 sm:px-10 lg:px-14 py-16 sm:py-20 lg:py-24"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-11">
        <div className="border-l-2 border-[#B85C38] pl-6">
          <span className="block text-[9px] sm:text-[10px] font-semibold tracking-[0.2em] uppercase text-[#B85C38]">
            <TypeText text="CONSULTATION & MUKUNDAPUR CLINIC" delay={40} />
          </span>
          <h2 className="font-display text-[30px] sm:text-[38px] lg:text-[44px] font-normal leading-[1.2] tracking-[-0.02em] text-[#1B3B36] mt-5 text-balance">
            <TypeText text="Your health matters. Let's take the next step." delay={130} speedMs={16} />
          </h2>
        </div>

        <p className="text-[13.5px] leading-[1.8] text-[#5A6560] max-w-[360px] pl-6 md:pl-0">
          <TypeText
            text="Connect with Jivantika Diagnostic Clinic to enquire about consultation availability and appointment details."
            delay={260}
          />
        </p>
      </div>

      {/* Two-card Consultation & Mukundapur Landmark Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-[1040px] mx-auto">
        {/* Card 1: Direct Appointment & Doctor Details */}
        <article className="border border-[#E6DFD3] rounded-xl p-7 sm:p-9 bg-white flex flex-col justify-between">
          <div>
            <span className="block text-[9px] font-semibold tracking-[0.2em] uppercase text-[#B85C38]">
              <TypeText text="CLINIC CONSULTATION" delay={140} />
            </span>

            <h3 className="font-display text-[24px] sm:text-[26px] font-medium tracking-[-0.015em] text-[#1B3B36] mt-3">
              <TypeText text={CLINIC_INFO.doctorName} delay={200} />
            </h3>
            <p className="text-[13px] text-[#B85C38] font-medium mt-1">
              <TypeText
                text={`${CLINIC_INFO.doctorNameBengali} · ${CLINIC_INFO.speciality}`}
                delay={260}
              />
            </p>

            <div className="mt-5 pt-5 border-t border-[#E6DFD3] space-y-3.5 text-[13px] text-[#3F4B47]">
              <div className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#B85C38] shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-[#1B3B36]">
                    <TypeText text={`${CLINIC_INFO.clinicName}: `} delay={300} />
                  </strong>
                  <TypeText
                    text="In-person obstetric & gynaecological consultations in Kolkata."
                    delay={340}
                  />
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#B85C38] shrink-0 mt-1" aria-hidden="true" />
                <span className="tabular-nums">
                  <strong className="font-semibold text-[#1B3B36]">
                    <TypeText text="Phone: " delay={380} />
                  </strong>
                  <TypeText text={CLINIC_INFO.phoneDisplay} delay={420} />
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-[#B85C38] shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-[#1B3B36]">
                    <TypeText text="Hours: " delay={450} />
                  </strong>
                  <TypeText text={CLINIC_INFO.hoursNote} delay={480} />
                </span>
              </div>
            </div>
          </div>

          <div className="mt-7">
            <a
              href={CLINIC_INFO.phoneHref}
              className="w-full inline-flex items-center justify-center gap-2.5 rounded-full bg-[#B85C38] hover:bg-[#984728] text-white font-semibold text-[13px] px-6 py-3.5 min-h-[48px] transition-all duration-200 active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#984728]"
            >
              <Phone className="w-4 h-4 shrink-0" aria-hidden="true" />
              <TypeText text={`Call to Book: ${CLINIC_INFO.phoneDisplay}`} delay={520} />
            </a>
            <p className="text-[11px] text-center text-[#5A6560] mt-3">
              <TypeText text="Contact the clinic to confirm available consultation slots." delay={580} />
            </p>
          </div>
        </article>

        {/* Card 2: Mukundapur Landmark & Directions */}
        <article className="border border-[#DFD5C5] rounded-xl p-7 sm:p-9 bg-[#F3EFE7] flex flex-col justify-between">
          <div>
            <span className="block text-[9px] font-semibold tracking-[0.2em] uppercase text-[#1B3B36]">
              <TypeText text="MUKUNDAPUR LANDMARK · KOLKATA" delay={180} />
            </span>

            <h3 className="font-display text-[24px] sm:text-[26px] font-medium tracking-[-0.015em] text-[#1B3B36] mt-3">
              <TypeText text={CLINIC_INFO.clinicName} delay={240} />
            </h3>
            <p className="text-[13px] text-[#B85C38] font-medium mt-1">
              <TypeText text="Opposite Maa Trinayani Restaurant · Purbalok" delay={300} />
            </p>

            <div className="mt-5 pt-5 border-t border-[#DED5C7] space-y-3.5 text-[13px] text-[#3F4B47]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#B85C38] shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <TypeText text={CLINIC_INFO.address} delay={340} />
                </span>
              </div>

              <div className="flex items-start gap-3">
                <Navigation className="w-4 h-4 text-[#B85C38] shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <strong className="font-semibold text-[#1B3B36]">
                    <TypeText text="Google Maps Plus Code: " delay={420} />
                  </strong>
                  <TypeText text={CLINIC_INFO.plusCode} delay={460} />
                </span>
              </div>

              <div className="flex items-start gap-3">
                <HeartHandshake className="w-4 h-4 text-[#B85C38] shrink-0 mt-1" aria-hidden="true" />
                <span>
                  <TypeText text="LGBTQ+ friendly · Identifies as women-owned" delay={500} />
                </span>
              </div>
            </div>
          </div>

          <div className="mt-7">
            <a
              href={CLINIC_INFO.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2.5 rounded-full border border-[#CBBFAD] bg-[#FBF9F5] hover:bg-white hover:border-[#B85C38] text-[#1B3B36] font-semibold text-[13px] px-6 py-3.5 min-h-[48px] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B85C38]"
            >
              <MapPin className="w-4 h-4 shrink-0 text-[#B85C38]" aria-hidden="true" />
              <TypeText text="Get Directions" delay={540} />
            </a>
            <p className="text-[11px] text-center text-[#5A6560] mt-3">
              <TypeText text="Opens Jivantika Diagnostic Clinic in Google Maps." delay={600} />
            </p>
          </div>
        </article>
      </div>
    </RevealSection>
  );
};
