import { createContext, useState, useContext } from "react";

const CartContext = createContext([]);

export const useCartContext = () => useContext(CartContext);

function CartContextProvider( {children} ) {
    const [cartList, setCartList] = useState([])

    // Agregar items al carrito
    const addToCart = (item) => {

        const prodAdd = cartList.find(prod => prod.id === item.id);

        if (!prodAdd ) return setCartList([...cartList, item]);

        prodAdd.quantity = prodAdd.quantity + item.quantity;
        setCartList([...cartList.filter(prod => prod.id !== item.id), prodAdd]);

       
    }

    // Borra item del carrito
    const removeItemCart = (item) => {
        setCartList(cartList.filter(prod => prod.id !== item))
    }

    // Vaciar carrito
    const clearCart = () => {
        setCartList([])
    }

    // Contador carrito
    const cartCounter = () => {
        return (
            cartList.reduce((prev, prod) => (prev + prod.quantity), 0)
        )
    }

    // Subtotal compra
    const subtotalBuy = () => {
        return ( 
            cartList.reduce((prev, prod) => (prev + prod.quantity * prod.price), 0)
        )
    }

    // IVA compra
    const ivaBuy = () => {
        return( 
            cartList.reduce(prod => (subtotalBuy(prod) * 0.21), 0)
        )
    }

    // Total compra
    const totalBuy = () => {
        return( 
            cartList.reduce(prod => (subtotalBuy(prod) + ivaBuy(prod)), 0)
        )
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addToCart,
            removeItemCart,
            clearCart,
            cartCounter,
            subtotalBuy,
            ivaBuy,
            totalBuy
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider