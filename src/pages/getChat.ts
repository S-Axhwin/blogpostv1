import baseUrl from "@/baseUrl"
import { useUser } from "@clerk/clerk-react";
import axios from "axios"


let useData = async() => {
    const { user } = useUser();
    const data = await axios.get(`${baseUrl}/stats?username=${user?.fullName}`)
    console.log(data.data.blogs);
    return data.data.blogs
    
}


export default useData