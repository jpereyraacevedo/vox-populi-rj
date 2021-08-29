import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import './styles/styles.css';


function App() {
  return  (
    <>
      <BrowserRouter>
        <NavBar/>
        <ItemListContainer/>

        <Switch>
          <Route exact path="/">

          </Route>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App;
