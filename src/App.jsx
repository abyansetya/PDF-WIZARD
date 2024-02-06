import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./view/Home";
import Merge from "./view/Merge";
import Sign from "./view/Sign";
import Login from "./view/Login";
import Signup from "./view/Signup";
import Compress from "./view/Compress";
import Downloadpdf from "./components/merge/Downloadpdf";
import DownloadSign from "./components/sign/DownloadSign";
import Downloadcomp from "./components/compress/Downloadcomp";
import Error from "./view/Error";

function App() {
  return (
    <>
      {" "}
      <Router>
        <Navbar />

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Merge" element={<Merge />} />
          <Route exact path="/Sign" element={<Sign />} />
          <Route exact path="/Compress" element={<Compress />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="/error" element={<Error />} />

          {/* download page*/}
          <Route exact path="/Downloadpdf" element={<Downloadpdf />} />
          <Route exact path="sign_pdf" element={<DownloadSign />} />
          <Route exact path="compress_pdf" element={<Downloadcomp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
