import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
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
            <p className='mt-2 text-gray-600'>$ {product.price}</p>
            <p className='mt-5 text-stone-600'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi
              animi delectus quos ex veritatis, saepe repellat consequuntur quas
              placeat incidunt.
            </p>
            <div className='my-5 py-4 border-y border-gray-400'>
              <div className='flex gap-4'>
                <input
                  type='number'
                  className='border border-gray-500 w-20 py-2'
                />
                <div className='border border-gray-400 py-3 px-5 flex gap-5'>
                  <button>
                    <ChevronLeftIcon className='w-4 h-4 text-gray-400' />
                  </button>
                  <button>
                    <ChevronRightIcon className='w-4 h-4 text-gray-400' />
                  </button>
                </div>
                <button>Add to cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
