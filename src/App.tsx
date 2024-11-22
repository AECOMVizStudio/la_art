import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Layout from './components/Layout';
import Videos from './pages/Videos';

// GA4 tracking
import PageTracker from './usePageTracking';

function App() {
  return (
    <Router>
      <PageTracker />
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <Layout />
            </div>
          }
        />
        <Route path="/recordings" element={<Videos />} />
      </Routes>
    </Router>
  );
}

export default App;
