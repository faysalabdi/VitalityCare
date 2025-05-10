import React from 'react';

const NDISBadge: React.FC = () => {
  return (
    <div className="inline-block">
      <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#6a2f84]">
        <div className="text-center">
          <span className="text-white font-bold text-xl leading-none">I</span>
          <div className="w-6 h-5 mx-auto">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                fill="#7ac142" />
            </svg>
          </div>
          <span className="text-white font-bold text-base leading-none">ndis</span>
        </div>
      </div>
    </div>
  );
};

export default NDISBadge;