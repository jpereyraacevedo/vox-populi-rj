import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { NavBar } from './components/NavBar/NavBar';
import { Footer } from './components/Footer/Footer';
import './styles/styles.css';


function App() {
  return  (
    <>
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
        </Switch>
        
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App;
