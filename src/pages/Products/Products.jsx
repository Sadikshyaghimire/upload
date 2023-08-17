import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import ProductCard from '../../components/Product/Product';
import { Sidebar } from './Sidebar';

const Prodcuts = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategories, setSelected] = useState([]);

  useEffect(() => {
    let queryParams = '';

    selectedCategories.forEach((category, idx) => {
      if (idx === 0) {
        queryParams = queryParams + 'category=' + category;
      } else {
        queryParams = queryParams + '&category=' + category;
      }
    });
    axios
      .get(`/products?${queryParams}`)
      .then((res) => res.data)
      .then((data) => {
        setProducts(data.data);
      });
  }, [selectedCategories]);

  return (
    <div>
      <div className='container mx-auto'>
        <div className='flex'>
          <div className='w-1/3'>
            <Sidebar
              selectedCategories={selectedCategories}
              setSelected={setSelected}
            />
          </div>
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
