import React, { useState } from 'react';
import './MusicPage.css';

const musicData = [
  {
    title: 'Anh Trai Say Hi',
    links: [
      'https://www.youtube.com/watch?v=fNT6AnU2ax4',
      'https://www.youtube.com/watch?v=lwNiHFazaK4',
    ],
  },
  {
    title: 'Anh Trai Vượt Ngàn Chông Gai',
    links: [
      'https://www.youtube.com/watch?v=nXiwlKJSkHY',
      'https://www.youtube.com/watch?v=_lIu6T3Bp2I',
    ],
  },
  {
    title: 'Ca Sĩ Giấu Mặt',
    links: [
      'https://www.youtube.com/watch?v=5viCJm5lS-M',
    ],
  },
];

const MusicPage = () => {
  // Khởi tạo trạng thái mở mặc định cho tất cả expander
  const [openExpanders, setOpenExpanders] = useState(
    Array(musicData.length).fill(true)
  );

  const toggleExpander = (index) => {
    setOpenExpanders((prevState) =>
      prevState.map((isOpen, idx) => (idx === index ? !isOpen : isOpen))
    );
  };

  return (
    <div className="music-page">
      <h1>Trang Âm Nhạc</h1>

      {musicData.map((item, index) => (
        <div
          className={`expander ${openExpanders[index] ? 'open' : ''}`}
          key={index}
        >
          <label onClick={() => toggleExpander(index)}>
            {item.title}
            <span className="arrow">
              {openExpanders[index] ? '▲' : '▼'}
            </span>
          </label>
          {openExpanders[index] && (
            <div className="content">
              {item.links.map((link, idx) => (
                <div key={idx} className="youtube-link">
                  <a href={link} target="_blank" rel="noopener noreferrer">
                    {`Link bài hát ${idx + 1}`}
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default MusicPage;
