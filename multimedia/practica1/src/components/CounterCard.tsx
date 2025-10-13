import {useCounter} from "../hooks/useCounter.ts";

export const CounterCard = () => {


    const {count} = useCounter();


  return (
    <h3 className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700">
        {count}
    </h3>
    <h3 className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700">
        {count}
    </h3>
    <h3 className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700">
        {count}
    </h3>
    <h3 className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700">
        {count}
    </h3>
    <h3 className="p-2 bg-blue-500 rounded-xl w-10 mx-2 text-white hover:bg-blue-700">
        {count}
    </h3>
  )
}
