import React, { useEffect, useState } from 'react';

const Carousel = ({ modalInfo, images, index }) => {

    const [current, setCurrent] = useState(modalInfo.index)
    const [image, setImage] = useState(images[current].url)
    const [animate, setAnimate] = useState(false)
    const length = images.length

    useEffect(() => {
        setImage(images[current].url)
        setAnimate(true)
      }, [current, images]);

    const nextSlide = () => {
        setAnimate(false)
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    const prevSlide = () => {
        setAnimate(false)
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    return (
        <div className="carousel-wrapper">
            <div className="left-arrow" onClick={prevSlide}>{'<'} </div>
            <div className="right-arrow" onClick={nextSlide}>{'>'} </div>
            <img src={image} className={`${animate && 'slide active'} slide`}/>
        </div>
    );
}

export default Carousel;
