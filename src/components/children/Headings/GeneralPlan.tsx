import Diagram from "./Diagram"


// this should be done via looping through an array of objects with the section's data, but I couldn't get it to work in time, so they are just hardcoded.
// The placement of the links within the body text was proving to be the issue. Maybe if it was concatenated? I'll have to revisit this.

const GeneralPlan = () => {
  return (
    
        <section 
            tabIndex={0} 
            
            className="mb-8 p-8"
        >

        <h2 className="text-3xl yeseva font-bold text-burnt-orange">
        Los Angeles State Historic Park (LASHP) General Plan Amendment (GPA) Process        
        </h2>

        <p className="font-medium pt-4">
        California State Parks is initiating a GPA process for LASHP to review and consider direct transit access via the proposed Los Angeles Aerial Rapid Transit (LA ART) aerial gondola project.  If you wish to be involved and provide input, please sign up <a 
            href='https://docs.google.com/forms/d/1dku_08vhyPRPaIfBE1B6JNZXp-qnZNz2UwVhYjKqgbk/viewform?edit_requested=true'
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
            >
            here.
            </a>
                
          </p>

          <Diagram />
    
        </section>
        
  )
}

export default GeneralPlan