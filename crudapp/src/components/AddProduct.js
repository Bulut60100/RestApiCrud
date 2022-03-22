import React from 'react';
import AppContainer from './AppContainer';

function AddProduct() {
  return (
    <AppContainer
    title="Ürün Ekle"
    >
        <form>
        <div className='form-group'>
            <label>Ürün</label>
            <input className='form-control' type="text" />
        </div>
        <div className='form-group'>
            <label>Fiyat</label>
            <input className='form-control' type="text" />
        </div>
        <div className='form-group'>
            <label>Stok</label>
            <input className='form-control' type="text" />
        </div>
        <div className='form-group'>
            <button className='btn btn-success' type="button">Ekle</button>
        </div>
        </form>
    </AppContainer>
  )
}

export default AddProduct