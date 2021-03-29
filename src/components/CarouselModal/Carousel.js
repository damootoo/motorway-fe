import React, { useEffect, useState } from 'react';

const Carousel = ({ modalInfo, images, index }) => {

    // const [current, setCurrent] = useState({...modalInfo})
    // const length = images.length

    // const nextSlide = () => {
    //     setCurrent(current === length - 1 ? 0 : current + 1)
    // }

    // const prevSlide = () => {
    //     setCurrent(current === 0 ? length - 1 : current - 1)
    // }

    return (
        <div className="carousel-wrapper">
            <img src={modalInfo.image} />

        </div>
    );
}

export default Carousel;
