import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Scan from "./pages/Scan";
import AuthPage from "./pages/AuthPage"
import Community from "./pages/Community";
import Notification from "./pages/Notification"

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-100">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/scan" element={<Scan />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/notifications" element={<Notification />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
