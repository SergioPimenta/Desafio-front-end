import './App.css';
import Header from './components/Header/Header'
import Products from './components/Products/Products'
import Main from './components/Main/Main'
import {useEffect, useState} from 'react'
import api from './services/api';
import { CartProvider } from './components/ProductCart/CartContext';

function App() {
  const [produtos, setProdutos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('')
  useEffect(() => {
    api.get("produtos").then(({data}) => {
      setProdutos(data)
    });
    
      
       // eslint-disable-next-line
  }, []); 
  
  
  
  return (
    <CartProvider>
    <div className="App">
    

      <Header  />
      
      <Main />
      <input type='text' className='SearchBar' placeholder='Search' onChange={event =>{setSearchTerm(event.target.value)}}/>
     
    <div className='Cards'>
    
     {/* eslint-disable-next-line */}
      {produtos.filter((val)=>{
        if (searchTerm ===""){
          return val 
        } else if (val.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())){
          return val
        }
      }).map((produto) => (
        <Products
          key={produto._id}
          id={produto._id}
          name={produto.name}
          desc={produto.desciption}
          price={produto.price}
          avatar={produto.avatar}
          />
          
      ))}
      
      </div>
      
    </div>
    </CartProvider>
  );
}

export default App;
