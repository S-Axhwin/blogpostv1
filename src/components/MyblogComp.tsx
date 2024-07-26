import { useState } from "react";
import { AlertDialogDemo } from "./PublishCard";
import { Loader2 } from "lucide-react";

export const AleartBoxDraft = ({item, setTrigger}:any) => {
    
    const [loading, setLoading] = useState(false);

    return (
      <AlertDialogDemo id={item.id} setTrigger={setTrigger} setLoading={setLoading}>
        <div className="flex bg-primary-foreground hover:text-primary transition-colors p-4 rounded-md mx-10 justify-center dark:text-violet-900">
            {item.title}
            {loading?<Loader2 className=" animate-spin"/>:""}
        </div>
      </AlertDialogDemo>
    )
}
  
export const PublishedCard =  ({item}:any) => {
  return (
    <div className="flex bg-green-100 text-black hover:bg-green-200 transition-colors p-4 rounded-md mx-10 justify-center">
      {item.title}
      
    </div>
  )
}
  