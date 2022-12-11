import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";

import Buy from "./pages/buy/buy";
import Help from "./pages/help/help";
import Home from "./pages/home/home";
import Person from "./pages/person/person";
import Project from "./pages/project/project";

const App = () => {
  return (
    <Router>
      <div className="page">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/help" element={<Help />} />
          <Route path="/project" element={<Project />} />
          <Route path="/person" element={<Person />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};

export default App;
