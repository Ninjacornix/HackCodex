import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import LandingPage from '../views/landing/LandingPage';

const LandingRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </Router>
  );
};

export default LandingRouter;