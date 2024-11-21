import MaterialsExpandable from "./reusable/MaterialsExpandable"
import VideosExpandable from "./reusable/VideosExpandable"
import { MeetingMaterials, VideoData } from "../../../interfaces"
// import Videos from "../../../pages/Videos"
import VideoModal from "./reusable/VideoModal"

const videoData: VideoData[] = [
  {
    title: "Virtual Public Meeting Recording",
    href: "https://www.youtube.com/watch?v=1K2z5w1dX7I",
    thumbnailImg: "/images/placeholder.jpg",
    language: "English",
  },
  {
    title: "Virtual Public Meeting Recording",
    href: "https://www.youtube.com/watch?v=1K2z5w1dX7I",
    thumbnailImg: "/images/placeholder.jpg",
    language: "English",
  },
  {
    title: "Virtual Public Meeting Recording",
    href: "https://www.youtube.com/watch?v=1K2z5w1dX7I",
    thumbnailImg: "/images/placeholder.jpg",
    language: "English",
  },
  {
    title: "Virtual Public Meeting Recording",
    href: "https://www.youtube.com/watch?v=1K2z5w1dX7I",
    thumbnailImg: "/images/placeholder.jpg",
    language: "English",
  },
  {
    title: "Virtual Public Meeting Recording",
    href: "https://www.youtube.com/watch?v=1K2z5w1dX7I",
    thumbnailImg: "/images/placeholder.jpg",
    language: "English",
  },
]
const inPersonPublicMeetingPresentationBoards: MeetingMaterials[] =[
  {
    key: 1,
    document: "In-Person Public Meeting Display Boards (PDF)",
    label: "English",
    ref: "/pdf/Boards/LASHP GPA_ Boards_English_Spanish.pdf",
  },
  {
    key: 2,
    document: "In-Person Public Meeting Display Boards (PDF)",
    label: "Spanish",
    ref: "/pdf/Boards/LASHP GPA_ Boards_English_Spanish.pdf",
  },
  {
    key: 3,
    document: "In-Person Public Meeting Display Boards (PDF)",
    label: "Chinese - Traditional",
    ref: "/pdf/Boards/LASHP GPA_Boards_Traditional Chinese_Simplified Chinese.pdf",
  },
  {
    key: 4,
    document: "In-Person Public Meeting Display Boards (PDF)",
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


const Meetings = () => {
    return (
        <section 
        tabIndex={0} 
        className="border-t border-gray-300 mb-8 p-8"
        >
          <VideoModal />
  
          <h2 className="text-3xl yeseva font-bold text-burnt-orange pb-4">
          Meetings and Materials
          </h2>
        
            <p className="font-medium pt-4">The LASHP GPA public outreach effort will begin in November 2024 and will extend into Spring 2025.</p>
            <div className="font-medium pt-4">If you wish to receive plan and meeting notifications, please sign up by clicking the button under “Sign up to receive LASHP General Plan Amendment information.” </div>
            <p className="font-medium pt-4">California State Parks hosted two initial public meetings in November 2024 to provide information on the LASHP GPA process and the LA ART project, and to collect input on ideas and suggestions to be considered during the GPA process. These two meetings covered the same content.</p>
            <p className="font-medium pt-4">Interpretation will be provided at the Public Meetings in Spanish, Cantonese, Mandarin, and Taishanese.  For ADA accommodations, please email <span className="text-blue-500 underline">planning@parks.ca.gov</span> at least 72 hours before either meeting.</p>

            
            <div className="bg-gradient-to-br from-[rgba(214,128,0,0.75)] to-[rgba(227,175,55,0.75)] border-2 border-gray-200 rounded-lg p-2 my-4 md:px-4">

                <span className="font-semibold py-4 text-lg">Previous Meetings:</span>
                <div className="font-normal">
                    <div className="font-semibold py-4 text-lg">In-Person Meeting: Los Angeles State Historic Park General Plan Amendment</div>
                        <div className="py-1">
                            Saturday, November 9, 2024, 10:00 AM - 12:00 PM
                            <br></br>
                            Fred Harvey Room at Los Angeles Union Station, 800 Alameda Street, Los Angeles, CA, 90012  
                        </div>
                </div>

                <div>
                    <div className="font-semibold pt-2 text-lg">Virtual Meeting: Los Angeles State Historic Park General Plan Amendment</div>
                    <p className="font-normal pt-4">Tuesday, November 12, 2024, 6:00 - 7:00 PM </p>
                </div>

            </div>
            <div className="font-medium pb-4">Recordings of the virtual meeting are available here:</div>
            <VideosExpandable props={videoData} />
          <div className="font-medium pb-4">Materials for the General Plan Amendment Public Meetings are available in English, Spanish, Chinese (Traditional), and Chinese (Simplified) below:</div>

          <MaterialsExpandable props={inPersonPublicMeetingPresentationBoards} />
          <MaterialsExpandable props={virtualPublicMeetingPresentation} />
          <div className="font-medium pb-4">Public Input Form (online link): <a href='https://www.surveymonkey.com/r/lastatehistoricparkgpa' target="_blank" className="text-blue-500 underline font-bold">Click here</a></div>
          <MaterialsExpandable props={publicInputForms} />
      
          </section>
          
    )
  }
  
  export default Meetings
