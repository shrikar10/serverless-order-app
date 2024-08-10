import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import Navbar from './components/Navbar';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
// import SignupPage from './pages/SignupPage';
// import OrderPage from './pages/OrderPage';
// import AnalyticsPage from './pages/AnalyticsPage';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUpPage />} />
        {/* <Route path="/order" element={<OrderPage />} /> */}
        {/* <Route path="/analytics" element={<AnalyticsPage />} /> */}
      </Routes>
    </div>
  );
}

export default App;
