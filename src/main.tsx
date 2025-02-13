import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";

import HomePage from "./Pages/HomePage";
import ResourcePage from "./Pages/ResourcePage";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/resource" element={<ResourcePage />} />
          <Route path="*" element={<p className="text-3xl">Error </p>} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
