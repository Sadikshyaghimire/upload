import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { CartContext, useCart } from '../../context/cart';
import { useContext } from 'react';



const Navbar = () => {
  const links = [

    {
      label: 'Home',
      to: '/',
    },
    {
      label: 'Shop',
      to: '/shop',
    },
    {
      label: 'Product',
      to: '/products',
    },
    {
      label: 'Blog',
      to: '/blog',
    },
    {
      label: 'About',
      to: '/about',
    },
  ];
  const{cart} =useCart;

  return (
    <header className='container mx-auto px-4 lg:px-0'>
      <nav className='flex justify-between py-7'>
        <Link className='font-serif' to='/'>
          Miralou{' '}
        </Link>
        <div className='gap-4 hidden lg:flex'>
          {links.map((link, index) => (
            <Link to={link.to} key={index}>
              {link.label}
            </Link>
          ))}
        </div>
        <div className='gap-8 hidden lg:flex'>
          <MagnifyingGlassIcon className='w-6 h-6' />
          <HeartIcon className='w-6 h-6' />
          <div className='relative'>
            <div
              className={
                'absolute -top-2 -right-2 z-10 bg-red-400 rounded-full px-1 text-white h-4 w-4 text-xs text-center'
              }
            >
              {cart.length}
            </div>
            <ShoppingCartIcon className='w-6 h-6' />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
