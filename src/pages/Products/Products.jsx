import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import ProductCard from '../../components/Product/Product';

const Prodcuts = () => {
  const [products, setProdcuts] = useState([]);
  useEffect(() => {
    axios
      .get('/products')
      .then((res) => res.data)
      .then((data) => {
        setProdcuts(data.data);
      });
  }, []);

  return (
    <div>
      <div className='container mx-auto'>
        <div className='flex'>
          <div className='w-1/3'>left</div>
          <div className='w-2/3 flex flex-wrap gap-4'>
            {products.map((product) => {
              return <ProductCard product={product} key={product.id} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Prodcuts;
