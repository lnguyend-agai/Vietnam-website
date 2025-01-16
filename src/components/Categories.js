import React from 'react';
import { Link } from 'react-router-dom';
import './Categories.css';
import travel from '../assets/travel.jpg';
import music from '../assets/music.jpg';
import economic from '../assets/economic.jpg';
import sport from '../assets/sport.jpg';

const categories = [
  { id: 'economy', name: 'Kinh tế', description: 'Thông tin về nền kinh tế Việt Nam', img: economic },
  { id: 'sports', name: 'Thể thao', description: 'Tin tức thể thao nổi bật', img: sport },
  { id: 'music', name: 'Âm nhạc', description: 'Khám phá âm nhạc Việt Nam', img: music },
  { id: 'tourism', name: 'Du lịch', description: 'Địa điểm du lịch nổi bật', img: travel },
];

const Categories = () => {
  return (
    <div className="categories">
      {categories.map((category) => (
        <div className="category-card" key={category.id}>
          {category.id === 'economy' ? ( // Chỉ mục Kinh tế có thể nhấn
            <Link to="/economy">
              <img src={category.img} alt={category.name} />
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </Link>
          ) : category.id === 'sports' ? (
            <Link to="/sports">
              <img src={category.img} alt={category.name} />
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </Link>
          ) : category.id === 'music' ? (
            <Link to="/music">
              <img src={category.img} alt={category.name} />
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </Link>
          ) : (
            <>
              <img src={category.img} alt={category.name} />
              <h3>{category.name}</h3>
              <p>{category.description}</p>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Categories;
