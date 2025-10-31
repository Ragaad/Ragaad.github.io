
import React from 'react';
import { Publication } from '../types';

export const PublicationItem: React.FC<Publication> = ({ id, content }) => {
  const highlightName = (text: string) => {
    return text.replace(/Ragaad AlTarawneh/g, '<strong class="font-bold">Ragaad AlTarawneh</strong>');
  };

  return (
    <div className="flex items-start mb-3">
      <span className="text-sm font-mono text-gray-500 w-10 flex-shrink-0">[{id}]</span>
      <p className="text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: highlightName(content) }}></p>
    </div>
  );
};
