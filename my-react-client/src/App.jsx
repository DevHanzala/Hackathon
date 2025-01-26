import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer'; // Import Footer
import Home from './pages/Home';
import AdminDashboard from './pages/AdminDashBoard';
import Reception from './pages/Reception';
import Department from './pages/Department';
import NotFound from './pages/NotFound';

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="flex flex-col min-h-screen">
        {/* Main Content */}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/reception" element={<Reception />} />
            <Route path="/department" element={<Department />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
};

export default App;
