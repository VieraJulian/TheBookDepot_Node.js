import React, { useEffect, useState } from "react";
import { editProduct } from "../services/productsEdit";
import Cookies from 'universal-cookie';

export function useEditProduct(productS) {
    const [image, setImage] = useState(null)
    const [values, setValues] = useState(null)

    useEffect(() => {
        if (productS) {
            setValues({
                title: productS.title,
                author: productS.author,
                editorial: productS.editorial,
                price: productS.price,
                collection: productS.collection,
                numberPages: productS.numberPages,
                language: productS.language,
                format: productS.format,
                isbn: productS.isbn,
                weight: productS.weight,
                edition: productS.edition,
                stock: productS.stock,
            });
        }
    }, [productS]);

    const handleValueChange = (event) => {
        const { target } = event
        const { name, value } = target

        const newValues = {
            ...values,
            [name]: value
        }

        setValues(newValues)
    }

    const handleImageChange = (event) => {
        const file = event.target.files[0]
        setImage(file)
    }

    const handleOnSubmit = async (event) => {
        event.preventDefault()

        const formData = new FormData()

        formData.append('id', productS && productS.id)
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

        const result = await editProduct(formData, token)

        if (result === 'Product edited') {
            window.location.href = '/admin'
        }
    }

    return { handleImageChange, handleValueChange, handleOnSubmit, values, image }
}