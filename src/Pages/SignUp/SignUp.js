import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';

const SignUp = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { createUser, updateUser, googleLogin } = useContext(AuthContext)
    const [signupError, setSignupError] = useState('')
    const [createdEmail, setCreatedEmail] = useState('')
    const [token] = useToken(createdEmail)

    const navigate = useNavigate()
    if (token) {
        navigate('/')
    }

    const provider = new GoogleAuthProvider();

    const handleGoogle = () => {
        return googleLogin(provider)
    }

    const handleLogin = (data) => {
        setSignupError("")
        createUser(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user);
                toast.success('User Created Successfully')
                const userInfo = {
                    displayName: data.name
                }
                updateUser(userInfo)
                    .then(() => {
                        saveUser(data.name, data.email)
                        // navigate('/')
                    })
                    .catch(err => console.log(err))

            })
            .catch(err => {
                console.log(err.message)
                setSignupError(err.message)

            })
    }
    // create user for to send database 
    const saveUser = (name, email) => {
        const user = { name, email };
        fetch('https://product-server-ashen.vercel.app/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {

                setCreatedEmail(email)
            })

    };


    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7' >
                <h2 className='text-3xl text-center'>Sign Up</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <label className='label'> <span className='label-text'>Select Account</span></label>
                    <select className="select select-bordered w-full max-w-xs">
                        <option selected>User</option>
                        <option>Admin</option>
                        <option>Seller</option>
                    </select>
                    <div className='form-control '>
                        <label className='label'> <span className='label-text'>Name</span></label>
                        <input {...register("name", { required: "Name is required" })} className="input input-bordered " placeholder="Name" />
                        {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
                    </div>
                    <div className='form-control '>
                        <label className='label'> <span className='label-text'>Email</span></label>
                        <input {...register("email", { required: "Email address is required" })} className="input input-bordered " placeholder="email" />
                        {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                    </div>

                    {/* password */}
                    <div className='form-control '>
                        <label className='label'> <span className='label-text'>Password</span></label>
                        <input {...register("password",
                            {
                                required: "password is required",
                                minLength: { value: 6, message: 'password must be 6 characters' },
                                pattern: { value: /(?=.*[A-Z])(?=.*[0-9])(?=.*[@!#+-])/, message: "password must be strong" }

                            })}
                            className="input input-bordered " placeholder="password" />
                        {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                        <p>Forget password?</p>
                    </div>
                    {signupError && <p className=' text-red-600'>{signupError}</p>}
                    <input className='bnt btn-secondary py-2 w-full  mt-5 rounded' type="submit" value="Sign Up" />
                    <p>Already have an account? <Link className='text-teal-600' to='/login'>Login</Link></p>
                    <div className="divider">OR</div>
                    <input onClick={handleGoogle} className='bnt btn-accent py-2 w-full  mt-5 rounded' type="submit" value="SignUp With Google" />
                </form>
            </div>
        </div>
    );
};

export default SignUp;