import React from 'react';
import './TravelPage.css';

// Import ảnh của các địa điểm
import haLongBayImage from '../assets/ha_long_bay.jpg';
import saPaImage from '../assets/sa_pa.jpg';
import hueImage from '../assets/hue.jpg';
import daLatImage from '../assets/da_lat.jpg';
import daNangImage from '../assets/da_nang.jpg';
import phuQuocImage from '../assets/phu_quoc.jpg';

const TravelPage = () => {
  const regions = [
    {
      name: 'Vịnh Hạ Long',
      description: 'Một trong những kỳ quan thiên nhiên thế giới, nổi bật với cảnh đẹp của hàng nghìn đảo đá vôi giữa làn nước trong xanh.',
      image: haLongBayImage,
    },
    {
      name: 'Sa Pa',
      description: 'Thị trấn vùng cao nằm ở Lào Cai, nổi tiếng với ruộng bậc thang và văn hóa các dân tộc thiểu số.',
      image: saPaImage,
    },
    {
      name: 'Cố đô Huế',
      description: 'Thành phố lịch sử với di tích cố đô và nét văn hóa đặc sắc của miền Trung.',
      image: hueImage,
    },
    {
      name: 'Đà Lạt',
      description: 'Thành phố ngàn hoa với khí hậu mát mẻ quanh năm, là địa điểm lý tưởng để nghỉ dưỡng.',
      image: daLatImage,
    },
    {
      name: 'Đà Nẵng',
      description: 'Thành phố hiện đại bên bờ biển, nổi tiếng với cầu Rồng và bãi biển Mỹ Khê tuyệt đẹp.',
      image: daNangImage,
    },
    {
      name: 'Phú Quốc',
      description: 'Hòn đảo lớn nhất Việt Nam, thiên đường của những bãi biển trắng mịn và nước biển trong xanh.',
      image: phuQuocImage,
    },
  ];

  return (
    <div className="travel-page">
      <h1>Du Lịch Việt Nam</h1>
      <div className="regions">
        {regions.map((region, index) => (
          <div className="region" key={index}>
            <img src={region.image} alt={region.name} />
            <div className="region-info">
              <h2>{region.name}</h2>
              <p>{region.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TravelPage;
