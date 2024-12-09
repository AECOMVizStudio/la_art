import Expandable from './reusable/Expandable';
import { DiagramLanguage } from '../../../interfaces';

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
        Process
      </h2>
      <p className="font-medium pt-4">
        California State Parks is initiating a GPA process for LASHP to review
        and consider direct transit access via the proposed Los Angeles Aerial
        Rapid Transit (LA ART) aerial gondola project. If you wish to be
        involved and provide input, please join our email list by clicking the
        button under “Sign up to receive LASHP General Plan Amendment
        information.”
      </p>
      <p className="font-medium pt-4">
        To provide written input using the online input form,{' '}
        <a
          href="https://www.surveymonkey.com/r/lastatehistoricparkgpa"
          target="_blank"
          className="text-blue-500 underline font-bold"
        >
          click here
        </a>
        . You may also email State Parks at{' '}
        <span className="font-bold">lastatehistoricparkgpa@parks.ca.gov</span>{' '}
        or mail your feedback to:
      </p>
      <div className="font-normal pt-4 mx-4">
        <div className="py-2">
          <p className="font-bold">
            Strategic Planning and Recreation Services Division
          </p>
          <p>c/o LASHP GPA</p>
          <p>PO Box 942896 Sacramento CA 94296-0001</p>
        </div>
      </div>
      <p className="font-medium pt-4">
        <span className="font-bold">
          This initial input period will be open until 11:59 pm Pacific Time on
          Sunday, December 15.
        </span>
        There will be additional opportunities to ask questions and share your
        thoughts at future public meetings.
      </p>
      <Expandable props={diagrams} />
    </section>
  );
};

export default GeneralPlan;
