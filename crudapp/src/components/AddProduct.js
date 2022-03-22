import React from 'react';
import AppContainer from './AppContainer';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';

const endpoint = 'http://localhost:8000/api/product'

const AddProduct = () => {

    const [description, setDescription] = useState('')
    const [price, setPrice] = useState(0)
    const [stock, setStock] = useState(0)
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {description: description, price: price, stock: stock})
        navigate('/')
    }

  return (
    <AppContainer
    title="Ürün Ekle"
    >
        <form onSubmit={store}>
        <div className='mb-3'>
            <label className='form-label'>Ürün Adı</label>
            <input value={description} onChange={(e) => setDescription(e.target.value)} className='form-control' type="text" />
        </div>
        <div className='mb-3'>
            <label className='form-label'>Fiyat</label>
            <input value={price} onChange={(e) => setPrice(e.target.value)} className='form-control' type="text" />
        </div>
        <div className='mb-3'>
            <label className='form-label'>Stok</label>
            <input value={stock} onChange={(e) => setStock(e.target.value)} className='form-control' type="text" />
        </div>
        <div className='mb-3'>
            <button className='btn btn-success' type="submit">Ekle</button>
        </div>
        </form>
    </AppContainer>
  )
}

export default AddProduct