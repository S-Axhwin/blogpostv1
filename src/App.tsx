import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Myblog from "./pages/Myblog";
import Home from "./pages/Home";
import { NavWrapper } from "./components/Navbar";
import NewBlog from "./pages/NewBlog";
import {Component} from "@/pages/Stats"
import SingleBlog from "./pages/SingleBlog";

const App = () => {
  return (
    <div className="h-screen overflow-y-hidden">
      <NavWrapper>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/myblogs" element={<Myblog/>}/>
          <Route path="/newblog" element={<NewBlog/>}/>
          <Route path="/blogs" element={<Blog/>}/>
          <Route path="/blog/:id" element={<SingleBlog/>}/>
          <Route path="/test" element={            
            <>
              <Component />
              <Component />
              <Component />
              <Component />
            </>
          }/>
        </Routes>
      </NavWrapper>
      </div>
    )
}

export default App
