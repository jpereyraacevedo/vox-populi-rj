import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { NavBar } from './components/NavBar/NavBar';
import './styles/styles.css';

function App() {
  return  (
    <body>
      <NavBar/>
      <ItemListContainer greeting="Mensaje enviado desde el greeting"/>
    </body>
  )
}

export default App;
