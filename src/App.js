import React from "react";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import Home from "./Page/Home";
import Blog from "./Page/Blog";
import Photos from "./Page/Photos";
import Project from "./Page/Project";
import About from "./Page/About";
import Contact from "./Page/Contact";
import ErrorPage from "./Page/Error";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/photos" element={<Photos />} />
                <Route path="/project" element={<Project />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;