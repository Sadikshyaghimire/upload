import { Tab } from '@headlessui/react';
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import Button from '../../components/Button/Button';

const ProductDetail = ({ cart, setCart }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    axios
      .get(`/products/${id}`)
      .then((res) => res.data)
      .then((data) => {
        setProduct(data);
      });
  }, []);

  const handleChange = (event) => {
    const { value } = event.target;
    setQuantity(value);
  };

  const increase = (event) => {
    setQuantity(quantity + 1);
  };

  const decrease = (event) => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    const productExists = cart.find((item) => item.product.id === product.id);
    if (!productExists) {
      setCart([...cart, { product: product, quantity: quantity }]);
    }
  };

  useEffect(() => {
    const currentProduct = cart.find((item) => item.product.id === product.id);
    if (currentProduct) {
      setCart(
        cart.map((item) => {
          if (item.product.id === product.id) {
            return {
              ...item,
              quantity: quantity,
            };
          }
          return item;
        })
      );
    }
  }, [quantity]);

  console.log(cart);

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
                  className='border border-gray-500 w-20 py-2 text-center focus:outline-none'
                  value={quantity}
                  onChange={handleChange}
                />
                <div className='border border-gray-400 py-3 px-5 flex gap-5'>
                  <button onClick={decrease}>
                    <ChevronLeftIcon className='w-4 h-4 text-gray-400' />
                  </button>
                  <button onClick={increase}>
                    <ChevronRightIcon className='w-4 h-4 text-gray-400' />
                  </button>
                </div>
                <Button onClick={addToCart}>Add to Cart</Button>
              </div>
            </div>

            <div className='flex pt-4 gap-5 text-yellow-400'>
              <HeartIcon className='w-6 h-6' />
              <p>Add to Wish list</p>
            </div>
          </div>
        </div>
        <div>
          <Tab.Group>
            <Tab.List className='text-lg font-semibold'>
              <Tab
                className={({ selected }) =>
                  `p-3 ${
                    selected ? 'text-gray-800 bg-gray-300' : 'text-gray-400'
                  }`
                }
              >
                Tab 1
              </Tab>
              <Tab
                className={({ selected }) =>
                  `p-3 ${
                    selected ? 'text-gray-800 bg-gray-300' : 'text-gray-400'
                  }`
                }
              >
                Tab 2
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel className='bg-gray-300 pl-10'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam
                maxime illum quibusdam veritatis rem odit? Ducimus tenetur
                aliquam dolores sit.
              </Tab.Panel>
              <Tab.Panel className='bg-gray-300 pl-10'>Reviews</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
