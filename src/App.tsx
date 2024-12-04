import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Footer from './components/Footer';
import Register from './pages/Register';
import Restore from './pages/Restore';
import About from './pages/About';
import Tshirts from './components/Landing/Items/Tshirts';
import Blogs from './pages/Blogs';


const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  );
};

const Main = () => {
  const location = useLocation();
  const getHeaderTextColor = (): string => {
    if (location.pathname === '/signup' || location.pathname === '/restore' || location.pathname === '/blogs' || location.pathname === '/login') {
      return 'black'; 
    }
    return 'white'; 
  };

  return (
    <>
      <Header color={getHeaderTextColor()} />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Register />} />
        <Route path='/restore' element = {<Restore />} />
        <Route path='/about' element = {<About />}/>
        <Route path='/blogs' element = {<Blogs />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
