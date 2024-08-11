import React from 'react'
import { Link } from 'react-router-dom'
import { useForm} from "react-hook-form"

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()
      const onSubmit=(data) => console.log(data)

    return (
        <div>
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        {/* email */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span><br />
                            <input type="email" placeholder='Enter Your Email' className='w-80 px-3 border rounded-md outline-none' {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
                        </div>

                        {/* password */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span><br />
                            <input type="password" placeholder='Enter Your Password' className='w-80 px-3 border rounded-md outline-none'  {...register("password", { required: true })}/>
                            <br />
                            {errors.password && <span className='text-sm text-red-600'>This field is required</span>}
                        </div>

                        {/* button */}
                        <div className='mt-4 space-y-2 flex justify-around'>
                            <button className='bg-pink-500 px-3 py-1 text-white hover:bg-pink-700 rounded-md'>Login</button>
                            <span>Not register? <Link className='text-blue-500 cursor-pointer underline' to="/signup">Signup</Link></span>
                        </div>

                    </form>

                </div>
            </dialog>
        </div>
    )
}

export default Login
