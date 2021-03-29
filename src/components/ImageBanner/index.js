import React from 'react';

const ImageBanner = ({ url, alt, activeImage, user }) => {

    return (
        <div className={`${activeImage ? 'show' : 'hide'} image-banner`}>
            <div className="avatar-container">
                <img src={url} alt={alt} />
            </div>
            <div className="avatar-user">Author: {user}</div>
        </div>
    );
}

export default ImageBanner;
