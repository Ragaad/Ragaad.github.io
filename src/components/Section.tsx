import React from 'react';

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ title, children }) => {
  return (
    <section className="mb-8">
      <h2 className="text-xl font-bold text-red-700 tracking-widest border-b-2 border-gray-800 pb-2 mb-4">{title}</h2>
      {children}
    </section>
  );
};
