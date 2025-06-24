import Expandable from './reusable/Expandable';
import { DiagramLanguage } from '../../../interfaces';

import FeedbackBox from '../FeedbackBox/FeedbackBox';

// this should be done via looping through an array of objects with the section's data, but I couldn't get it to work in time, so they are just hardcoded.
// The placement of the links within the body text was proving to be the issue. Maybe if it was concatenated? I'll have to revisit this.

const diagrams: DiagramLanguage[] = [
  {
    language: 'English',
    abbreviation: 'EN',
    text: 'English',
    href: '/pdf/General Plan Amendment Process.pdf',
  },
  {
    language: 'Spanish',
    abbreviation: 'SP',
    text: 'Spanish',
    href: '/pdf/GPA Process_sp_accessible.pdf',
  },
  {
    language: 'Traditional Chinese',
    abbreviation: 'ZH',
    text: 'Chinese - Traditional',
    href: '/pdf/GPA Process_tc_accessible.pdf',
  },
  {
    language: 'Simplified Chinese',
    abbreviation: 'ZH',
    text: 'Chinese - Simplified ',
    href: '/pdf/GPA Process_sc_accessible.pdf',
  },
];

const GeneralPlan = () => {
  return (
    <section tabIndex={0} className="mb-4 p-8">
      <h2 className="text-3xl yeseva font-bold text-burnt-orange">
        Los Angeles State Historic Park (LASHP) General Plan Amendment (GPA)
      </h2>
      <p className="font-medium pt-4">
      California State Parks is considering an amendment to the Los Angeles State Historic Park (LASHP) General Plan. 
      This proposed amendment would add a transit land use to the General Plan, allowing for consideration and review 
      of the proposed Los Angeles aerial rapid transit gondola project. 
      </p>
      <p className="font-medium pt-4">
      State Parks is now providing opportunities for the public to learn about
       the LASHP Draft General Plan Amendment options and provide feedback. 
      </p>

      <FeedbackBox />

      <p className="font-medium pt-4">
        {/* <span className="font-bold">
          This initial input period will be open until 11:59 pm Pacific Time on
          Sunday, December 15.
        </span> */}
        There will be additional opportunities to ask questions and share input
        at future public meetings, with the next sessions scheduled for early
        2025. Updates about public meetings will be shared on this webpage and
        via email and social media.
      </p>
      <Expandable props={diagrams} />
    </section>
  );
};

export default GeneralPlan;
