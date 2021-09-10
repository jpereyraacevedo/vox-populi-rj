import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import { CartProvider } from './context/CartContext';
import { CartView } from './components/CartView/CartView';
import './styles/styles.css';


function App() {

  
  return  (
    <>   
      <CartProvider>

        <BrowserRouter>
          <NavBar/>

          <Switch>
            <Route exact path="/">
              <ItemListContainer/>
            </Route>
            <Route exact path="/category/:cat">
              <ItemListContainer/>
            </Route>
            <Route exact path='/detail/:itemId'>
              <ItemDetailContainer/>
            </Route>
            <Route exact path='/cart'>
              <CartView/>
            </Route>
          </Switch>
          
          <Footer/>
        </BrowserRouter>

      </CartProvider>
    </>
  )
}

export default App;
