import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from '../../api/axios';

export const Sidebar = ({ selectedCategories, setSelected }) => {
  const [categories, setCategories] = useState([]);
  const [searchParams] = useSearchParams();

  // console.log(searchParams.get('category'));

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
      setSelected([...selectedCategories, name]);
    } else {
      setSelected(
        selectedCategories.filter((category) => {
          if (category !== name) {
            return category;
          }
        })
      );
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
