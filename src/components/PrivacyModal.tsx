import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { CLINIC_INFO } from '../data/clinicData';

interface PrivacyModalProps {
  open: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ open, onClose }) => {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="privacy-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#1B3B36]/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[560px] bg-[#FBF9F5] rounded-2xl border border-[#E6DFD3] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4">
          <div>
            <span className="block text-[9px] font-semibold tracking-[0.2em] uppercase text-[#B85C38]">
              CLINIC INFORMATION
            </span>
            <h2
              id="privacy-modal-title"
              className="font-display text-[24px] font-medium text-[#1B3B36] mt-1.5"
            >
              Privacy Policy
            </h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close privacy policy"
            className="w-9 h-9 rounded-full flex items-center justify-center text-[#5A6560] hover:bg-[#F3EFE7] hover:text-[#1B3B36] transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="mt-5 space-y-3.5 text-[13px] leading-[1.8] text-[#5A6560]">
          <p>
            This informational website for <strong className="text-[#1B3B36]">{CLINIC_INFO.doctorName}</strong> at{' '}
            <strong className="text-[#1B3B36]">{CLINIC_INFO.clinicName}</strong> does not collect, store, or process
            personal health information or medical records online.
          </p>
          <p>
            Appointment enquiries and consultation bookings are handled directly by telephone at{' '}
            <a href={CLINIC_INFO.phoneHref} className="text-[#B85C38] font-semibold underline">
              {CLINIC_INFO.phoneDisplay}
            </a>{' '}
            or in person at our Mukundapur, Kolkata clinic.
          </p>
          <p>
            Clicking external links such as Google Maps directions will open third-party map services governed by their
            respective privacy policies.
          </p>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="rounded-full bg-[#B85C38] hover:bg-[#984728] text-white font-semibold text-[12.5px] px-6 py-2.5 min-h-[42px] transition-colors cursor-pointer"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
