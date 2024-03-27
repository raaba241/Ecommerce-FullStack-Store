import image from '../../assets/zotac-rtx-3080.jpg';

const CarouselItems = ({ item }) => {

  
  
  return (
    <div className="carousel-item">
      <div></div>
      <img className="carousel-img" src={image} alt="" />
      <div className="carousel-title">{item.title}</div>
      <div className="carousel-item-description">{item.description}</div>
    </div>
  );
};

export default CarouselItems;
