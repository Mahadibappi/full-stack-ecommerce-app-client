
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import Spinner from '../Shared/Spinner';

const NewProduct = () => {
    const { loading } = useContext(AuthContext)
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const imageHostKey = process.env.REACT_APP_imagebb_apikey;

    const handleProduct = (data) => {

        const image = data.img[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?&key=${imageHostKey}`


        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imageData => {
                console.log(imageData);
                if (imageData.success) {

                    const product = {
                        name: data.name,
                        price: data.price,
                        condition: data.condition,
                        location: data.location,
                        category: data.category,
                        description: data.description,
                        use: data.years,
                        number: data.number,
                        image: imageData.data.url
                    }
                    console.log(product)
                    // save products  to database 
                    fetch('https://product-server-ashen.vercel.app/seller', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(product)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name}added successfully`)
                            navigate('/dashboard/myproducts')
                        })

                }
            })


        if (loading) {
            return <Spinner></Spinner>
        }

    }
    return (
        <div className='w-full p-7'>
            <h3 className='text-3xl font-bold'>add a Product here</h3>

            <form className='grid md:grid-cols-2 gap-3' onSubmit={handleSubmit(handleProduct)}>

                <div className='form-control '>
                    <label className='label'> <span className='label-text'>Product Name</span></label>
                    <input {...register("name", { required: "Name is required" })} className="input input-bordered " placeholder="Name" />
                    {errors.name && <p className='text-red-500' role="alert">{errors.name?.message}</p>}
                </div>

                <div className='form-control '>
                    <label className='label'> <span className='label-text'>Price</span></label>
                    <input type="number" {...register("price", { required: "Price is required" })} className="input input-bordered " placeholder="Price" />
                    {errors.price && <p className='text-red-500' role="alert">{errors.price?.message}</p>}
                </div>

                <div className='form-control '>
                    <label className='label'> <span className='label-text'>Condition</span></label>
                    <input  {...register("condition", { required: "condition is required" })} className="input input-bordered " placeholder="Condition" />
                    {errors.condition && <p className='text-red-500' role="alert">{errors.condition?.message}</p>}
                </div>
                <div className='form-control '>
                    <label className='label'> <span className='label-text'>location</span></label>
                    <input  {...register("location", { required: "location is required" })} className="input input-bordered " placeholder="location" />
                    {errors.location && <p className='text-red-500' role="alert">{errors.location?.message}</p>}
                </div>
                <div className='form-control '>
                    <label className='label'> <span className='label-text'>years of use</span></label>
                    <input type='number' {...register("years", { required: "years is required" })} className="input input-bordered " placeholder="years" />
                    {errors.years && <p className='text-red-500' role="alert">{errors.years?.message}</p>}
                </div>
                <div className='form-control '>
                    <label className='label'> <span className='label-text'>Phone Number</span></label>
                    <input type='number'  {...register("number", { required: "number is required" })} className="input input-bordered " placeholder="number" />
                    {errors.number && <p className='text-red-500' role="alert">{errors.number?.message}</p>}
                </div>
                <div className='form-control '>
                    <label className='label'> <span className='label-text'>Description</span></label>
                    <input  {...register("description", { required: "description is required" })} className="input input-bordered " placeholder="description" />
                    {errors.description && <p className='text-red-500' role="alert">{errors.description?.message}</p>}
                </div>

                <div className='form-control '>
                    <label className='label'> <span className='label-text'>Category</span></label>
                    <div className="form-control w-full max-w-xs">
                        <select  {...register('category')} className="select select-bordered">
                            <option disabled selected > Select Category</option>
                            <option>Laptop</option>
                            <option>Electric</option>
                            <option>Sports</option>
                            <option>Furniture</option>
                        </select>

                    </div>
                    <div className='form-control '>
                        <label className='label'> <span className='label-text'>Photo</span></label>
                        <input type='file' {...register("img", { required: "Name is required" })} className="input input-bordered " placeholder="Photo" />
                        {errors.img && <p className='text-red-500' role="alert">{errors.img?.message}</p>}
                    </div>

                </div>
                <input className='bnt btn-secondary py-2 w-full  mt-5 rounded' type="submit" value="Submit" />
            </form>

        </div>
    );
};

export default NewProduct;