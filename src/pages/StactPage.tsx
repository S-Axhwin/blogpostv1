import Component  from "./Chart"
import { Stact1 } from "./Stact1"
import Comp from "./Stats2"
import Stack2 from "./Stact2"
import { useUser } from "@clerk/clerk-react"

const StactPage = () => {
  const { user, isLoaded } = useUser();
  if(!user) return "Login to see analytics"
  if(!isLoaded) return "loading"
  return (
      <div className="flex gap-3 flex-col">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3 no-scrollbar">
            <Component/>
            <Comp/>
            <Stack2/>
        </div>
        <Stact1 />
      </div>
  )
}

export default StactPage
