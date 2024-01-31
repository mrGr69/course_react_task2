
import React from 'react';
 // Убедитесь, что путь к файлу CSS правильный
import TestimonialSlider from './TestimonialSlider';

function Main() {
  return (
    <main>
      <div className="block">
        <div className="welcome">
          <div className="welcome-text">
            <h5>Creative work, creative mind</h5>
            <h1>We Are Digital Creative Agency</h1>
            <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabi sed metus id et viverra augue</h3>
            <a href="#">Get in Touch</a> {/* Стили для кнопки и hover должны быть в CSS */}
          </div>
          <div className="welcome-picture"></div> {/* Для изображений используйте img теги если нужно */}
          <div className="welcome-picture2"></div> {/* Для изображений используйте img теги если нужно */}
        </div>
        <div className="wrapper">
          <ul className="list">
            <li>
              <h2>Design</h2>
              <h3>Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus  id et viverra augue.</h3>
            </li>
            <li>
              <h2>Development</h2>
              <h3>Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus  id et viverra augue.</h3>
            </li>
            <li>
              <h2>Testing & QA</h2>
              <h3>Lorem ipsum dolor sit amet, conse adipiscing elit. Curabi sed metus  id et viverra augue.</h3>
            </li>
          </ul>
        </div>
        <div className="about">
          <div className="about-phone">
            <div>
              <img src="img/about_phone.png" width="470" height="500" alt="" />
            </div>
          </div>
          <div className="abour-text">
            <h5>About Us</h5>
            <h2>Design & Develop For Better Solution</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies mauris, habitasse nec mauris sagittis imperdiet lobortis porttitor. Ipsum mi sed uta aliquet ut. Turpis viverra volutpat sed eu porta morbi egesta ut   hac rutrum ut augue vitae, nec, ut. Nibh nibh quam</p>
            <a href="#">Learn More</a>
          </div>
        </div>
        <div className="studios">
          <div className="studios-text">
            <div className="text-left">
              <h5>Portfolio</h5>
              <h2>View Our Case Studies</h2>
            </div>
            <div className="text-right">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies mauris, hab</p>
              <a href="#">View All </a> {/* Стрелочку можно добавить через CSS или как символ Unicode */}
            </div>
          </div>
          <div className="studios-phone2">
            <img src="img/portfolio1.png" alt="#" />
          </div>
          <div className="studios-phone3">
            <img src="img/portfolio2.png" alt="#" />
          </div>
          <div className="studios-phone4">
            <img src="img/portfolio3.png" alt="#" />
          </div>
        </div>
        <div className="clients">
          <div className="testimonial-container">
        <div className="testimonial-header">
          <h4>TESTIMONY</h4>
          <h1>What Do Our Clients Say About Us</h1>
        </div>

        <TestimonialSlider />
      </div>
      <div className="blog">
        <div className="blog-text">
          <h5>Blog</h5>
          <h2>Read Our News</h2>
        </div>
        <div className="blog-content">
          <ul className="list2">
            <li className="list2-li">
              <div className="list2-text">
                <h4>09 April, 2022<span></span> by Admin</h4>
                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam</p>
                <a href="#">Read More</a>
              </div>
            </li>
            <li className="list2-li">
              <div className="list2-text">
                <h4>09 April, 2022<span></span> by Admin</h4>
                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam</p>
                <a href="#">Read More</a>
              </div>
            </li>
            <li className="list2-li">
              <div className="list2-text">
                <h4>09 April, 2022<span></span> by Admin</h4>
                <p>Lorem ipsum dolor sit amet, consecte adipiscing elit ut aliquam</p>
                <a href="#">Read More</a>
              </div>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="card">
        <div className="card-block">
          <h2>We Like To Start Your Project With Us</h2>
          <a href="#">Get in Touch</a>
        </div>
      </div>
    </div>
      </div>
    </main>
  );
}

export default Main;
