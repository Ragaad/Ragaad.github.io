import React from 'react';
import { Header } from './components/Header';
import { Section } from './components/Section';
import { TimelineItem } from './components/TimelineItem';
import { PublicationItem } from './components/PublicationItem';
import { ListItem } from './components/ListItem';
import { Table } from './components/Table';
import { 
  contactInfo, 
  experience, 
  education, 
  honorsAndAwards,
  publications,
  conferenceActivities,
  supervisingData,
  teachingData,
  projectsData,
  certificationsData,
  memberships
} from './data';

const App: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <main className="max-w-4xl mx-auto p-4 sm:p-8 md:p-12 bg-white shadow-lg my-8">
        <Header {...contactInfo} />

        <Section title="Professional and Research Experience">
          {experience.map((item, index) => (
            <TimelineItem key={index} {...item} />
          ))}
        </Section>

        <Section title="Education">
          {education.map((item, index) => (
            <TimelineItem key={index} {...item} isEducation={true} />
          ))}
        </Section>
        
        <Section title="Honors & Awards">
          {honorsAndAwards.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </Section>

        <Section title="Publications">
          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-700">Journal Articles (Peer-reviewed & Referred)</h3>
          {publications.journal.map((item, index) => (
            <PublicationItem key={index} {...item} />
          ))}
          <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-700">Book Chapters (Peer-reviewed & Referred)</h3>
          {publications.bookChapters.map((item, index) => (
            <PublicationItem key={index} {...item} />
          ))}
          <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-700">Conference Articles (Peer-reviewed & Referred)</h3>
          {publications.conference.map((item, index) => (
            <PublicationItem key={index} {...item} />
          ))}
        </Section>

        <Section title="Conference Activities">
          <h3 className="text-lg font-semibold mt-4 mb-2 text-gray-700">Organizing Committee Member</h3>
          {conferenceActivities.organizing.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
          <h3 className="text-lg font-semibold mt-6 mb-2 text-gray-700">Reviewing Activities</h3>
          {conferenceActivities.reviewing.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </Section>

        <Section title="Supervising and Mentoring">
          <Table headers={['Year', 'Role', 'Student Name', 'Thesis Title', 'Institution']} data={supervisingData} />
        </Section>

        <Section title="Teaching Experience">
          <Table headers={['Course/Seminar', 'Dates', 'Role', 'Department/Institution', 'Location', 'Responsibilities']} data={teachingData} />
        </Section>
        
        <Section title="Research Projects Participation">
          <Table headers={['Project Name', 'Description', 'Organization(s) Involved', 'Dates']} data={projectsData} />
        </Section>
        
        <Section title="Certifications">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8">
                {certificationsData.map((item, index) => (
                    <div key={index} className="flex justify-between items-baseline py-1 border-b border-gray-200">
                        <p className="text-sm">{item.name}</p>
                        <p className="text-sm text-gray-500 whitespace-nowrap">{item.date}</p>
                    </div>
                ))}
            </div>
        </Section>

        <Section title="Professional Membership">
          {memberships.map((item, index) => (
            <div key={index} className="mb-2">
              <p className="font-bold text-sm">{item.organization}</p>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </Section>

      </main>
    </div>
  );
};

export default App;
