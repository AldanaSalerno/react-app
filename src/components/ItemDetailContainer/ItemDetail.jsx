import React from 'react';

import { ItemCount } from './ItemCount'

export const ItemDetail = ({item}) => {
  
    
    return (
        <div className='Detail' key={item.id}>
            <p> Producto: {item.nombre}</p>
            <p> Descripcion: {item.descripcion}</p>
            <p>
                 <img className='imgDetail' src={item.img} alt={item.alt} />
            </p>
            <p>precio: ${item.precio}</p>
             <p> <ItemCount  stock ={10} initial={1} />
             
            </p>
           
        </div>
    )
}