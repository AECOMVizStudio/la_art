import Translator from './tools/Translator';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="mx-auto">
      <Translator />
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
};

export default Layout;
