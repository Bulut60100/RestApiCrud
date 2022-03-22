import './App.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './components/Home';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
       <Route path='/' element={ <Home /> } />
       <Route path='/add' element={ <AddProduct /> } />
       <Route path='/edit/:id' element={ <EditProduct /> } />
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
