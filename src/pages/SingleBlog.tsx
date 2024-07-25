import axios from "axios";
import { useEffect, useState } from "react";
import baseUrl from "@/baseUrl";
import Markdown from "markdown-to-jsx";
import { useParams } from "react-router-dom";


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
    <div className="h-screen w-screen lg:w-full overflow-y-scroll flex lg:justify-center no-scrollbar">
      <div className="p-3">
      <div className="flex justify-between">
      <h1 className="text-5xl font-bold uppercase text-primary">
        {title}
      </h1>
      <p>{author}</p>
      </div>
      <div className="prose dark:prose-invert
  prose-h1:font-bold prose-h1:text-xl
  prose-a:text-blue-600 prose-p:text-justify prose-img:rounded-xl
  prose-headings:underline">
    <div className="w-fit mx-10">
      <Markdown>
        {content}
      </Markdown>
    </div>
      </div>
      </div>
    </div>
  )
}

export default SingleBlog


/*
 <div className={`prose prose-h1:text-4xl prose-h1:dark:text-white prose-p:dark:text-white prose-p:text-black prose-strong:text-white prose-ul:list-decimal prose-a:text-blue-500 prose-ul:dark:text-white text-˝slate-500 prose-h2:dark:text-slate-200`}>
        <Markdown>
          {content}
        </Markdown>
        </div>

*/