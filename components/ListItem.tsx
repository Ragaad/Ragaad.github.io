
import React from 'react';

interface ListItemProps {
  children: React.ReactNode;
}

export const ListItem: React.FC<ListItemProps> = ({ children }) => {
  return (
    <div className="flex items-start mb-2">
      <span className="text-red-700 mr-3 mt-1">•</span>
      <p className="text-sm">{children}</p>
    </div>
  );
};
