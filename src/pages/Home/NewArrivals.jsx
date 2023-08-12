import { Link } from 'react-router-dom';
import ProductCard from '../../components/Product/Product';

const NewArrials = ({ products }) => {
  return (
    <section>
      <div className='py-10 container mx-auto'>
        <h2 className='text-6xl text-center'>New Arrivals</h2>
        <p className='text-center w-full lg:w-1/2 px-4 lg:px-0 mx-auto'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a mi
          enim. Duis in tortor sit amet turpis rutrum fermentum in non arcu.
          Praesent porta auctor odio a suscipit. Quisque sagittis suscipit
          ultricies.
        </p>

        <div className='mt-8 flex flex-wrap gap-4 text-sm px-4 lg:px-0'>
          {products.map((product, idx) => (
            <ProductCard product={product} key={idx} />
          ))}
        </div>
        <div className='mt-9 flex justify-center'>
          <Link to='/products' className='border rounded px-14 py-4'>
            Buy Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default NewArrials;
