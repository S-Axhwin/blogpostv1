import baseUrl from "@/baseUrl";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import { useEffect, useState } from "react";

const useMyblog = () => {
    const { user } = useUser();
  
  const [notpubblogs, setNotpubblogs] = useState([]);
  const [pubblogs, setPubblogs] = useState([]);
  const [loadingpage, setLoadingPage] = useState(true);
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

      setLoadingPage(false);
      }
    })()
  }, [trigger]);

  return {notpubblogs, pubblogs, loadingpage, trigger, setTrigger, user}
}

export default useMyblog
