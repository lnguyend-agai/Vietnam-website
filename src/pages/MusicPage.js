import React from 'react';
import './MusicPage.css';

const musicData = [
  {
    title: 'Anh Trai Say Hi',
    links: [
      'https://youtube.com/watch?v=d9Fohvdet4g', 
      'https://www.youtube.com/watch?v=a-jdOviGQ00',
    ],
  },
  {
    title: 'Anh Trai Vượt Ngàn Chông Gai',
    links: [
      'https://www.youtube.com/watch?v=nXiwlKJSkHY', 
      'https://www.youtube.com/watch?v=3UbQjlHbPsE',
    ],
  },
  {
    title: 'The Masked Singer',
    links: [
      'https://www.youtube.com/watch?v=b8dC2QZKSNs', 
    ],
  },
];

const MusicPage = () => {
  return (
    <div className="music-page">
      <h1>Trang Âm Nhạc</h1>

      {musicData.map((item, index) => (
        <div className="expander" key={index}>
          <input type="checkbox" id={`expander-${index}`} />
          <label htmlFor={`expander-${index}`}>
            {item.title}
            <span className="arrow">&#9660;</span>
          </label>
          <div className="content">
            {item.links.map((link, idx) => (
              <div key={idx} className="youtube-link">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {`Link bài hát ${idx + 1}`}
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default MusicPage;
