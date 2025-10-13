import type { User } from "../interfaces/reqres.response"

interface Props {
  user: User
}


export const UserRow = ({user}:Props) => {
  
  return (
    <tr>
        <td><img className="rounded-full w-20 p-2" src={user.avatar} alt="Avatar"/></td>
        <td>{user.first_name} {user.last_name}</td>
        <td>{user.email}</td>
    </tr>
  )
}
