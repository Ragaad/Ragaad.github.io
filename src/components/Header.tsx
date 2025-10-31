import React from 'react';
import { ContactInfo } from '../types';

export const Header: React.FC<ContactInfo> = ({ name, title, phone, email, address }) => {
  return (
    <header className="flex flex-col sm:flex-row items-center mb-8 border-b pb-8">
      <img 
        src="/profile1.png" 
        alt="Dr. Ing Ragaad Altarawneh" 
        className="w-32 h-32 rounded-full mr-0 sm:mr-8 mb-4 sm:mb-0 object-cover border-4 border-gray-200 shadow-md"
      />
      <div className="text-center sm:text-left">
        <h1 className="text-4xl font-bold tracking-wider text-gray-800">{name}</h1>
        <h2 className="text-2xl text-red-700 font-normal tracking-widest mt-2 mb-4">{title}</h2>
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-x-4 gap-y-1 text-sm text-gray-600">
          <span>{phone}</span>
          <span className="hidden sm:inline text-gray-300">|</span>
          <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>
          <span className="hidden sm:inline text-gray-300">|</span>
          <span>{address}</span>
        </div>
      </div>
    </header>
  );
};
