import './App.css';
import FAQ from './component/FAQ';
import Footer from './component/Footer';
import Hero from './component/Hero';
import Hero2 from './component/Hero2';
import Hero3 from './component/Hero3';
import Hero4 from './component/Hero4';
import ImageContainer from './component/ImageContainer';
import Messages from './component/Messages';
import Navbar from './component/Navbar';
import TopBar from './component/TopBar';

function App() {
  return (
    <div className="bg-gray-100">
      <TopBar />
      <Navbar />
      <Hero />
      <Hero2 />
      <Hero3 />
      <Hero4 />
      <Messages />
      <FAQ />
      <ImageContainer />
      <Footer />
    </div>
  );
}

export default App;
