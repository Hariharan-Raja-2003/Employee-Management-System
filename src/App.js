
import './App.css';
import EmployeeComponents from './components/EmployeeComponents';
import FooterComponents from './components/FooterComponents';
import HeaderComponents from './components/HeaderComponents';
import ListEmployeeComponents from './components/ListEmployeeComponents';
import{BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  return (
   <>
   <BrowserRouter>
   <HeaderComponents/>
   <Routes>

<Route path='/' element={<ListEmployeeComponents/>}></Route>

<Route path='/employees'element={<ListEmployeeComponents/>}></Route>

<Route path='/add-employee'element={<EmployeeComponents/>}></Route>

<Route path='/edit-employee/:id' element= {<EmployeeComponents/>}></Route>

   </Routes>
  
    <FooterComponents/>
</BrowserRouter>
   </>
  );
}

export default App;
