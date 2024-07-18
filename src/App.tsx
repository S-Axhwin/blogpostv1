import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Myblog from "./pages/Myblog";
import Home from "./pages/Home";
import { NavWrapper } from "./components/Navbar";
import NewBlog from "./pages/NewBlog";
import {Component} from "@/pages/Stats"

const App = () => {
  return (
    <div className="">
      <NavWrapper>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/myblogs" element={<Myblog/>}/>
          <Route path="/newblog" element={<NewBlog/>}/>
          <Route path="/blog" element={<Blog/>}/>
          <Route path="/test" element={<Component/>}/>
        </Routes>
      </NavWrapper>
      </div>
    )
}

export default App
