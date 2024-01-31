import React, { useState, useEffect } from 'react';
import './css/style.css';

const TestimonialSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est ullamcorper mattis lacus eu, ornare imperdiet men sana in condimentum.',
      author: 'JAMES JOKOVIC - IT CONSULTANT',
      image: `${process.env.PUBLIC_URL}img/burger1.svg`
    },
    {
      text: 'Molestiae dolores amet officia necessitatibus magnam sapiente officiis dignissimos accusamus, ex rerum eum. Officia reprehenderit esse atque perferendis quis ab laborum fugit.',
      author: 'Valeriy Miloshovych - IT CONSULTANT',
      image: `${process.env.PUBLIC_URL}img/burger2.svg`
    },
    {
      text: 'Qui laboriosam voluptatibus aut enim excepturi, debitis eos. Quibusdam asperiores deleniti, nam ipsam atque sed soluta impedit dolores, saepe accusantium, placeat animi? Ad numquam soluta dolores laborum aperiam.',
      author: 'Maxim Kozlov - IT CONSULTANT',
      image: `${process.env.PUBLIC_URL}img/burger3.svg`
    },
  ];
  const autoPlayInterval = 5000; // Автопереключение каждые 5 секунд

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((currentSlide + 1) % slides.length);
    }, autoPlayInterval);

    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  const changeSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="testimonial-slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`testimonial-slide ${index === currentSlide ? 'active' : ''}`}>
            <div className="testimonial-images">
              <img src={`${process.env.PUBLIC_URL}/img/burger1.svg`} alt="Клиент" style={{ width: '70px' }} className="testimonial-side-image"/>
              <img src={`${process.env.PUBLIC_URL}/img/burger2.svg`} alt="Клиент" style={{ width: '50px' }} className="testimonial-side-image"/>
              <img src={`${process.env.PUBLIC_URL}/img/burger3.svg`} alt="Клиент" style={{ width: '30px' }} className="testimonial-side-image"/>
              <img src={slide.image} alt={`Слайд ${index}`} className="testimonial-main-image"/>
              {/* <img src={`${process.env.PUBLIC_URL}/img/burger.svg`} alt="Центральный клиент" className="testimonial-main-image" /> */}
              <img src={`${process.env.PUBLIC_URL}/img/burger4.svg`} alt="Клиент" style={{ width: '30px' }} className="testimonial-side-image"/>
              <img src={`${process.env.PUBLIC_URL}/img/burger5.svg`} alt="Клиент" style={{ width: '50px' }} className="testimonial-side-image"/>
              <img src={`${process.env.PUBLIC_URL}/img/burger6.svg`} alt="Клиент" style={{ width: '70px' }} className="testimonial-side-image"/>
            </div>
              <p className="testimonial-text">{slide.text}</p>
              <p className="testimonial-author">{slide.author}</p>
        </div>
      ))}
    { <div className="testimonial-pagination">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => changeSlide(index)}
          ></span>
        ))}
      </div>
    }
      </div>
  );
};

export default TestimonialSlider;
