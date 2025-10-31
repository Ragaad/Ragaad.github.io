
import React from 'react';
import { ContactInfo } from '../types';

export const Header: React.FC<ContactInfo> = ({ name, title, phone, email, address }) => {
  return (
    <header className="text-center mb-8">
      <h1 className="text-4xl font-bold tracking-wider text-gray-800">{name}</h1>
      <h2 className="text-2xl text-red-700 font-normal tracking-widest mt-2 mb-4">{title}</h2>
      <div className="flex justify-center items-center space-x-6 text-sm text-gray-600">
        <span>{phone}</span>
        <span className="text-gray-300">|</span>
        <a href={`mailto:${email}`} className="text-blue-600 hover:underline">{email}</a>
        <span className="text-gray-300">|</span>
        <span>{address}</span>
      </div>
    </header>
  );
};
