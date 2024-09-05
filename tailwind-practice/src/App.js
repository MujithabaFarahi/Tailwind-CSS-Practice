import './App.css';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Navbar from './component/Navbar';
import TopBar from './component/TopBar';

function App() {
  return (
    <div className="bg-gray-50">
      <TopBar />
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
