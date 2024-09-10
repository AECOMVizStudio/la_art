import GeneralPlan from "./Headings/GeneralPlan"
// import Diagram from "./Headings/Diagram"
import About from "./Headings/About"
import Upcoming from "./Headings/Upcoming"
import Background from "./Headings/Background"
import FAQ from "./Headings/FAQ"


const Subtitle = () => {
    return (
        <div className="flex-col mx-2">
            <GeneralPlan />
            {/* <Diagram /> */}
            <About />
            <Upcoming />
            <Background />
            <FAQ />  
        </div>
  )
}

export default Subtitle