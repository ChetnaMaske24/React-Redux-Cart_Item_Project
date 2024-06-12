import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardsDetails from './components/CardsDetails';
import Cards from './components/Cards';
import {BrowserRouter, Routes,Route} from "react-router-dom";

function App() {
  return (
  <>
   <Header />
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Cards />} />
     <Route path='/cart/:id' element={<CardsDetails />} />
   </Routes>
   </BrowserRouter>
  </>
  );
}

export default App;