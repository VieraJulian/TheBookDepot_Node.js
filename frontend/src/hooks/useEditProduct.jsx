import React, { useState } from "react";
import { productCreate } from "../services/productsCreate";
import Cookies from 'universal-cookie';

export function useEditProduct() {
    const [image, setImage] = useState(null);
    const [values, setValues] = useState({
        title: '',
        author: '',
        editorial: '',
        price: '',
        collection: '',
        numberPages: '',
        language: '',
        format: '',
        isbn: '',
        weight: '',
        edition: '',
        stock: '',
    })

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        setImage(file);
    };

    const handleChange = (event) => {
        const { target } = event
        const { name, value } = target

        const newValues = {
            ...values,
            [name]: value
        }

        setValues(newValues)
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData()

        formData.append('title', values.title)
        formData.append('author', values.author)
        formData.append('editorial', values.editorial)
        formData.append('price', values.price)
        formData.append('collection', values.collection)
        formData.append('numberPages', values.numberPages)
        formData.append('language', values.language)
        formData.append('format', values.format)
        formData.append('isbn', values.isbn)
        formData.append('weight', values.weight)
        formData.append('edition', values.edition)
        formData.append('stock', values.stock)
        formData.append('image', image)

        const cookies = new Cookies();
        const cookieGet = cookies.get('response')
        const token = cookieGet.token

        const result = await productCreate(formData, token)

        if (!Array.isArray(result)) {
            window.location.href = `/products/detail/${result.id}`
        }
    }

    return { handleImageChange, handleChange, handleOnSubmit, values }
}