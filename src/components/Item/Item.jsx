import React from 'react';

import {Link} from 'react-router-dom'

function Item({prod}) {
    return (
        <div 
            key={prod.id}
            className='col-md-4'
        >                        
            <div className="card w-100 mt-5" >
                <div className="card-header">
                    {`${prod.nombre} - ${prod.categoria}`}
                </div>
                <div className="card-body">
                    <img src={prod.imgagenID} alt='' className='w-50' />
                    {prod.precio}                                                            
                </div>
                <div className="card-footer">  
                <Link to={`/detalle/${prod.id}`}>
                    <button className="btn btn-outline-primary btn-block">
                        detalle del producto
                    </button>
                </Link>                                                      
                                                                                
                </div>
            </div>
        </div>
    )
}

export default Item