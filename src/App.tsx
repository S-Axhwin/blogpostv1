import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Myblog from "./pages/Myblog";
import Home from "./pages/Home";
import { NavWrapper } from "./components/Navbar";
import NewBlog from "./pages/NewBlog";
import {Component} from "@/pages/Stats"
import SingleBlog from "./pages/SingleBlog";
import { ComponentPi } from "./pages/PiChart";

const App = () => {
  return (
    <div className="overflow-hidden no-scrollbar">
      <NavWrapper className="no-scrollbar">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/myblogs" element={<Myblog/>}/>
          <Route path="/newblog" element={<NewBlog/>}/>
          <Route path="/blogs" element={<Blog/>}/>
          <Route path="/blog/:id" element={<SingleBlog/>}/>
          <Route path="/test" element={            
            <>
            <div className="grid place-items-stretch grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 no-scrollbar">
              <ComponentPi />
              <Component />
              <Component />
            </div>
            </>
          }/>
        </Routes>
      </NavWrapper>
      </div>
    )
}

export default App
