import './styles/App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Hero from './components/hero';
import About from './components/about';

function App() {

  return (
    <div className="flex flex-col bg-isabeline min-h-screen">
      <Navbar/>
      <main className="flex-grow">
        <Hero/>
        <About/>
      </main>
      <Footer/>
    </div>
  )
}

export default App
