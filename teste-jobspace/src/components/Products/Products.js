import { useContext } from 'react'
import { CartContext } from '../ProductCart/CartContext'
import styles from './Products.module.css'



function Products({id, avatar, name, desc, price}){
    

    const dados = {name, desc, price}
   
    const cart = useContext(CartContext)
    const add = (dados) => () =>{
        cart.addToCart(dados)
    }
   
    return(
        
            <div className={styles.CardProducts}>
                <img src={avatar} alt="imagem ilustrativa" /> 
                <h2>{name}</h2>
                <div className={styles.Description}>
                <span>{desc}</span>
                        <span>{id}</span>
                </div>
                
                <button onClick={add(dados)}>Add to Cart</button>
                <span>${price}</span>
                
            </div>        
            
    )
    
}

export default Products