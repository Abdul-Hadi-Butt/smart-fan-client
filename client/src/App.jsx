import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";
import FanSpeed from "./pages/FanSpeed";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/check-fan-speed" element={<FanSpeed />} />
      </Routes>
    </Router>
  );
}

export default App;
