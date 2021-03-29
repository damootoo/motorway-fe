import React, { useEffect, useState } from 'react';

const CarouselModal = ({ modal, close }) => {

    return (
        <div className="modal-wrapper" style={{opacity: modal ? '1' : '0'}}>
            <div className="modal-header">
                <div>hello</div>
                <span className="close-modal-btn" onClick={close}>x</span>
            </div>
            <div className="modal-content">
                <div className="modal-body">
                    asjhdakjsdjhkasd
                </div>
            </div>
        </div>
    );
}

export default CarouselModal;
