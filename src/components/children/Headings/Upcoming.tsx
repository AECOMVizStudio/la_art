const Upcoming = () => {
    return (
      
        <section 
        tabIndex={0} 
        className="border-t border-gray-300 mb-8 p-8"
    >
  
          <h2 className="text-3xl yeseva font-bold text-burnt-orange">
          Upcoming Meetings       
          </h2>

          <p className="font-medium pt-4">The LASHP GPA public outreach effort is scheduled to begin in October 2024 and will extend into Spring 2025.</p>
          <p className="font-medium pt-4">California State Parks will be hosting two initial public meetings to provide information on the LASHP GPA process and the LA ART project, and to collect input on ideas and suggestions to be considered during the GPA process. These two meetings will cover the same content. </p>
  
          {/* Virtual Meeting Link*/}
          <h3 className="font-semibold pt-4"> Virtual Meeting: Los Angeles State Historic Park General Plan Amendment </h3>
          <p className="font-normal pt-4">Thursday, October 17, 2024, 6:00 - 7:00 PM</p>

            <div className="ml-6 font-normal flex flex-col space-y-2 py-2">
              
              <a 
                href='https://us06web.zoom.us/j/84925758637'
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
                >https://us06web.zoom.us/j/84925758637</a>

              <p>Or join by telephone: <br></br>
                (669) 900-6833 US <br></br>
                (888) 475-4499 US Toll Free 
              </p>
              <p>Webinar ID: 849 2575 8637</p>
             
            </div>

          {/* In-Person Meeting Link*/}
          <div>
            <h3 className="font-semibold pt-4">
              In-Person Meeting: Los Angeles State Historic Park General Plan Amendment
            </h3>
            <p className="font-normal pt-4">
              Saturday, October 19, 2024, 10:00 AM - 12:00 PM <br></br>
              Fred Harvey at Los Angeles Union Station, 800 Alameda Street, CA, 90012
            </p>
            <p className="font-normal pt-4">
              Parking validation will be available.
            </p>
            <p className="font-normal pt-4">
              For ADA accommodations, please call (XXX) XXX-XXXX at least 72 hours before the meeting.
            </p>
            <p className="font-normal pt-4">
              Materials for the GPA Public Meetings will be available on Thursday, October 17 on this website. Translated materials will be available in Spanish, Chinese (Simplified), and Chinese (Traditional). 
            </p>
            <p className="font-normal pt-4">
              Interpretation will be provided at the Public Meetings in Spanish, Cantonese, Mandarin, and Taishanese. <br></br>
            </p>
            <p className="font-normal pt-4">
              If you wish to receive plan and meeting notifications, please sign up by selecting your preferred language on the right-hand side of the page under “Sign up to receive LASHP General Plan Amendment information.” 
            </p>
          </div>
      
          </section>
          
    )
  }
  
  export default Upcoming