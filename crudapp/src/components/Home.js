import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './AppContainer';
import axios from 'axios';

const endpoint = 'http://localhost:8000/api'

const Home = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        getAllProducts()
    }, [])

    const getAllProducts = async () => {
        const response = await axios.get(`${endpoint}/products`)
        setProducts(response.data)
    }

    const deleteProduct = async (id) => {
        await axios.delete(`${endpoint}/product/${id}`)
        getAllProducts()
    }

    return (
        <AppContainer
            title="Laravel 9 - React"
        >
            <Link to='/add' className='btn btn-primary'>Ürün Ekle</Link>
            <div className='table-responsive'>
                <table className='table table-striped mt-4'>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>Ürün</th>
                            <th>Fiyat</th>
                            <th>Stok</th>
                            <th>İşlem</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr key={product.id}>
                                <td>{product.id}</td>
                                <td>{product.description}</td>
                                <td>{product.price}</td>
                                <td>{product.stock}</td>
                                <td>
                                    <Link to={`/edit/${product.id}`} className='btn btn-primary'>Ürün Güncelle</Link>
                                    <button onClick={ () => deleteProduct(product.id) } className='btn btn-danger'>Sil</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </AppContainer>
    )
}

export default Home;