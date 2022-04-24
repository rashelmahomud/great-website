
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './Pages/About/About';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Login from './Pages/Login/Login';
import ServiceDetails from './Pages/ServiceDetails/ServiceDetails';
import NoteFound from './Pages/Shared/NoteFound/NoteFound';
import Register from './Pages/Login/Register/Register';
import AddService from './Pages/AddService/AddService';
import CheckOut from './Pages/ServiceDetails/CheckOut/CheckOut';


function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/services/:servicesId' element={<ServiceDetails></ServiceDetails>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/checkout/:servicesId' element={<CheckOut></CheckOut>}></Route>
        <Route path='/addservice' element={<AddService></AddService>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='/notefound' element={<NoteFound></NoteFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
