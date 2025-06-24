import Expandable from './reusable/Expandable';
import { DiagramLanguage } from '../../../interfaces';

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

const About = () => {
  return (
    <section tabIndex={0} className="border-t border-gray-300 mb-8 p-8">
      <h2 className="text-3xl yeseva font-bold text-burnt-orange">
        About the GPA Process and Outreach
      </h2>

      <p className="font-medium pt-4">
      State Parks determined that an LASHP General Plan amendment is needed to include 
      a transit land use in the General Plan to allow consideration and review of the proposed aerial rapid transit gondola project. 
      </p>

      <p className="font-medium pt-4">
        The LASHP GPA public outreach effort began in November 2024 when State Parks held two initial public meetings.
        State Parks developed General Plan Amendment options based on public feedback and input provided in Fall 2024. 
        The purpose of this round of public outreach is to present these General Plan Amendment options for public review and feedback.
      </p>
      <p className="font-medium pt-4">
        State Parks' General Plan Amendment process involves a public outreach effort to provide information and to gather 
        input for the State Park and Recreation Commission’s consideration of the LASHP General Plan Amendment. 
        California State Parks will conduct several public meetings throughout the GPA process to provide information and receive comment and input. 
      </p>

      <Expandable props={diagrams} />
    </section>
  );
};

export default About;
