import { useEffect, useState } from "react"
import { loadUsersAction } from "../actions/load-users.action"
import type { User } from "../interfaces/reqres.response"

let page: number = 1


const nextPage = () => {
        page = page+1
    console.log(page)
    
        
    }

export const useUsers = () => {

    const [users, setUsers] = useState<User[]>([])


    useEffect(() => {
        loadUsersAction(page)
        .then(setUsers)
    }, [])

  return {
    users,
    nextPage
  }
}
