import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import TopBanner from "./tools/TopBanner";



const Layout = ()=> {
  return (
    <div className="mx-auto">
      <TopBanner />
   
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default Layout;