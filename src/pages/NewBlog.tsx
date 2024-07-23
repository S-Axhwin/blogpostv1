import baseUrl from "@/baseUrl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import axios from "axios"
import { useState } from "react"
import { SignInButton, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom"
import Markdown from "markdown-to-jsx"

const NewBlog = () => {

  const redirect = useNavigate();

  const { user } = useUser();

  if(!user) return <><SignInButton /></>;
  const [readme, setReadme] = useState(true);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("")

  const [disable, setDisable] = useState(false);

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    setDisable(true);
    const res = await axios.post(`${baseUrl}/blog`, {author: user?.fullName, title, content});
    console.log(res);
    redirect("/myblogs");
  }

  return (
    <div className="grid place-items-center h-screen w-full">
        <div className="flex w-[80%] gap-5 flex-col">
        <form onSubmit={handleSubmit} className="flex gap-5 flex-col">
            <Input
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter the blog title"
              className="text-2xl h-fit text-center" 
              disabled={disable}
              required
              />
            <Textarea
              onChange={(e) => setContent(e.target.value)}
              placeholder="Type your markdown here and save to draft."
              className="h-72"
              disabled={disable}
              required
              />
            <p className="text-sm text-muted-foreground">
                This Blog will be send to draft.
            </p>
            <div className=" place-self-end gap-4 flex">
            <Button  className="w-32 place-self-end" variant={"secondary"} onClick={() => setReadme(!readme)} type="button">Preview</Button>
            <Button disabled={disable} className="w-32 place-self-end" type="submit">Save To Draft</Button>
            </div>
        </form>
        {readme?
        <>
          <div className="prose dark:prose-invert
  prose-h1:font-bold prose-h1:text-xl
  prose-a:text-blue-600 prose-p:text-justify prose-img:rounded-xl
  prose-headings:underline">
          <Markdown>{content}</Markdown>
          </div>
        </>
        :""}
        </div>

    </div>
  )
}

export default NewBlog
