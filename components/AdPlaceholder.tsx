
import React from 'react';

interface AdPlaceholderProps {
  format?: 'rectangle' | 'leaderboard' | 'square';
  className?: string;
}

const AdPlaceholder: React.FC<AdPlaceholderProps> = ({ format = 'rectangle', className = '' }) => {
  const sizeClasses = {
    rectangle: 'h-64 w-full',
    leaderboard: 'h-32 w-full',
    square: 'h-64 w-64'
  };

  return (
    <div className={`bg-slate-100 border-2 border-dashed border-slate-200 flex flex-col items-center justify-center rounded-lg overflow-hidden relative ${sizeClasses[format]} ${className}`}>
      <span className="absolute top-2 left-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">Advertisement</span>
      <div className="text-center">
        <p className="text-slate-400 text-xs font-medium">Google AdSense Space</p>
        <p className="text-slate-300 text-[10px] mt-1">{format === 'leaderboard' ? '728 x 90' : '300 x 250'}</p>
      </div>
    </div>
  );
};

export default AdPlaceholder;
