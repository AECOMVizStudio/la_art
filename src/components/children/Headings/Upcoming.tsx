


const Upcoming = () => {
    return (
        <section 
        tabIndex={0} 
        className="border-t border-gray-300 mb-8 p-8"
    >
  
          <h2 className="text-3xl yeseva font-bold text-burnt-orange">
          Upcoming Meetings       
          </h2>

          <p className="font-medium pt-4">The LASHP GPA public outreach effort is scheduled to begin in Fall 2024 and will extend into Spring 2025.</p>
          <p className="font-medium py-4">California State Parks will be hosting two initial public meetings to provide information on the LASHP GPA process and the LA ART project, and to collect input on ideas and suggestions to be considered during the GPA process. These two meetings will cover the same content.</p>

            <div className="bg-gradient-to-br from-[rgba(214,128,0,0.75)] to-[rgba(227,175,55,0.75)] border-2 border-gray-200 rounded-lg p-2 md:px-4">
                

                <div>
                    <h4 className="font-semibold pt-4 text-lg">Virtual Meeting: Los Angeles State Historic Park General Plan Amendment</h4>
                    <p className="font-normal pt-4">Thursday, November 7, 2024, 6:00 - 7:00 PM </p>
                    <div className="font-normal pt-4 mx-4 overflow-x-hidden w-[80%]">
                        <a className="text-blue-500 underline font-extrabold" href='https://us06web.zoom.us/j/84925758637' target="_blank" rel="noopener noreferrer">https://us06web.zoom.us/j/84925758637</a>
                        <div className="py-2">
                            <p>Or join by telephone:</p>
                            <p>(669) 900-6833 US</p>
                            <p>(888) 475-4499 US Toll Free</p>
                        </div>
                        <p>Webinar ID: 849 2575 8637</p>
                    </div>
                </div>

                <div className="font-normal">
                    <h5 className="font-semibold py-4 text-lg">In-Person Meeting: Los Angeles State Historic Park General Plan Amendment</h5>
                        <div className="py-1">
                            Saturday, November 9, 2024, 10:00 AM - 12:00 PM 
                            Fred Harvey at Los Angeles Union Station, 800 Alameda Street, CA, 90012  
                        </div>
                        <div className="py-1">Parking validation will be available.</div>
                        <div className="py-1">For ADA accommodations, please call (XXX) XXX-XXXX at least 72 hours before the meeting. </div>
                        <div className="py-1">Materials for the GPA Public Meetings will be available on Thursday, October 17 on this website. Translated materials will be available in Spanish, Chinese (Simplified), and Chinese (Traditional). </div>
                        <div className="py-1">Interpretation will be provided at the Public Meetings in Spanish, Cantonese, Mandarin, and Taishanese.</div>
                        <div className="py-1">If you wish to receive plan and meeting notifications, please sign up by clicking the button under “Sign up to receive LASHP General Plan Amendment information."</div>
                </div>

                {/* <img src="/CalStateParkLogo.png" alt="" className="absolute opacity-15" id="upcomingWatermark"></img> */}

            </div>
      
          </section>
          
    )
  }
  
  export default Upcoming