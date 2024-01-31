import React, { useState } from 'react';

function Footer() {
  const [email, setEmail] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь будет ваш код для обработки email
    console.log(email); // Временно для тестирования
  };

    return (
      <div className='bottom' style={{ width: '100%', height: '100%', position: 'relative' }}>
        <div style={{ width: '64.09px', height: '19.81px', left: '0px', top: '7px', position: 'absolute' }}>
          <div style={{ width: '19.81px', height: '19.81px', left: '22.13px', top: '0px', position: 'absolute', background: '#394149' }}></div>
          <div style={{ width: '19.81px', height: '19.81px', left: '44.28px', top: '0px', position: 'absolute', background: '#394149' }}></div>
          <div style={{ width: '19.80px', height: '19.80px', left: '0px', top: '0px', position: 'absolute', background: '#394149' }}></div>
        </div>
        <div style={{ width: '227px', height: '147px', left: '213px', top: '0px', position: 'absolute' }}>
          <div style={{ width: '211px', height: '20px', left: '1px', top: '53px', position: 'absolute', color: 'rgba(34, 33, 54, 0.70)', fontSize: '14px', fontFamily: 'Poppins', fontWeight: '400', lineHeight: '28px', wordWrap: 'break-word' }}>Office: 4042 Imperial Road, UK</div>
          <div style={{ width: '226px', height: '20px', left: '1px', top: '127px', position: 'absolute', color: 'rgba(34, 33, 54, 0.70)', fontSize: '14px', fontFamily: 'Poppins', fontWeight: '400', lineHeight: '28px', wordWrap: 'break-word' }}>Email: inbox@finance.com</div>
          <div style={{ width: '178px', height: '20px', left: '1px', top: '90px', position: 'absolute', color: 'rgba(34, 33, 54, 0.70)', fontSize: '14px', fontFamily: 'Poppins', fontWeight: '400', lineHeight: '28px', wordWrap: 'break-word' }}>Help; (0411) 425 277 / 425</div>
          <div style={{ width: '113px', height: '21px', left: '0px', top: '0px', position: 'absolute', color: '#222136', fontSize: '18px', fontFamily: 'Poppins', fontWeight: '500', lineHeight: '28px', wordWrap: 'break-word' }}>Our Contact</div>
        </div>
        <div style={{ width: '85px', height: '21px', left: '555px', top: '0px', position: 'absolute', color: '#222136', fontSize: '18px', fontFamily: 'Poppins', fontWeight: '500', lineHeight: '28px', wordWrap: 'break-word' }}>About Us</div>
        <div style={{ width: '104px', height: '65px', left: '885px', top: '111px', position: 'absolute' }}>
          <div style={{ left: '3px', top: '0px', position: 'absolute', color: '#222136', fontSize: '18px', fontFamily: 'Poppins', fontWeight: '500', lineHeight: '28px', wordWrap: 'break-word' }}>Follow Us</div>
          <div style={{ width: '104px', height: '26px', left: '0px', top: '39px', position: 'absolute' }}>
            <div style={{ width: '26px', height: '26px', left: '0px', top: '0px', position: 'absolute', background: 'black' }}></div>
            <div style={{ width: '20px', height: '23px', left: '43px', top: '2px', position: 'absolute', background: 'black' }}></div>
            <div style={{ width: '22px', height: '22px', left: '82px', top: '2px', position: 'absolute', background: 'black' }}></div>
          </div>
        </div>
        <div style={{ width: '201px', height: '142px', left: '555px', top: '52px', position: 'absolute', color: 'rgba(34, 33, 54, 0.70)', fontSize: '14px', fontFamily: 'Poppins', fontWeight: '400', lineHeight: '24px', wordWrap: 'break-word' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo amet posuere porta vitae mi accumsan. Ultricies </div>
        
        <div className="subscribe-container">
          <div className="subscribe-title">Subscribe</div>
          <div className="email-input-container">
            
          <form className="subscribe-form" onSubmit={handleSubmit}>
      <input
        className="subscribe-input"
        placeholder="example@mail.com"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button className="subscribe-btn" type="submit">Submit</button>
    </form>
            {/* <div className="email-placeholder">Your Email</div>
            <input type="email" className="email-input" placeholder="Enter your email" />
            
            <button type="submit" className="subscribe-button">Subbbscribe</button>  */}
          </div>
        </div>
        {/* <div style={{ width: '280px', height: '84px', left: '878px', top: '0px', position: 'absolute' }}>
          <div style={{ left: '10px', top: '0px', position: 'absolute', color: '#222136', fontSize: '18px', fontFamily: 'Poppins', fontWeight: '500', lineHeight: '28px', wordWrap: 'break-word' }}>Subscribe</div>
          <div style={{ width: '280px', height: '40px', left: '0px', top: '44px', position: 'absolute', background: '#ECF0FC', borderRadius: '9px' }}>
            <div style={{ width: '74px', height: '11px', left: '19px', top: '14px', position: 'absolute', color: 'rgba(34, 33, 54, 0.80)', fontSize: '14px', fontFamily: 'Poppins', fontWeight: '400', lineHeight: '28px', wordWrap: 'break-word' }}>Your Email</div>
            <div style={{ width: '20px', height: '20px', left: '247px', top: '10px', position: 'absolute' }}>
              <div style={{ width: '16.36px', height: '16.13px', left: '2px', top: '2px', position: 'absolute', background: '#4270EC' }}></div>
            </div>
          </div>
        </div> */}
      </div>
    );
  }
  
  export default Footer;
  