import React, { useEffect, useState } from 'react';

const ImageBanner = ({ url, activeImage, user }) => {

    return (
        <div className={`${activeImage ? 'show' : 'hide'} image-banner`}>
            <div className="avatar-container">
                <img src={url} alt='' />
            </div>
            <div className="avatar-user">Author: {user}</div>
        </div>
    );
}

export default ImageBanner;
