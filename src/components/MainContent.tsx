import Hero from "./children/Hero";
import Subtitle from "./children/Subtitle";
import Sidebar from "./children/Sidebar";
import Connections from "./children/Connections";

const relatedPages = [
    "Page 1",
    "Page 2",
    "Page 3",
    "Page 4",
    "Page 5",
  ];

const followLinks ={
    facebook: "https://www.facebook.com",
    twitter: "https://www.twitter.com",
    instagram: "https://www.instagram.com",
    mailer: "https://www.mailer.com",
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
                    <Sidebar relatedPages={relatedPages} />
                </div>
            </div>

            <Connections followLinks={followLinks}/>
        </main>
    );
}

export default MainContent