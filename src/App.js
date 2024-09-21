// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainLayout from './layouts/mainlayouts';
import About from './pages/about';
import Destination from './pages/destination';
import Hotel from './pages/hotel';
import Blog from './pages/blog';
import Contact from './pages/contact';
import Home from './pages/home';
import Login from './pages/login';
import '../src/assets/scss/App.scss';
import BlogDetail from './pages/blog-detail';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="destination" element={<Destination />} />
        <Route path="tour/:id" element={<Destination />} />
        <Route path="hotel/:id" element={<Hotel />} />
        <Route path="hotels" element={<Hotel />} />
        <Route path="blogs" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="blog/:id" element={<BlogDetail />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
