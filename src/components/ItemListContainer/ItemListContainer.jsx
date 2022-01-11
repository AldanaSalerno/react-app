 import React,{useState, useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import { collection,getFirestore, getDocs, query, where} from 'firebase/firestore'
import { useParams } from 'react-router-dom'


export const ItemListContainer = ({greeting}) => {
    const [productos, setProductos] = useState([])
     const [loading, setLoading] = useState(true)
    const { idCate } = useParams()


    useEffect(() => {
        const db = getFirestore()
        if (idCate) {
            const queryCollectionCate = query(collection(db, 'productos'), where('category', '==', idCate))
                getDocs(queryCollectionCate)
                .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) )))
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        } else {
            const queryCollection = query(collection(db, 'productos'))
                getDocs(queryCollection)
                .then(resp => setProductos(resp.docs.map(prod => ({ id: prod.id, ...prod.data() }) )))
                .catch(error => console.log(error))
                .finally(() => setLoading(false))
        }
    }, [idCate]);


    return (
        <div>
        { greeting }
            { loading ? 
                <h2>Cargando...</h2> 
                :  
               <ItemList productos={productos} />
            }
            
            
        </div>
    )
}