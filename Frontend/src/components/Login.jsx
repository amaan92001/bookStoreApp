import React from 'react'
import { Link } from 'react-router-dom'
import { useForm} from "react-hook-form"
import axios from 'axios'
import toast from 'react-hot-toast'

const Login = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm()

      const onSubmit=async(data) =>{
        const userInfo={
            email:data.email,
            password:data.password
            // esa deta hamne model me define kiya hai fullname,email,password
        }
        await axios.post("http://localhost:4001/user/login",userInfo).then((res)=>{
        console.log(res.data)
        if(res.data){
            toast.success("login Successfully")
            // document.getElementById("my_model_2").close()
        }
        window.location.reload()
        // to store data in local storage and data is comming in object formet or json so use it json.srringify because we want data in plain text {res.data.user} because we want only user it return massage, users
        localStorage.setItem("users",JSON.stringify(res.data.user))
        }).catch((err)=>{
            if(err.response){
                // to show response data from network -> response
                toast.error(err.response.data.massage)
            }
        })
      }

    return (
        <div >
            <dialog id="my_modal_2" className="modal">
                <div className="modal-box  dark:bg-slate-900 dark:text-white border">
                    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={()=>document.getElementById("my_model_2").close()}>✕</Link>

                        <h3 className="font-bold text-lg">Login</h3>
                        {/* email */}
                        <div className='mt-4 space-y-2'>
                            <span>Email</span><br />
                            <input type="email" placeholder='Enter Your Email' className='w-80 px-3 border rounded-md outline-none  dark:bg-slate-900 dark:text-white' {...register("email", { required: true })} />
                            <br />
                            {errors.email && <span className='text-sm text-red-600'>This field is required</span>}
                        </div>

                        {/* password */}
                        <div className='mt-4 space-y-2'>
                            <span>Password</span><br />
                            <input type="password" placeholder='Enter Your Password' className='w-80 px-3 border rounded-md outline-none  dark:bg-slate-900 dark:text-white'  {...register("password", { required: true })}/>
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
