import React from 'react';
import AppContainer from './AppContainer';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

const endpoint = 'http://localhost:8000/api/product/'

const EditProduct = () => {

    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()
    const { id } = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {description: description, price: price, stock: stock})
        navigate('/')
    }

    useEffect( () => {
        const getProductById = async () => {
            const response = await axios.get(`${endpoint}${id}`)
            setDescription(response.data.description)
            setPrice(response.data.price)
            setStock(response.data.stock)
        }
        getProductById()
    }, [])

    return (
        <AppContainer
            title="Ürün Güncelle"
        >
            <form onSubmit={update}>
                <div className='form-group'>
                    <label>Ürün</label>
                    <input value={description} onChange={(e) => setDescription(e.target.value)} className='form-control' type="text" />
                </div>
                <div className='form-group'>
                    <label>Fiyat</label>
                    <input value={price} onChange={(e) => setPrice(e.target.value)} className='form-control' type="text" />
                </div>
                <div className='form-group'>
                    <label>Stok</label>
                    <input value={stock} onChange={(e) => setStock(e.target.value)} className='form-control' type="text" />
                </div>
                <div className='form-group'>
                    <button className='btn btn-success' type="submit">Güncelle</button>
                </div>
            </form>
        </AppContainer>
    )
}

export default EditProduct