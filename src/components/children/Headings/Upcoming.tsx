const Upcoming = () => {
    return (
      
          <section 
              tabIndex={0} 
              
              className="bg-slate-100 border-2 border-slate-200 rounded mb-8 p-8"
          >
  
          <h2 className="text-3xl font-bold underline text-burnt-orange">
          Upcoming Meetings       
          </h2>

          <p className="font-medium pt-4">The LASHP GPA public outreach effort is scheduled to begin in October 2024 and will extend into Spring 2025.</p>
  
            <p className="font-medium pt-4">
                Please sign up <a 
              href='https://docs.google.com/forms/d/1dku_08vhyPRPaIfBE1B6JNZXp-qnZNz2UwVhYjKqgbk/viewform?edit_requested=true'
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 underline"
              >
                here</a> for plan and meeting notifications.</p>
      
          </section>
          
    )
  }
  
  export default Upcoming