import React, { useEffect, useState } from 'react';
import ImageBanner from '../ImageBanner'

const Panel = ({ img, showButton, hideButton, setModal, setModalInfo, index, activeImage }) => {

    return (
        <div key={img.id} className='panel-container' onMouseEnter={() => showButton(img.id)}
            onMouseLeave={() => hideButton(img.id)} onClick={() => {
                setModalInfo({ image: img.url, index })
                setModal(true)
            }}>
            <div className={`${activeImage === img.id && 'hover'} img-container`} >
                <img src={img.url} alt='' />
            </div>
            <ImageBanner activeImage={activeImage === img.id} key={`banner-${img.id}`} url={img.user.profile_image} user={img.user.name} />
        </div>
    );
}

export default Panel;
