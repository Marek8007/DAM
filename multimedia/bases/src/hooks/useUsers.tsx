import {useEffect, useRef, useState} from "react"
import { loadUsersAction } from "../actions/load-users.action"
import type { User } from "../interfaces/reqres.response"

export const useUsers = () => {

    const [users, setUsers] = useState<User[]>([])


    useEffect(() => {
        loadUsersAction(currentPageRef.current)
        .then(setUsers)
    }, [])

    const currentPageRef = useRef(1)

    const nextPage = async () => {
        currentPageRef.current++;

        const users = await loadUsersAction(currentPageRef.current);

        if (users.length > 0) {
            setUsers(users)
        } else {
            currentPageRef.current--
        }
    }

    const previousPage = async () => {
console.log(currentPageRef.current)
        if (currentPageRef.current < 1) return;

        currentPageRef.current--;
        const users = await loadUsersAction(currentPageRef.current);
        setUsers(users)
    }

  return {
    users,
    nextPage,
    previousPage,
  }
}
