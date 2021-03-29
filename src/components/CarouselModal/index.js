import React, { useEffect, useState } from 'react';
import Carousel from './Carousel'

const CarouselModal = ({ modal, close, modalInfo, images }) => {

    return (
        <div className="modal-wrapper" style={{opacity: modal ? '1' : '0'}}>
            <div className="modal-header">
                <div>Carousel</div>
                <span className="close-modal-btn" onClick={close}>x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    <Carousel modalInfo={modalInfo} images={images} />
                </div>
            </div>
        </div>
    );
}

export default CarouselModal;
