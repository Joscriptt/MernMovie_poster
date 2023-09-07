import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./routes/Home/home";
import Blog from "./routes/Blog/blog";
import About from "./routes/About/about";

import SingleMovie from "./routes/Blog/singleMovie";
// import CreateMovie from "./routes/Blog/createMovie";
import EditMovie from "./routes/Blog/editMovie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/movie/:slug" element={<SingleMovie />} />
          {/* <Route path="/createmovie" element={<CreateMovie />} /> */}
          <Route path="/editmovie/:slug" element={<EditMovie />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
