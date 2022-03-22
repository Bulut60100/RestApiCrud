import React from 'react';
import { Link } from 'react-router-dom';
import AppContainer from './AppContainer';

function Home() {
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
                            <tr>
                                <td>1</td>
                                <td>asd</td>
                                <td>asd</td>
                                <td>asd</td>
                                <td>
                                    <Link to='/edit/1' className='btn btn-primary'>Ürün Güncelle</Link>
                                    <a href='/add' className='btn btn-danger'>Sil</a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
        </AppContainer>
    )
}

export default Home;