import baseUrl from "@/baseUrl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import axios from "axios"
import { useState } from "react"
import { SignInButton, useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom"

const NewBlog = () => {

  const redirect = useNavigate();

  const { user } = useUser();

  if(!user) return <><SignInButton /></>;

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
              className="text-2xl h-fit text-center" />
            <Textarea
              onChange={(e) => setContent(e.target.value)}
              placeholder="Type your message here."
              className="h-72" />
            <p className="text-sm text-muted-foreground">
                This Blog will be send to draft.
            </p>
            <Button disabled={disable} className="w-32 place-self-end" type="submit">Save To Draft</Button>
        </form>
        </div>
    </div>
  )
}

export default NewBlog
