import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Contact from './pages/Contact'

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
    <Footer />
  </>
  );
}

export default App;
