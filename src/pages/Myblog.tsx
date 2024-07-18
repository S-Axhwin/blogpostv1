import baseUrl from "@/baseUrl";
import { AlertDialogDemo } from "@/components/PublishCard";
import { Skeleton } from "@/components/ui/skeleton";
import { useUser, SignInButton } from "@clerk/clerk-react"
import axios from "axios";
import { useEffect, useState } from "react";

const BlogSkelton = () => {
  return (
    <Skeleton className="h-11 w-[40rem]"></Skeleton>
  )
}


const AleartBoxDraft = ({item, setTrigger}:any) => {
  return (
    <AlertDialogDemo id={item.id} setTrigger={setTrigger}>
      <div className="flex bg-slate-900 hover:bg-slate-800 transition-colors p-4 rounded-md mx-10 justify-center">
          {item.title}
      </div>
    </AlertDialogDemo>
  )
}

const PublishedCard =  ({item}:any) => {
  return (
    <div className="flex bg-green-950 hover:bg-green-900 transition-colors p-4 rounded-md mx-10 justify-center">
      {item.title}
    </div>
  )
}

const LoadingTemp = () => {
  return (
  <div className="flex justify-center overflow-hidden">
        <div className="flex flex-col gap-y-28 lg:flex-row justify-center">
          <div className="flex flex-col gap-4 justify-center">
          <p className="text-sm text-muted-foreground text-center">
                Published
          </p>
          {[1,2,3,4].map((_, ind):any => {
            return <BlogSkelton key={ind}/>
          })}
          </div>
          <div className="flex flex-col gap-4 
          justify-center lg:justify-start">
            <p className="text-sm text-muted-foreground text-center">
                Drafts
            </p>
            {[1,2,3,4].map((_, ind) => {
            return <BlogSkelton key={ind} />
          })}
          </div>
        
        </div>
      </div>)
}

const Myblog = () => {
  const { user } = useUser();
  
  const [loading, setLoading] = useState(true);
  const [notpubblogs, setNotpubblogs] = useState([]);
  const [pubblogs, setPubblogs] = useState([]);

  const [trigger, setTrigger] = useState(true);
  useEffect(() => {
    (async () => {
      if(user){
      const blog = await axios.get(`${baseUrl}/blog?username=${user.fullName}`)
      setPubblogs(blog.data.post.filter((item:any) => {
       //console.log(item.author == user?.firstName);
        return (item.published );
      }));
      setNotpubblogs(blog.data.post.filter((item:any) => {
        return(!item.published);
      }));

      setLoading(false);
      }
    })()
  }, [trigger]);

  
  if(!user) return <SignInButton></SignInButton>
  if(loading){
    return (
      <LoadingTemp/>
    )
  } else {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col gap-y-28 lg:flex-row lg:w-[80%] justify-center">
          <div className="flex flex-col gap-4 justify-center">
          <p className="text-sm text-muted-foreground text-center">
                Published
            </p>
            {pubblogs.length == 0?<div className="text-sm text-muted-foreground text-center">No blog is published</div>: ""}
          {pubblogs.map((item:any, ind:any) => {
              return (<PublishedCard item={item} key={ind}/>)
            })}
          </div>
          <div className="flex flex-col gap-4 
          justify-center lg:justify-start">
            <p className="text-sm text-muted-foreground text-center">
                Drafts
            </p>
            {notpubblogs.map((item:any, ind:any) =>
             {
              return (<AleartBoxDraft key={ind} item={item} setTrigger={setTrigger}/>)
            })}
            {notpubblogs.length == 0?<div className="text-sm text-muted-foreground text-center">No blog in draft</div>: ""}
          </div>
        
        </div>
      </div>
    )
  }
}

export default Myblog
