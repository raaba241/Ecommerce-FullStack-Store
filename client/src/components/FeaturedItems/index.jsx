import image from '../../assets/zotac-rtx-3080.jpg';
import './style.css';

const CarouselItems = ({ item }) => {
  return (
    <div className="carousel-item">
      <img className="carousel-img" src={image} alt="" />
      <div className="carousel-info">
        <div className="carousel-title">Discover NVDIA's newest hard hitter</div>
        <div className="carousel-item-description">RTX 5080</div>
      </div>
    </div>
  );
};

export default CarouselItems;