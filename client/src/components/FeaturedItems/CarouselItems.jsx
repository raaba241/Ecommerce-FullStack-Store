const CarouselItems = ({ item }) => {

  const image = require(`../../assets/${item.image}`).default;
  item.image = image;
  return (
    <div className="carousel-item">
      <div></div>
      <img className="carousel-img" src={item.image} alt="" />
      <div className="carousel-title">{item.title}</div>
      <div className="carousel-item-description">{item.description}</div>
    </div>
  );
};

export default CarouselItems;
