import baseUrl from "@/baseUrl";
import axios from "axios";
import { useEffect, useState } from "react";

const useBlog = () => {
    const [blogs, setBlogs] = useState([]);
    const [isloading, setIsloading] = useState(true);
    
    useEffect(() => {
    (async () => {
      const blog = await axios.get(`${baseUrl}/blog/all`);
      setBlogs(blog.data.blog)
      setIsloading(false);
    })()
    }, [])

    return {blogs, isloading}
}

export default useBlog
