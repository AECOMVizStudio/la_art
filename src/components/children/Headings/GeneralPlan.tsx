import FeedbackBox from '../FeedbackBox/FeedbackBox';

import MeetingsBox from '../MeetingsBox/MeetingsBox';


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

      <div className='pt-8'>
        <h2 className='text-xl font-bold yeseva underline'>Upcoming Meetings and Materials</h2>
        <MeetingsBox />
      </div>


      
    </section>
  );
};

export default GeneralPlan;
