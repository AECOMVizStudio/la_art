import Hero from "./children/Hero";
import Subtitle from "./children/Subtitle";
import Sidebar from "./children/Sidebar";



const MainContent = () => {
    return (
        <main>
            <Hero />

            <div className="flex flex-col md:flex-row justify-center mt-8">
                <div className="flex flex-col md:flex-col w-full md:w-2/4 mr-4">
                    <Subtitle />
                </div>
                <div className="flex flex-col w-full md:w-1/4 max-h-fit">
                    <Sidebar />
                </div>
            </div>

            
        </main>
    );
}

export default MainContent