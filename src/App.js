import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import MenuCards from './Components/MenuCards';
import MenuLists from './Components/MenuLists';
import CallAction from './Components/CallAction';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <MenuCards />
      <CallAction />
      <MenuLists />
      <Footer />
    </div>
  );
}

export default App;
