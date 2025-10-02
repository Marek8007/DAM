import axios from "axios";
import type { ReqResUserListResponse } from "../interfaces/reqres.response";

export const loadUsersAction = async (page: number) => {

    try {
        
        const { data } = await axios.get<ReqResUserListResponse>("https://reqres.in/api/users", 
            {
                params: {page: page},
                headers: {"x-api-key": "reqres-free-v1"}
            });
            
            return data.data;

    } catch (e) {
        console.log(e);
        return [];
    }
}
