import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from "./Pages/Home";
import Blog from "./Pages/Blogs";
import AboutUs from "./Pages/AboutUs";
import BlogDetails from "./Pages/BlogDetails";
import { Routes, Route, Outlet } from "react-router-dom";
import PageNotFound from "./Pages/PageNotFound"

function MainLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <>
      <div dir="rtl">
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/blog/:slug" element={<BlogDetails />} />
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </div>
    </>
  )
}
