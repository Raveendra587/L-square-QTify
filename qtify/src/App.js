import './App.css';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import SongSection from "./components/SongSection/SongSection";
import TopAlbumsSection from "./components/TopAlbumsSection";
import NewAlbumsSection from "./components/NewAlbumsSection";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TopAlbumsSection />
      <NewAlbumsSection />
      <SongSection />
    </>
  );
}

export default App;
