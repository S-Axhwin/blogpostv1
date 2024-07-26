import { AleartBoxDraft, PublishedCard } from "@/components/MyblogComp";
import { LoadingComp } from "@/components/ui/LoadingComp";
import useMyblog from "@/hooks/useMyblog";
import { SignInButton } from "@clerk/clerk-react";




const Myblog = () => {
  const {user, loadingpage, pubblogs, notpubblogs, setTrigger, } = useMyblog();
  
  if(loadingpage) return <LoadingComp/>;

  if(!user) return <SignInButton></SignInButton>;

  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-y-28 lg:flex-row lg:w-[80%] justify-center z-10">
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
            return (<AleartBoxDraft key={ind} item={item} setTrigger={setTrigger}  />)
          })}
          {notpubblogs.length == 0?<div className="text-sm text-muted-foreground text-center">No blog in draft</div>: ""}
        </div>
      
      </div>
    </div>
  )
}

export default Myblog
