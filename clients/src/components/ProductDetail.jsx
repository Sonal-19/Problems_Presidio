import React from 'react';
import { useParams } from 'react-router-dom';
import Data from './Data'; // Import your data file

const ProductDetail = () => {
  const { id } = useParams();
  const product = Data.find((item) => item.id === parseInt(id));

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div className="product-detail">
      <img src={product.image} alt="images" className="product-media" />
      <h2 className="product-title">{product.name}</h2>
    
      <p className="product-description">{product.description}</p>
    </div>
  );
};

export default ProductDetail;