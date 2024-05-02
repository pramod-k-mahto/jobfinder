import { Routes, Route } from "react-router-dom";
import NavBar from "./pages/NavBar";

import ApplyForm from "./pages/ApplyForm";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Job from "./pages/Job";

import Login from "./pages/Login";
import SingUp from "./pages/SingUp";

import Profile from "./pages/Profile";
import PostJob from "./pages/PostJob";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/Job" Component={Job} />
        <Route path="/About" Component={About} />
        <Route path="/Contact" Component={Contact} />
        <Route path="/Login" Component={Login} />
        <Route path="/SingUp" Component={SingUp} />
        <Route path="/Profile" Component={Profile} />
        <Route path="/PostJob" Component={PostJob} />
        <Route path="/ApplyForm" Component={ApplyForm} />
        <Route path="/ApplyForm" Component={Footer} />

      </Routes>
    </>
  );
}

export default App;
