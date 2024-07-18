import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import baseUrl from "@/baseUrl";
import Markdown from "markdown-to-jsx";


const SingleBlog = () => {

  const params = useParams();
  const [author, setauthor] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState("");
  useEffect(() => {
    (async() => {
        const res = await axios.get(`${baseUrl}/single/blog?id=${params.id}`);

        const {post} = res.data
        setauthor(post.author);
        setTitle(post.title);
        setContent(post.content);
    })()
  }, [])
  return (
    <div className="grid place-items-center">
        <div className="flex flex-col justify-between m-10 text-purple-700">
            <h1 className="font-bold text-5xl text-balance">{title}</h1>
            <h1 className="text-xl text-right dark:text-white text-black"> -{author}</h1>
        </div>
        <div>
        <div className={`prose prose-h1:text-4xl prose-h1:dark:text-white prose-p:dark:text-white prose-p:text-black prose-strong:text-white prose-ul:list-decimal prose-a:text-blue-500 prose-ul:dark:text-white text-slate-500 prose-h2:dark:text-slate-200`}>

        <Markdown>
          {content}
        </Markdown>
        </div>
        </div>
    </div>
  )
}

export default SingleBlog
