import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Define the type for the gtag function
type GtagFunction = (
  command: 'config' | 'event' | 'set' | 'js',
  targetId: string,
  config?: Record<string, any>,
) => void;

// Extend the Window interface to include gtag
declare global {
  interface Window {
    gtag: GtagFunction;
  }
}

const usePageTracking = () => {
  const location = useLocation();

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', 'G-56F0JSRSKL', {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);
};

export default usePageTracking;
