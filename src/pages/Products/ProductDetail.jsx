import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';

const ProductDetail = () => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setProduct(data);
      });
  }, []);

  console.log(product);

  return (
    <div>
      <div className='container mx-auto'>
        <div className='flex'>
          <div className='w-1/2'>
            <img
              src={product.image}
              alt='product'
              className='w-full object-cover object-center h-96'
            />
          </div>
          <div className='w-1/2 pl-4'>
            <h1 className='text-3xl font-bold'>{product.name}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
