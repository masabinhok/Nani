// Loader.tsx
import React from 'react';

const Loader: React.FC = () => {
  return (
    <div className="flex justify-center items-center ">
      {Array.from({ length: 4 }).map((_, index) => (
        <div
          key={index}
          className={`relative w-2 h-2 border-2 border-brand-pri rounded-full flex justify-center items-center mx-2 animate-circle-keys`}
          style={{ animationDelay: `${index * 0.1}s` }}
        >
          <div
            className="absolute w-2 h-2 bg-brand-pri rounded-full animate-dot-keys"
            style={{ animationDelay: `${index * 0.1}s` }}
          ></div>
          <div
            className="absolute w-2 h-2 rounded-full animate-outline-keys"
            style={{ animationDelay: `${index * 0.3}s` }}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Loader;
