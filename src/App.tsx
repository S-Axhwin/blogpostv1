import { Route, Routes } from "react-router-dom";
import Blog from "./pages/Blog";
import Myblog from "./pages/Myblog";
import Home from "./pages/Home";
import { NavWrapper } from "./components/Navbar";
import NewBlog from "./pages/NewBlog";
import StactPage from "./pages/StactPage";

import SingleBlog from "./pages/SingleBlog";

const App = () => {
  return (
    <div className="overflow-hidden no-scrollbar b-[#000435]" >
      <NavWrapper className="no-scrollbar">
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/myblogs" element={<Myblog/>}/>
          <Route path="/newblog" element={<NewBlog/>}/>
          <Route path="/blogs" element={<Blog/>}/>
          <Route path="/blog/:id" element={<SingleBlog/>}/>

          <Route path="/test" element={<StactPage/>}/>
        </Routes>
      </NavWrapper>
      </div>
    )
}

export default App
