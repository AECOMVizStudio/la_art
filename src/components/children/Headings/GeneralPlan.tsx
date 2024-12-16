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
        Input that was provided by December 15, 2024, will be considered as
        State Parks develops draft GPA options. However, State Parks continues
        to welcome additional feedback and input throughout the GPA process. An
        online input form is available
        <a
          href="https://www.surveymonkey.com/r/lastatehistoricparkgpa"
          target="_blank"
          className="text-blue-500 underline font-bold"
        >
          {' '}
          here
        </a>
        . Questions can also be directed to State Parks via email at
        lastatehistoricparkgpa@parks.ca.gov or by mail at:
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
