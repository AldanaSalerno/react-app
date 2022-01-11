import {  addDoc, collection,getFirestore, Timestamp, writeBatch,query, where, documentId, getDocs } from "firebase/firestore"
import { useState } from "react"
import { useCartContext } from "../../context/CartContext"



function Cart() {
    const [idOrder, setIdOrder] = useState('')
    const [dataForm, setDataForm] = useState({
        name:"", email:"", phone:""
    })
    const {  cartList, borrarCarrito, precioTotal  } = useCartContext()


    const handleChange = (e) => {
        setDataForm({
            ...dataForm,
            [e.target.name]: e.target.value
        })
    }
    console.log(dataForm)
    const generarOrden = (e) =>{
        e.preventDefault()  
        
        
        // Nuevo objeto de orders    
        let order = {}
        order.date = Timestamp.fromDate(new Date())

        order.buyer = dataForm
        order.total = precioTotal();

        order.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.name;
            const precio = cartItem.precio * cartItem.cantidad;
            
            return {id, nombre, precio}   
        })

        // Generar la orden 
        const db = getFirestore()
        const orderCollection = collection(db, 'orders')
        addDoc(orderCollection, order)
        .then(resp => setIdOrder(resp.id))
        .catch(err => console.log(err))
        .finally(()=> {
            borrarCarrito()
            setDataForm({
                name:"", email:"", phone:""
            })
        })

        const cleccionNoti = collection(db, 'items')
        const queryActulizarStock = query(
            cleccionNoti, where( documentId() , 'in', cartList.map(it => it.id))          
        )

        const batch = writeBatch(db)

        
        getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
            stock: resp.data().stock - cartList.find(item => item.id === resp.id).cantidad
        }) ))

        batch.commit()


    }

    return (
        <div>
            {idOrder.length !== 0 && idOrder}
            {  cartList.map(prod=> <li>{prod.nombre}   {prod.cantidad}</li>) }
            <form 
                onSubmit={generarOrden} 
                onChange={handleChange} 
            >
                <input 
                    type='text' 
                    name='name' 
                    placeholder='name' 
                    value={dataForm.name}
                /><br />
                <input 
                    type='text' 
                    name='phone'
                    placeholder='tel' 
                    value={dataForm.phone}
                /><br/>
                <input 
                    type='email' 
                    name='email'
                    placeholder='email' 
                    value={dataForm.email}
                /><br/>
                <button>Generar Orden</button>
            </form>
            <button onClick={borrarCarrito} >Vaciar Carrito</button>

        </div>
    )
}

export default Cart



// ejemplo de actualización
// const handleMensajes=async ()=>{
//     console.log('actualizando')
//     // console.log('actualizado')

//     const queryActulizar = await query(
//         collection(db, 'notificaciones'),
       
//         where( documentId() , 'in', notificaciones.map(it => it.id))
//         //limit(20)
//     )

//     const batch = await writeBatch(db)
//     //console.log(queryActulizar)
//     await getDocs(queryActulizar).then(resp => resp.docs.forEach(res => batch.update(res.ref, {
//         visualizacion: true
//     }) ))

//     // ejemplo de antes
//     // .then( collection=>{
//     //     collection.docs.forEach(docSnapshot => {
//     //         batch.update(docSnapshot.ref, {
//     //             stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad
//     //         })
//     //     })

//     //     batch.commit().then(res =>{
//     //         console.log('se actualizo')
//     //     })
//     // })


    
//     // const doc1 = doc(db, 'notificaciones', 'HVYbUFjA9ib1jBkwkX6I')

//     // batch.update(doc1, {
//     //     visualizacion: false
//     // })
//     await batch.commit()
//     setActualizarListaMensajes()
    
// }
