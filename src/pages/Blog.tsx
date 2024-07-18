import baseUrl from "@/baseUrl";
import { Skeleton } from "@/components/ui/skeleton";
import axios from "axios";
import { useEffect, useState } from "react";

const BlogSkelton = () => {
  return (
    <Skeleton className="h-11 w-full"></Skeleton>
  )
}

const SingleCard = ({item}:any) => {
  return (
  <div className="p-3 bg-muted rounded-md hover:shadow-lg text-black   dark:text-white transition-all ">
    <div className="text-2xl font-bold">
      {item.title}
    </div>
    <div className="text-sm">
      <div className="flex justify-end ">
      -{item.author}<br/>
      </div>
      <div className="overflow-hidden truncate w-20">
      {item.content}
      </div>
    </div>
  </div>)
} 


const Blog = () => {
    const [blogs, setBlogs] = useState([]);
    const [isloading, setIsloading] = useState(true);
  useEffect(() => {
    (async () => {
    
      const blog = await axios.get(`${baseUrl}/blog/all`);
      setBlogs(blog.data.blog)
      setIsloading(false);
    })()
  }, [])

  if(isloading) {
    return (
      <div className="flex gap-4 flex-col ">
      {[1,2,3,4].map((_, ind) => {
            return <BlogSkelton key={ind} />
          })}
      </div>
    )
  }
  
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 pb-12">
    {blogs.map((item:any, ind) => {
      return <SingleCard item={item} key={ind}/>
    })}
    
    </div>

}

export default Blog
