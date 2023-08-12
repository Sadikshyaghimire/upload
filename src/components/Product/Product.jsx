import { StarIcon } from '@heroicons/react/24/outline';
import { StarIcon as StarFilledIcon } from '@heroicons/react/24/solid';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from '../../utils/class-names';

const ProductCard = ({ product }) => {
  const product_detail_page = '/products/' + product.id;

  return (
    <Link
      className={classNames('flex-1 min-w-[274px]')}
      to={product_detail_page}
    >
      <img
        src={product.image}
        alt='product'
        className='w-full object-cover object-center h-64'
      />
      <h3 className='mt-5 text-2xl font-semibold'>{product.name}</h3>
      <div className='flex items-center mt-2'>
        {Array.from(Array(5)).map((_, idx) => {
          return (
            <Fragment key={idx}>
              {idx < product.rating ? (
                <StarFilledIcon className='w-4 h-4 text-yellow-300' />
              ) : (
                <StarIcon className='w-4 h-4 text-yellow-300' />
              )}
            </Fragment>
          );
        })}
      </div>
      <p className='text-grey-200 font-medium line-clamp-2'>{product.price}</p>
    </Link>
  );
};

export default ProductCard;
