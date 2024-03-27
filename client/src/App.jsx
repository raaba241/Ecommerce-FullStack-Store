import './App.css';
import Navbar from './components/Navbar';
import Menubar from './components/Menubar';
import FeaturedItems from './components/FeaturedItems';
import TrendingItems from './components/Trending';
import { useEffect, useState } from 'react';
import CategorySectionGPU from './components/CategorySectionGPU';
import CategorySectionCPU from './components/CategorySectionCPU';
import CategorySectionPeripherals from './components/CategorySectionPeripherals';
import CategorySectionRAM from './components/CategorySectionRAM';
// import CategorySectionCPU from './components/CategorySectionRAM';

function App() {

  const [activeSection, setActiveSection] = useState('Home');

  const renderSection = () => {
    switch (activeSection) {
      case 'Home':
        return (
          <div>
            <FeaturedItems />
            <TrendingItems />
          </div>
        );
      case 'GPU':
        return <CategorySectionGPU />;
      case 'CPU':
        return <CategorySectionCPU />;
      case 'Peripherals':
        return <CategorySectionPeripherals />;

      case 'RAM':
          return <CategorySectionRAM/>;
      default:
        return <div>Section not found</div>;
    }
  }

  return (
    <div>
      <Navbar />
      <Menubar activeSection={activeSection} setActiveSection={setActiveSection} />
      {renderSection()}
    </div>
  );
}

export default App;
