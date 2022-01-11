import { createContext, useState, useContext } from 'react'


const CartContext = createContext([]) 

export const useCartContext = () => useContext(CartContext)  


function CartContextProvider({children}) {
    const [cartList, setCartList] = useState([])



    function agregarAlCarrito(item) {       

        const index = cartList.findIndex(i => i.id === item.id)
  
          if (index > -1) {
            const oldQy = cartList[index].cantidad
  
            cartList.splice(index, 1)

            setCartList([...cartList, { ...item, cantidad: item.cantidad + oldQy}])

          } else {
            setCartList([...cartList, item])
          }
      }

      const precioTotal =()=>{
        return cartList.reduce((acum, prod) => acum + (prod.cantidad * prod.precio) , 0)
      }
      

  
      const borrarItem = (id) => {
        setCartList( cartList.filter(prod => prod.id !== id) )
        }
  
borrarItem()

      function borrarCarrito() {
          setCartList([])
      }
    

    return (
        <CartContext.Provider value={{
            cartList,
            agregarAlCarrito,
            borrarCarrito,
            precioTotal
        }}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContextProvider
