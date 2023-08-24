import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import axios from '../../api/axios';

export const Sidebar = ({ selectedCategories, setSelected }) => {
  const [categories, setCategories] = useState([]);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get('/products/categories')
      .then((res) => {
        return res.data;
      })
      .then((data) => {
        setCategories(data);
      });
  }, []);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    if (checked) {
      const category = searchParams.get('category', name);
      if (category === null) {
        searchParams.set('category', name);
        const queryString = searchParams.toString();
        navigate(`/products?${queryString}`);
      } else {
        searchParams.append('category', name);
        const queryString = searchParams.toString();
        navigate(`/products?${queryString}`);
      }
    } else {
      let category = searchParams.getAll('category');
      searchParams.delete('category');
      category = category.filter((cat) => cat !== name);

      category.forEach((cat) => {
        searchParams.append('category', cat);
      });

      const queryString = searchParams.toString();
      navigate(`/products?${queryString}`);
    }
  };

  return (
    <div>
      <h2>Categories</h2>
      <div className='mt-5'>
        {categories.map((category, index) => (
          <div key={index} className='flex gap-4'>
            <input
              type='checkbox'
              id={category.name}
              onChange={handleChange}
              name={category.name}
              checked={selectedCategories.includes(category.name)}
            />
            <label htmlFor={category.name}>{category.name}</label>
          </div>
        ))}
      </div>
    </div>
  );
};
