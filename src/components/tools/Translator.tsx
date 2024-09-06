import { useEffect } from 'react';

const Translator = () => {
  useEffect(() => {
    if (!document.querySelector('script[src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"]')) {
        const addScript = document.createElement('script');
        addScript.setAttribute('src', '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit');
        document.body.appendChild(addScript);
      }
    }, []);

  return(
    <div className="fixed bottom-4 right-4 z-50 max-w-fit bg-slate-100 border shadow">
        <div id="google_translate_element">
    </div>

    </div>) ;
};

export default Translator;