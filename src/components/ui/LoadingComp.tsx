import { Skeleton } from "./skeleton"


const BlogSkelton = () => {
    return (
      <Skeleton className="h-24 w-full"></Skeleton>
    )
  }
export const LoadingComp = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5 pb-12">
        {[1,2,3,4,5,6,7,8,9,10].map((_, ind) => {
              return <BlogSkelton key={ind} />
            })}
        </div>
      )
}


