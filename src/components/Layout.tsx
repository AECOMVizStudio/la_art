import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";
import Translator from "./children/Translator";

const Layout = ()=> {
  return (
    <div className="container mx-auto">
      <Header />
      <MainContent />
      <Translator />
      <Footer />
    </div>
  );
}

export default Layout;