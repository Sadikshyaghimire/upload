import { useEffect, useState } from 'react';
import axios from '../../api/axios';
import Hero from './Hero';
import LatestNews from './LatestNews';
import NewArrials from './NewArrivals';
import SubscriptionSection from './Subscription';

const CategoryCard = ({ category }) => {
  return (
    <div className='relative flex justify-center w-full md:w-1/2 lg:w-1/4 px-1 my-4'>
      <img src={category.image} alt='category' className='w-full' />
      <div className='absolute bg-gray-300 px-14 py-4 -bottom-6'>
        {category.name}
      </div>
    </div>
  );
};

const Home = () => {
  const [data, setData] = useState();

  useEffect(function () {
    axios
      .get('/home')
      .then(function (response) {
        return response.data;
      })
      .then((data) => {
        setData(data.data);
      });
  }, []);

  const categories = data?.categories ?? [];
  const products = data?.new_arrivals ?? [];

  return (
    <>
      <Hero />
      <section>
        <div className='container mx-auto py-36 px-4 lg:px-0'>
          <div className='flex flex-wrap justify-between'>
            {categories.map((category) => {
              return <CategoryCard category={category} />;
            })}
          </div>
        </div>
      </section>
      <NewArrials products={products} />
      <LatestNews />
      <SubscriptionSection />
    </>
  );
};

export default Home;
