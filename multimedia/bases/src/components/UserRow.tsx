import type { User } from "../interfaces/reqres.response"

interface Props {
  user: User
}


export const UserRow = ({user}:Props) => {
  
  return (
    <tr>
        <td>{user.year}</td>
        <td>{user.name} {user.color}</td>
        <td>{user.pantone_value}</td>
    </tr>
  )
}
