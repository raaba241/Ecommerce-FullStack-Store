import './Menubar.css';
import { useState } from 'react';


function Menubar({ activeSection, setActiveSection }) {
  return (
    <header>
      <nav>
        <ul>
          {['GPU', 'CPU', 'Peripherals', 'RAM'].map((section) => (
            <li key={section} className={activeSection === section ? 'active' : ''}>
              <button onClick={() => setActiveSection(section)}>
                {section.replace(/([A-Z])/g, ' $1').trim()}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Menubar;
