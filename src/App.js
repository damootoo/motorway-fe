import React, { useEffect, useState } from 'react';
import ImageBanner from './components/ImageBanner'
import CarouselModal from './components/CarouselModal'
import './App.scss';

const App = () => {
  const [images, setImages] = useState();
  const [activeImage, setActiveImage] = useState(null);
  const [modal, setModal] = useState(null)

  const closeModalHandler = () => {
    setModal(false)
  }

  useEffect(() => {
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  const hideButton = () => {
    setActiveImage(null);
  };

  const showButton = (id) => {
    setActiveImage(id);
  };

  return (
    <div className='app'>
      <div className="container">
        {
          images && images.map(img => (
            <div key={img.id} className='panel-container' onMouseEnter={() => showButton(img.id)}
              onMouseLeave={() => hideButton(img.id)} onClick={()=>setModal(true)}>
              <div className={`${activeImage === img.id && 'hover'} img-container`} >
                <img src={img.url} alt='' />
              </div>
              <ImageBanner activeImage={activeImage === img.id} key={`banner-${img.id}`} url={img.user.profile_image} user={img.user.name} />
            </div>
          ))
        }
      </div>
      {modal && <div className="modal-backdrop"></div>}
      <CarouselModal modal={modal} close={closeModalHandler}/>
    </div>
  );
}

export default App;
