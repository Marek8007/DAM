import {useForm} from "react-hook-form";

export const FormsPage = () => {

    type FormInputs = {
        email: string,
        password: string;
    }


    const { handleSubmit } = useForm<FormInputs>({
        defaultValues: {
            email:"mml@gmai.com",
            password: "1234",
        }
    })

    const onSubmit = (myForm: FormInputs) => {
        console.log(myForm)
    }

    return (
        <>
            <h3>Forms Page</h3>

            <div className="flex flex-col space-y-2 w-[500px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="email" placeholder="Email"
                           className="border border-gray-300 p-2 rounded-xl"/>
                    <input type="password" placeholder="Password"
                           className="border border-gray-300 p-2 rounded-xl"/>
                    <input type="submit" placeholder="Sbmit"
                           className="bg-blue-500 text-white p-2 rounded-xl"/>
                </form>

            </div>
        </>
    )
}