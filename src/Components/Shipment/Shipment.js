import { Container } from '@material-ui/core';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import './Shipment.css';

const Shipment = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const onSubmit = data => {
        console.log(data);
    }

    // console.log(watch("example"));

    return (
        <Container>
            <div className="form-container">
                <h4>Fill in the form please!</h4>
                <form onSubmit={handleSubmit(onSubmit)} className="ship-form">
                    <input defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder="Your name" />
                    {errors.name && <span className="error">Name is required</span>}

                    <input defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder="Your email" />
                    {errors.email && <span className="error">Email is required</span>}

                    <input defaultValue={loggedInUser.address} {...register("address", { required: true })} placeholder="Your address" />
                    {errors.address && <span className="error">Address is required</span>}

                    <input defaultValue={loggedInUser.phone} {...register("phone", { required: true })} placeholder="Your phone no" />
                    {errors.phone && <span className="error">Phone is required</span>}

                    <input type="submit" />
                </form>
            </div>
        </Container>
    );
};

export default Shipment;