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
        <main className="py-8">
            <Hero />
            <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8">
                <Subtitle />
            </div>
            <div className="col-span-4">
                <Sidebar relatedPages={relatedPages}/>
            </div>
            </div>
            <Connections followLinks={followLinks}/>
        </main>
    );
}

export default MainContent