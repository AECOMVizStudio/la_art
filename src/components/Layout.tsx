import Translator from "./tools/Translator";
import TopBanner from "./tools/TopBanner";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";




const Layout = ()=> {
  return (
    <div className="mx-auto">
      
      <Translator />
      <TopBanner />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Layout;