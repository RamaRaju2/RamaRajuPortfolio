import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import "./index.css";
import MainRouter from "./Routes/MainRouter";

const App = () => (<>

<MainRouter />

</>);

export default App;
