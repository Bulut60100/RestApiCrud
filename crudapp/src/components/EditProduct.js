import React from 'react';
import AppContainer from './AppContainer';

function EditProduct() {
  return (
    <AppContainer
    title="Ürün Güncelle"
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
            <button className='btn btn-success' type="button">Güncelle</button>
        </div>
        </form>
    </AppContainer>
  )
}

export default EditProduct