import React, { useState } from 'react';
import { HeartPulse } from 'lucide-react';

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  loading?: 'eager' | 'lazy';
  fetchPriority?: 'high' | 'low' | 'auto';
  fallbackLabel?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  className = '',
  loading = 'lazy',
  fetchPriority,
  fallbackLabel,
}) => {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#EFF3F0] via-[#F3EFE7] to-[#FBF9F5] text-[#1B3B36] p-6 text-center ${className}`}
      >
        <HeartPulse className="w-8 h-8 mb-2 opacity-75 text-[#B85C38]" strokeWidth={1.6} />
        <span className="text-xs font-medium tracking-wide text-[#1B3B36]/80">
          {fallbackLabel ?? alt}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading={loading}
      fetchPriority={fetchPriority}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
      className={className}
    />
  );
};
