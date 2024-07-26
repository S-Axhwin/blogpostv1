import { Link } from "react-router-dom"

export const SingleCard = ({item}:any) => {
    return (
    <Link to={`/blog/${item?.id}`}>
    <div className="p-3 bg-muted rounded-md hover:shadow-lg text-black dark:text-white transition-all h-full">
      <div className="text-2xl font-bold">
        {item.title}
      </div>
      <div className="text-sm">
        <div className="flex justify-end ">
        -{item.author}<br/>
        </div>
        <div className="overflow-hidden truncate w-20">
        {item.content}
        </div>
      </div>
    </div>
    </Link>)
  } 