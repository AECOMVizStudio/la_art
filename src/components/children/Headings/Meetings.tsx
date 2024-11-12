import MaterialsExpandable from "./reusable/MaterialsExpandable"
import { MeetingMaterials } from "../../../interfaces"

const inPersonPublicMeetingPresentationBoards: MeetingMaterials[] =[
  {
    key: 1,
    document: "In-Person Public Meeting Presentation Boards (PDF)",
    label: "English",
    ref: "/pdf/Boards/LASHP GPA_ Boards_English_Spanish.pdf",
  },
  {
    key: 2,
    document: "In-Person Public Meeting Presentation Boards (PDF)",
    label: "Spanish",
    ref: "/pdf/Boards/LASHP GPA_ Boards_English_Spanish.pdf",
  },
  {
    key: 3,
    document: "In-Person Public Meeting Presentation Boards (PDF)",
    label: "Chinese - Traditional",
    ref: "/pdf/Boards/LASHP GPA_Boards_Traditional Chinese_Simplified Chinese.pdf",
  },
  {
    key: 4,
    document: "In-Person Public Meeting Presentation Boards (PDF)",
    label: "Chinese - Simplified",
    ref: "/pdf/Boards/LASHP GPA_Boards_Traditional Chinese_Simplified Chinese.pdf",
  },
]
const virtualPublicMeetingPresentation: MeetingMaterials[] =[
  {
    key: 1,
    document: "Virtual Public Meeting Presentation (PDF)",
    label: "English",
    ref: "/pdf/VPMP/LASHP GPA_Presentation_English.pdf",
  },
  {
    key: 2,
    document: "Virtual Public Meeting Presentation (PDF)",
    label: "Spanish",
    ref: "/pdf/VPMP/LASHP GPA_Presentation_Spanish.pdf",
  },
  {
    key: 3,
    document: "Virtual Public Meeting Presentation (PDF)",
    label: "Chinese - Traditional",
    ref: "/pdf/VPMP/LASHP GPA_Presentation_Traditional Chinese.pdf",
  },
  {
    key: 4,
    document: "Virtual Public Meeting Presentation (PDF)",
    label: "Chinese - Simplified",
    ref: "/pdf/VPMP/LASHP GPA_Presentation_Simplified Chinese.pdf",
  },
]
const publicInputForms: MeetingMaterials[] =[
  {
    key: 1,
    document: "Public Input Form (PDF)",
    label: "English",
    ref: "/pdf/Forms/LASHP GPA_Input Form_English.pdf",
  },
  {
    key: 2,
    document: "Public Input Form (PDF)",
    label: "Spanish",
    ref: "/pdf/Forms/LASHP GPA_Input Form_Spanish.pdf",
  },
  {
    key: 3,
    document: "Public Input Form (PDF)",
    label: "Chinese - Traditional",
    ref: "/pdf/Forms/LASHP GPA_Input Form_Traditional Chinese.pdf",
  },
  {
    key: 4,
    document: "Public Input Form (PDF)",
    label: "Chinese - Simplified",
    ref: "/pdf/Forms/LASHP GPA_Input Form_Simplified Chinese.pdf",
  },
]


const Upcoming = () => {
    return (
        <section 
        tabIndex={0} 
        className="border-t border-gray-300 mb-8 p-8"
    >
  
          <h2 className="text-3xl yeseva font-bold text-burnt-orange pb-4">
          Meetings and Materials
          </h2>
        
            <p className="font-medium pt-4">The LASHP GPA public outreach effort will begin in November 2024 and will extend into Spring 2025.</p>
            <div className="font-medium pt-4">If you wish to receive plan and meeting notifications, please sign up by clicking the button under “Sign up to receive LASHP General Plan Amendment information.” </div>
            <p className="font-medium pt-4">California State Parks will be hosting two initial public meetings to provide information on the LASHP GPA process and the LA ART project, and to collect input on ideas and suggestions to be considered during the GPA process. These two meetings will cover the same content. In addition, an online form will be available to provide input following the meetings.</p>
            <p className="font-medium pt-4">Interpretation will be provided at the Public Meetings in Spanish, Cantonese, Mandarin, and Taishanese.  For ADA accommodations, please email <span className="text-blue-500 underline">planning@parks.ca.gov</span> at least 72 hours before either meeting.</p>
            <p className="font-medium py-4">Materials for the General Plan Amendment Public Meetings are available in English, Spanish, Chinese (Traditional), and Chinese (Simplified) below:</p>
          
          <MaterialsExpandable props={inPersonPublicMeetingPresentationBoards} />
          <MaterialsExpandable props={virtualPublicMeetingPresentation} />
          <MaterialsExpandable props={publicInputForms} />
      
          </section>
          
    )
  }
  
  export default Upcoming
