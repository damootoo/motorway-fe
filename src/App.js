import React, { useEffect, useState, useRef } from 'react';
import Panel from './components/Panel'
import CarouselModal from './components/CarouselModal'
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { TimelineLite, Power2 } from 'gsap'
import './App.scss';
gsap.registerPlugin(CSSRulePlugin);

const App = () => {
  const [images, setImages] = useState();
  const [activeImage, setActiveImage] = useState(null);
  const [modalInfo, setModalInfo] = useState(null);
  const [modal, setModal] = useState(null)

  let container = useRef(null)
  let imageReveal = CSSRulePlugin.getRule('.img-container:after')


  let tl = new TimelineLite

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

  useEffect(()=> {
    console.log(container);
    tl.to(container, { duration: 0.5, css: { visibility: "visible" } })
        .to(imageReveal, { duration: 1, width: "0%", ease: Power2 })
  })

  const closeModalHandler = () => {
    setModal(false)
    setActiveImage(null)
  }

  const hideButton = () => {
    setActiveImage(null);
  };

  const showButton = (id) => {
    setActiveImage(id);
  };

  return (
    <div className='app'>
      <h1>Masonry Image Grid</h1>
      <div ref={el => container = el} className="container">
        {
          images && images.map((img, index) => (
            <Panel key={img.id} img={img} hideButton={hideButton} showButton={showButton} setModal={setModal} setModalInfo={setModalInfo} index={index} activeImage={activeImage} />
          ))
        }
      </div>
      {modal && <div className="modal-backdrop" onClick={() => setModal(false)}></div>}
      {modal && <CarouselModal modal={modal} close={closeModalHandler} modalInfo={modalInfo} images={images} />}
    </div>
  );
}

export default App;
