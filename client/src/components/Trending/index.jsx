import card from "../../assets/zotac-rtx-3080.jpg";

const TrendingItems = () => {
  for (let i = 0; i < 10; i++) {
    return (
      <div className="trending-card">
        <img src={card} alt="Nvidia RTX 3080" />
        <div className="trending-card-title">Nvidia RTX 3080</div>
        <div className="trending-card-description">
          This is a description of the item
        </div>
      </div>
    );
  }
  
};

export default TrendingItems;
