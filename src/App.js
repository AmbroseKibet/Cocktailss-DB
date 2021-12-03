import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

import Navbar from "./Cocktails/Navbar";
import Home from "./Cocktails/Home";
import About from "./Cocktails/About";
import Error from "./Cocktails/Error";
import Specific from "./Cocktails/Specific";
function App() {
  return (
    <div>
      <Router>
        <Navbar />

        <Routes children>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/:id" element={<Specific />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
