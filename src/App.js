import React, { useEffect, useState, useRef } from 'react';
import Panel from './components/Panel'
import CarouselModal from './components/CarouselModal'
import Form from './components/Form'
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/CSSRulePlugin";
import { TweenMax, TimelineLite, Power2 } from 'gsap'
import './App.scss';
gsap.registerPlugin(CSSRulePlugin);

const App = () => {
  const [images, setImages] = useState();
  const [activeImage, setActiveImage] = useState(null);
  const [modalInfo, setModalInfo] = useState(null);
  const [modal, setModal] = useState(null)
  const [form, setForm] = useState(false)

  let app = useRef(null)
  let textRef = useRef(null)
  let formRef = useRef(null)
  let content = useRef(null)
  
  
  useEffect(() => {
    let imageReveal = CSSRulePlugin.getRule('.img-container:after')
    let tl = new TimelineLite()

    const headlineFirst = content.children[0].children[0];
    const headlineSecond = headlineFirst.nextSibling;
    const headlineThird = headlineSecond.nextSibling;
    const headlineFourth = headlineThird.nextSibling;

    // Performance API to measure API speed
    performance.mark('imageApiCallStart')
    fetch('images?limit=10')
      .then(res => res.json())
      .then(data => {
        performance.mark('imageApiCallEnd')
        performance.measure('imageApiTest', 'imageApiCallStart', 'imageApiCallEnd')
        const performanceMeasure = performance.getEntriesByName('imageApiTest')
        console.log(performanceMeasure);
        console.log('Success:', data);
        setImages(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // Remove intiial flash from animation
    TweenMax.to(app, { duration: 0, css: { visibility: "visible" } })

    // Timeline animation sequence on pageload
    tl.staggerFrom([headlineFirst.children, headlineSecond.children, headlineThird.children, headlineFourth.children], 1, {
      y: -44,
    }, .4)
      .to(imageReveal, { duration: 1, width: "0%", ease: Power2, delay: 1 }, 0.3)


  }, []);


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
    <div className='app' ref={el => app = el}>
      <div ref={textRef}>
        <div ref={el => content = el}>
          <h1 className="title">
            <div>
              <div>Masonry </div>
            </div>
            <div>
              <div>Responsive</div>
            </div>
            <div>
              <div>Grid</div>
            </div>
            <div>
              <div className="form-link" onClick={()=>setForm(!form)}>Click to show {form ? 'images' : 'form'}</div>
            </div>
          </h1>
        </div>
      </div>
      { form ? <Form ref={formRef} /> :
        <div className="container">
          {
            images && images.map((img, index) => (
              <Panel key={img.id} img={img} hideButton={hideButton} showButton={showButton} setModal={setModal} setModalInfo={setModalInfo} index={index} activeImage={activeImage} />
            ))
          }
        </div>}
      {modal && <div className="modal-backdrop" onClick={() => setModal(false)}></div>}
      {modal && <CarouselModal modal={modal} close={closeModalHandler} modalInfo={modalInfo} images={images} />}
    </div>
  );
}

export default App;
