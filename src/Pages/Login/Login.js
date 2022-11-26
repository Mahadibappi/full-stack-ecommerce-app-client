import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';
import useToken from '../../Hooks/useToken';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [loginErron, setloginError] = useState('')
    const { signIn, googleLogin } = useContext(AuthContext)
    const [loginUserEmail, setloginUserEmail] = useState('')
    const [token] = useToken(loginUserEmail)

    const location = useLocation()
    const navigate = useNavigate()
    if (token) {
        navigate('/')
    }

    const from = location.state?.from?.pathname || '/';
    const provider = new GoogleAuthProvider();


    const handleGoogle = () => {
        return googleLogin(provider)
    }


    const handleLogin = (data) => {
        console.log(data)
        setloginError('')
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user
                console.log(user)
                setloginUserEmail(data.email)

            })
            .catch(err => {
                console.log(err.message)
                setloginError(err.message)
            })
    }

    return (
        <div className='h-[800px] flex justify-center items-center'>
            <div className='w-96 p-7' >
                <h2 className='text-3xl text-center'>Login</h2>
                <form onSubmit={handleSubmit(handleLogin)}>
                    <div className='form-control '>
                        <label className='label'> <span className='label-text'>Email</span></label>
                        <input {...register("email", { required: "Email address is required" })} className="input input-bordered " placeholder="email" />
                        {errors.email && <p className='text-red-500' role="alert">{errors.email?.message}</p>}
                    </div>
                    <div className='form-control '>
                        <label className='label'> <span className='label-text'>Password</span></label>
                        <input {...register("password",
                            {
                                required: "password is required",
                                minLength: { value: 6, message: 'password must be 6 characters' }
                            })}
                            className="input input-bordered " placeholder="password" />
                        {errors.password && <p className='text-red-500' role="alert">{errors.password?.message}</p>}
                        <p>Forget password?</p>
                        {/* error message */}
                        {loginErron && <p className='text-red-600'>{loginErron}</p>}
                    </div>

                    {/* <p>{data}</p> */}
                    <input className='bnt btn-secondary py-2 w-full  mt-5 rounded' type="submit" value="Login" />
                    <p>New to doctors portal? <Link className='text-teal-600' to='/signup'>Create an account</Link></p>
                    <div className="divider">OR</div>
                    <input onClick={handleGoogle} className='bnt btn-accent py-2 w-full  mt-5 rounded' type="submit" value="Continue With Google" />
                </form>
            </div>
        </div>
    );
};

export default Login;