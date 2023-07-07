import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Contact from './pages/Contact'
import Home from './pages/Home';
import {BrowserRouter, Routes, Route} from 'react-router-dom'


function App() {

  return (
  <>
    <Header />
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact-us' element={<Contact />} />
      </Routes>
    </BrowserRouter>
    <Footer />
  </>
  );
}

export default App;
