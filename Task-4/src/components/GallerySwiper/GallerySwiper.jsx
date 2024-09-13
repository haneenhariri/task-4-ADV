import { useEffect, useState } from 'react';
import './GallerySwiper.css';
import { Carousel, Col, Row } from 'react-bootstrap';
import { galleryImg } from '../../data/carouselData';

export default function GallerySwiper() {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 992);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth >= 992);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const groupedDataImg = [];
    if (isLargeScreen) {
        const totalItems = 8;
        for (let i = 0; i < totalItems; i++) {
            const group = [];
            for (let j = 0; j < 5; j++) {
                const dataIndex = (i * 5 + j) % galleryImg.length;
                group.push(galleryImg[dataIndex]);
            }
            groupedDataImg.push(group);
        }
    } else {
        galleryImg.forEach((item) => {
            groupedDataImg.push([item]);
        });
    }

    return (
        <Carousel
            indicators={true}
            controls={false}
            activeIndex={activeIndex}
            onSelect={(selectedIndex) => setActiveIndex(selectedIndex)}
        >
            {groupedDataImg.map((group, i) => (
                <Carousel.Item key={i}>
                    <Row>
                        {group.map((e, index) => (
                            <Col key={index} xs={12} lg={2}>
                                <img
                                    src={e.img}
                                    className={`carousel-img ${i === activeIndex ? 'active' : ''}`}
                                    alt=""
                                />
                            </Col>
                        ))}
                    </Row>
                </Carousel.Item>
            ))}
        </Carousel>
    );
}
