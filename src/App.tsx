import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Myblog from "./pages/Myblog";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import NewBlog from "./pages/NewBlog";
import {Component} from "@/pages/Stats"
const App = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/newblog" element={<NewBlog/>}/>
        <Route path="/myblogs" element={<Myblog/>}/>
        <Route path="/stats" element={
          <div className="w-[30rem]">
          <Component/>
          </div>
        }/>
      </Routes>
    </>
  )
}

export default App
