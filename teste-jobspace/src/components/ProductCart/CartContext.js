import {createContext, useState, useContext, useEffect} from 'react'
export const CartContext = createContext ()

export const CartProvider = ({children}) => {
   const [cart, setCart] = useState({}) 
   useEffect(() =>{
    const cartLocal = window.localStorage.getItem('cart')
    if(cartLocal){
        setCart(JSON.parse(cartLocal))
    }
   }, [])
    const addToCart = (produtos) => {
        setCart((old) => ({
            ...old,
            [produtos.id]: produtos,
            
        }))
        window.localStorage.setItem('cart', JSON.stringify(produtos))
    }
    
    return (
        
        <CartContext.Provider value={ {cart, addToCart, setCart} }>
            
            {children}
        </CartContext.Provider>
        
    )
}

export const useCart = () => {
    const cart = useContext(CartContext)
    return cart
}

