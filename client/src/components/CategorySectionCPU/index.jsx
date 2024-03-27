import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import card from '../../assets/zotac-rtx-3080.jpg';

const CategorySectionCPU = () => {
  const [resData, setData] = useState({}); // Initialize as an empty object

  useEffect(() => {
    fetch('http://localhost:3001/api/categories/2')
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data); // Assuming the data is an object that includes a `products` array
      });
  }, []);

  return (
    <div className="card-container">
      {resData.products && resData.products.map((item) => ( // Check if products array exists
        <Link to={`/products/${item.id}`} key={item.id}> {/* Ensure item.id is the unique identifier */}
          <div className="card">
            <img src={card} alt="graphics card" />
            <div className="card-body">
              <h2>{item.product_name}</h2>
              <p>{item.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default CategorySectionCPU;