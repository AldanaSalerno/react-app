import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider  from './context/CartContext';

function App() { 
    
    return (
        <CartContextProvider>
            <BrowserRouter>
                <center>
                    hola
                    <NavBar /> 
                    <Routes>
                        <Route 
                            exact
                            path="/" 
                            element={ <ItemListContainer greeting='hola soy ItemListContainer que vengo de app' />} 
                        />
                        <Route 
                            exact
                            path="/categoria/:idCate" 
                            element={ <ItemListContainer greeting='hola soy ItemListContainer que vengo de app' />} 
                        />                  
                        <Route 
                            exact
                            path="/detalle/:id" 
                            element={ <ItemDetailContainer />} 
                        />                  
                        {/* <Route 
                            exact
                            path="/cart" 
                            element={ <Cart />} 
                        />    */}
                    
                    
                        
                    </Routes>           
                </center>
            </BrowserRouter>
        </CartContextProvider>          
       
    )
}
  
  export default App;

