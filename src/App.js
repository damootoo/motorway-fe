import React, { useEffect, useState } from 'react';
import Panel from './components/Panel'
import CarouselModal from './components/CarouselModal'
import './App.scss';

const App = () => {
  const [images, setImages] = useState();
  const [activeImage, setActiveImage] = useState(null);
  const [modalInfo, setModalInfo] = useState(null);
  const [modal, setModal] = useState(null)

  const closeModalHandler = () => {
    setModal(false)
    setActiveImage(null)
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
          images && images.map((img, index) => (
            <Panel key={img.id} img={img} hideButton={hideButton} showButton={showButton} setModal={setModal} setModalInfo={setModalInfo} index={index} activeImage={activeImage}/>
          ))
        }
      </div>
      {modal && <div className="modal-backdrop" onClick={()=>setModal(false)}></div>}
      {modal && <CarouselModal modal={modal} close={closeModalHandler} modalInfo={modalInfo} images={images} />}
    </div>
  );
}

export default App;
