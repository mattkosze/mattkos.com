import './styles/App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';
import Home from './pages/home';
import Reading from './pages/reading';
import Video from './pages/video';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="flex flex-col bg-isabeline min-h-screen">
        <Navbar/>
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reading" element={<Reading />} />
            <Route path="/telemate-demo" element={<Video />} />
          </Routes>
        </main>
        <Footer/>
      </div>
    </Router>
  )
}

export default App
