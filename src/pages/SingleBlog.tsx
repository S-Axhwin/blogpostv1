import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import baseUrl from "@/baseUrl";

const SingleBlog = () => {

  const params = useParams();
  const [author, setauthor] = useState();
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
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
        <ReactMarkdown  remarkPlugins={[remarkGfm]} >
          {content}
        </ReactMarkdown>
    </div>
  )
}

export default SingleBlog
