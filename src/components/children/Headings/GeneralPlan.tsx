

import FeedbackBox from '../FeedbackBox/FeedbackBox';

// this should be done via looping through an array of objects with the section's data, but I couldn't get it to work in time, so they are just hardcoded.
// The placement of the links within the body text was proving to be the issue. Maybe if it was concatenated? I'll have to revisit this.



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


      
    </section>
  );
};

export default GeneralPlan;
