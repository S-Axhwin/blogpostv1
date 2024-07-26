import { LoadingComp } from "@/components/ui/LoadingComp"
import { SingleCard } from "@/components/SingleCard"
import useBlog from "@/hooks/useBlog";


const Blog = () => {
  const {isloading, blogs} = useBlog();

  if(isloading) return <LoadingComp/>
  
  return (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 pb-12">
    {blogs.map((item:any, ind) => (<SingleCard item={item} key={ind}/>))}
  </div>)

}

export default Blog
