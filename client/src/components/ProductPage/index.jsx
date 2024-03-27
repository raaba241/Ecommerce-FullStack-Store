import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import card from '../../assets/zotac-rtx-3080.jpg';
import Navbar from '../Navbar';
import Menubar from '../Menubar';
import './style.css';
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
      <Navbar />
      <Menubar />
      <div className='product-content'>
        <img src={card} alt="Product" />
        <h1>{product.product_name}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
        <button>Add to Cart</button> 
        <button>Buy Now</button>
      </div>

    </div>
  );
}

export default ProductDetails;