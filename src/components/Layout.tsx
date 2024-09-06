import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import TopBanner from "./tools/TopBanner";
import Translator from "./tools/Translator";


const Layout = ()=> {
  return (
    <div className="mx-auto">
      <TopBanner />
      {/* <Translator /> */}
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Layout;