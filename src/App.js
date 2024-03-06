import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./views/AboutUs";
import Home from "./views/Home";
import NotFound from "./views/NotFound";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
