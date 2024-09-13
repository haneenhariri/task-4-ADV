import { Carousel, Row, Col } from 'react-bootstrap';
import './SwiperUser.css';
import { cardUserData } from '../../data/cardSectionData';
import UserCard from '../UserCard/UserCard';
import { useState, useEffect } from 'react';

export default function SwiperUser() {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992); 

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 992);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const groupedData = [];
  if (isLargeScreen) {
    const totalItems = 5;
    for (let i = 0; i < totalItems; i++) {
      const group = [];
      for (let j = 0; j < 3; j++) {
        const dataIndex = (i * 3 + j) % cardUserData.length;
        group.push(cardUserData[dataIndex]);
      }
      groupedData.push(group);
    }
  } else {
    cardUserData.forEach((item) => {
      groupedData.push([item]);
    });
  }

  return (
    <Carousel indicators={true} controls={false}>
      {groupedData.map((group, i) => (
        <Carousel.Item key={i}>
          <Row>
            {group.map((e, index) => (
              <Col key={index} xs={12} lg={4}>
                <UserCard
                  img={e.img}
                  span={e.span}
                  title={e.title}
                  text={e.text}
                />
              </Col>
            ))}
          </Row>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}