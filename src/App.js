import "./App.css";
import NavBar from "./components/Nav/NavBar";
import Home from "./components/Home/Home";
import JoinRoom from "./components/JoinRoom/JoinRoom";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:roomid" element={<JoinRoom />} />
        </Routes>
          <Footer />
      </div>
    </Router>
  );
}

export default App;
