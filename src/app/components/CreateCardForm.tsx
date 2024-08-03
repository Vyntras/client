"use client";

import { Card } from "@/types/Card";
import { FC, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import axios from 'axios'
import { API } from "../../../env.config";


const CreateCardForm: FC = () => {

    // const [input, setInput] = useState()

    const { register, handleSubmit } = useForm<Omit<Card, 'createdAt' | 'id'>>()

    const onSubmit: SubmitHandler<Omit<Card, 'createdAt' | 'id'>> = async (data) => {
        // console.log(data)
        try {
            const response = await axios.post(`/api/cards`, data);
            console.log('Server Response:', response.data);
        } catch (error) {
            console.error('There was an error!', error);
        }

    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Card Name</label>
            <input {...register('name')} />
            <label>Card Description</label>
            <input {...register('description')} />
            <label>Price</label>
            <input {...register('price')} />
            <button type='submit'>Create</button>
        </form>
    )
}

export default CreateCardForm