import './App.css';
import Navbar from './components/Navbar';
import Menubar from './components/Menubar';
import FeaturedItems from './components/FeaturedItems';
import TrendingItems from './components/Trending';

function App() {
  return (
      <div>
        <Navbar />
        <Menubar />

        <FeaturedItems />
        <TrendingItems />
      </div>
  );
}

export default App;
