
import React from 'react';
import { Experience, Education } from '../types';

type TimelineItemProps = (Experience | Education) & { isEducation?: boolean };

export const TimelineItem: React.FC<TimelineItemProps> = (props) => {
  const { date, role, company, location, description, degree, thesis, note } = props as any;
  const isEducation = 'degree' in props;

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
      <div className="md:col-span-1">
        <p className="text-sm font-medium text-gray-600">{date}</p>
      </div>
      <div className="md:col-span-3">
        <h3 className="text-lg font-bold">{isEducation ? degree : role}</h3>
        <p className="font-semibold text-gray-700">{company}</p>
        <p className="text-sm text-gray-500 mb-2">{location}</p>
        {description && <p className="text-sm text-gray-600 whitespace-pre-line">{description}</p>}
        {thesis && (
          <p className="text-sm text-gray-600 mt-1 italic">
            <span className="font-semibold">Thesis Title:</span> "{thesis}"
          </p>
        )}
        {note && <p className="text-sm text-gray-500 mt-1">{note}</p>}
      </div>
    </div>
  );
};
