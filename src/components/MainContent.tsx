import Hero from "./children/Hero";
import Subtitle from "./children/Subtitle";
import Sidebar from "./children/Sidebar";
import Connections from "./children/Connections";



const followLinks ={
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
    youtube: "https://www.youtube.com",
    instagram: "https://www.instagram.com",
    wordpress: "https://www.parks.ca.gov/Programs",
}


const MainContent = () => {
    return (
        <main>
            <Hero />

            <div className="flex flex-col md:flex-row justify-center mt-8">
                <div className="flex flex-col md:flex-col w-full md:w-2/4 mr-4">
                    <Subtitle />
                </div>
                <div className="flex flex-col w-full md:w-1/4">
                    <Sidebar />
                </div>
            </div>

            <Connections followLinks={followLinks}/>
        </main>
    );
}

export default MainContent