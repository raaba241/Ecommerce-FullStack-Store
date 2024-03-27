import './App.css';
import Navbar from './components/Navbar';
import Menubar from './components/Menubar';
import FeaturedItems from './components/FeaturedItems';
import TrendingItems from './components/Trending';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div>
      <Navbar />
      <Menubar />
      {/* <FeaturedItems /> */}
      <TrendingItems />
     
    </div>
  );
}

export default App;
