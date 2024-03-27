import card from "../../assets/zotac-rtx-3080.jpg";
import { useEffect, useState } from "react";

const TrendingItems = () => {
  const [resData, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/products/sold')
      .then((res) => {
        if (res.headers.get("content-type")?.includes("application/json")) {
          return res.json();
        }
        throw new Error('Not a JSON response' + console.log(res));
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
        // Handle the error or non-JSON response here
      });
  }, []);

  return (
    <div>
      {
        resData.map((item) => {
          return (
            <div className="card">
              <img src={card} alt="graphics card" />
              <div className="card-body">
                <h2>{item.name}</h2>
                <p>{item.price}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default TrendingItems;
