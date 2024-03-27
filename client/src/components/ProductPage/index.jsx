import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    // Replace with your actual fetch URL, dynamically inserting the product ID
    fetch(`http://localhost:3001/api/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data))
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div>
      <h2>{product.product_name}</h2>
      {/* Display other product details */}
    </div>
  );
}

export default ProductDetails;