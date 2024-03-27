import card from "../../assets/zotac-rtx-3080.jpg";
import { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";

const TrendingItems = () => {
  const [resData, setData] = useState([]);

  useEffect(() => {

    fetch('http://localhost:3001/api/products/sold')
      .then((res) => {
        return res.json()
      }).then((data) => {
        console.log(data)
        setData(data)
      })
  }, [])
  return (

    <div>
      <h1>OUR TOP SELLING ITEMS 🔥</h1>
      <div className="card-container">

        {
          resData.map((item) => {
            return (
              <Link to={`/products/${item.id}`} key={item.id}> {/* Ensure item.id is the unique identifier */}
                <div className="card">
                  <img src={card} alt="graphics card" />
                  <div className="card-body">
                    <h2>{item.product_name}</h2>
                    <p>{item.price}</p>
                  </div>
                </div>
              </Link>
            )
          })
        }
      </div>


    </div>



  );
};

export default TrendingItems;
