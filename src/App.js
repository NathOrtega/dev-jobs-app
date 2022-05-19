import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import DesignSystem from "./pages/DesignSystem";
import { ThemeProvider } from "./contexts/ThemeContext";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:offerId" element={<Detail />} />
          <Route path="/design-system" element={<DesignSystem />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

//const [ isModalOpen, setIsModalOpen ] = React.useState(false)