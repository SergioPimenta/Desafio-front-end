import styles from './Header.module.css'
import { useState} from 'react'




function Header(){
  
  const cart = localStorage.getItem('cart')
  const [modal, setModal] = useState(false);
  
 

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  
    return(
        <div className={styles.NavBar}>
            
            <p className={styles.Logo}>Logo</p>
            
            <button onClick={toggleModal} className={styles.btnCart} >Cart</button>

            {modal && (
        <div className={styles.modal}>
          <div onClick={toggleModal} className={styles.overlay}></div>
          <div className={styles.modalContent}>
            <h2>Cart</h2>
                <div className={styles.Infos}>
                  <table>
                    <thead>
                      <tr>
                        <th>Produto</th>
                        <th>Quantidade</th>
                        <th>Preço</th>
                      </tr>
                    </thead>
                    <tbody>
                      <p>{cart}</p>
                    </tbody>
                  </table>
                               
             
                </div>
            <button className={styles.closeModal} onClick={toggleModal}>
              CLOSE
            </button>
            <button className={styles.Buy}>Finalizar Compra</button>
            
          </div>
         
        </div>
        
      )}
                    
                    

        </div>

                





    )
}


export default Header