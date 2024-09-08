import './App.css';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Hero2 from './component/Hero2';
import Navbar from './component/Navbar';
import TopBar from './component/TopBar';

function App() {
  return (
    <div className="bg-gray-100">
      <TopBar />
      <Navbar />
      <Hero />
      <Hero2 />
      <Footer />
    </div>
  );
}

export default App;
