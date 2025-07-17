import Expandable from './reusable/Expandable';
import { DiagramLanguage } from '../../../interfaces';

const About = () => {

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
  return (
    <section tabIndex={0} className="border-t border-gray-300 mb-8 p-8">
      <h2 className="text-3xl yeseva font-bold text-burnt-orange">
        About the GPA Process and Outreach
      </h2>

      <p className="font-medium pt-4">
        State Parks has determined that an amendment to the LASHP General Plan is needed to allow for public 
        transit to the LASHP and allow consideration and review of the proposed LA ART public transit use and facility
      </p>

      <p className="font-medium pt-4">
        State Parks will gather public input and work with the project sponsor for the LA ART project, LA Aerial Rapid
        Transit Technologies, LLC (LA ARTT LLC) to identify and address the
        potential issues and benefits of the project in order to consider a
        draft GPA. Once State Parks determines the GPA meets
        the required standards and conditions for consideration of action, the
        GPA would be scheduled for a State Park and Recreation Commission (SPRC)
        hearing.
      </p>
      <p className="font-medium pt-4">
        State Parks' GPA process involves a public outreach effort to gather
        input to help inform the Department's consideration of the LASHP GPA and
        the LA ART project. There will be multiple opportunities for the public to comment and provide input on the proposed action. 
        California State Parks will conduct several public meetings throughout the GPA process to
        provide information and receive comments and input.
      </p>
      <Expandable props={diagrams} />

      <p className="font-medium pt-4">
        Questions can be directed to State Parks via email at lastatehistoricparkgpa@parks.ca.gov or by mail at: 
      </p>
      <div className="font-normal pt-4 mx-4">
        <div className="py-2">
          <p className="font-bold">
            Strategic Planning and Recreation Services Division
          </p>
          <p>c/o LASHP GPA</p>
          <p>PO Box 942896 </p>
          <p>Sacramento, CA 94296-0001</p>
        </div>
      </div>
      
    </section>
  );
};

export default About;
