import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Contact from './pages/Contact'
import Home from './pages/Home';
import {BrowserRouter, Routes, Route, Outlet} from 'react-router-dom'


function App() {

  const Layout = () => {
    return (
      <>
      <Header />
      <Outlet />
      <Footer />
      </>
    )
  }

  return (
  <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='contact-us' element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </>
  );
}

export default App;
