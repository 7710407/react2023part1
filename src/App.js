import './App.css';
import Footer from './components/Footer';
import Header from './components/Header'
import Contact from './pages/Contact'

function App() {
  const bodyContent = <p><i>This is the homepage.</i></p>
  return (
    <>
      <Header />
      <h1 className='blue'>Homepage</h1>
      {bodyContent}
      <Contact />
      <Footer />
    </>
  );
}

export default App;
