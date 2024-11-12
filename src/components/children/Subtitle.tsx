import GeneralPlan from "./Headings/GeneralPlan"
// import Diagram from "./Headings/Diagram"
import About from "./Headings/About"
import Meetings from "./Headings/Meetings"
import Background from "./Headings/Background"
import FAQ from "./Headings/FAQ"


const Subtitle = () => {
    return (
        <div className="flex-col">
            <GeneralPlan />
            <About />
            <Meetings />
            <Background />
            <FAQ />  
        </div>
  )
}

export default Subtitle