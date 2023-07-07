import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Contact from './pages/Contact'
import logo from './assets/images/logo192.png'

function App() {
  const myStyle = {
    backgroundColor: "blue",
    fontSize: "30px"
  }

  return (
  <>
    <Header />
    <h1 className='blue'>Homepage</h1>
    <p style={myStyle}>This is the homepage.</p>
    <Contact />
    <img src={logo} alt='logo'/>
    <Footer />
  </>
  );
}

export default App;
