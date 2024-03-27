import './Menubar.css';
const Menubar = () => {
  return (
    <div className="menu-bar">
      <ul>
        <li><a href="?categories=gpu">GPU </a></li>
        <li><a href="?categories=cpu">CPU </a></li>
        <li><a href="?categories=ram">RAM </a></li>
        <li><a href="?categories=peripherals">Peripherals </a></li>
      </ul>
    </div>
  );
};

export default Menubar;
