import React, { useState, useEffect } from 'react';
import Carousel from 'react-elastic-carousel';
import './Cards.css';
import science from '../../assets/science.jpg';
import romance from '../../assets/romance.jpg';
import poetry from '../../assets/poetry.png';
import horror from '../../assets/horror.png';
import fiction from '../../assets/fiction.jpg';
import fantacy from '../../assets/fantacy.jpg';
import mystery from '../../assets/mystery.png';
import historic from '../../assets/historic.jpg';
import { Link } from 'react-router-dom';

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 1200, itemsToShow: 4 }
];

const images = [
    { id: 1, src: fiction, alt: 'Fiction', label: 'Fiction', route: '/search' },
    { id: 2, src: science, alt: 'Science', label: 'Science', route: '/search' },
    { id: 3, src: historic, alt: 'History', label: 'History', route: '/search' },
    { id: 4, src: romance, alt: 'Romance', label: 'Romance', route: '/search' },
    { id: 8, src: mystery, alt: 'Mystery', label: 'Mystery', route: '/search' },
    { id: 6, src: horror, alt: 'Horror', label: 'Horror', route: '/search' },
    { id: 7, src: fantacy, alt: 'Fantasy', label: 'Fantacy', route: '/search' },
    { id: 5, src: poetry, alt: 'Poetry', label: 'poetry', route: '/search' }
];

const Cards = () => {

    const [hoveredImage, setHoveredImage] = useState(null);


    return (
        <div className="Cards">
            <div className='genre-header'><h3>GENRES</h3><hr style={{ marginTop: '15px' }} /></div>

            <Carousel breakPoints={breakPoints}>

                {images.map((image) => (
                    <div
                        key={image.id}
                        className="image-wrapper"
                        onMouseEnter={() => setHoveredImage(image.id)}
                        onMouseLeave={() => setHoveredImage(null)}
                    >
                        <Link to={image.route} state={{ category: image.label }}>
                            <img src={image.src} alt={image.alt} className="image" onClick={() => window.scrollTo(0, 0)} />
                            {hoveredImage === image.id && <div className="overlay">{image.label}</div>}
                        </Link>
                    </div>
                ))}
            </Carousel>
        </div>

    );
};

export default Cards;