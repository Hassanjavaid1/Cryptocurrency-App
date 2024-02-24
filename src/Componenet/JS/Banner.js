import React from "react";
import banner from '../Photos/banner-image.png'
import associate_1 from '../Photos/association-brand1.png'
import associate_2 from '../Photos/association-brand2.png'
import associate_3 from '../Photos/association-brand3.png'
import associate_4 from '../Photos/association-brand4.png'
import associate_5 from '../Photos/association-brand5.png'
import '../CSS/Navbar.css'
function Banner() {
  return (
    <>
      <div className="banner">
        <div className="banner_content">
          <img src={banner} alt="" id="banner_img" />
          <div className="main_content">
            <h1>Make Easier Your Crypto Transactions.</h1>
            <p className="para">
              Our cryptocurrency offers a fast, secure, and affordable
              alternative for all of your financial needs. Join the
              cryptocurrency revolution today and take control of your financial
              future. Sign up now to start using our platform for yourself.
            </p>
            <button className="banner_btn">Try for free!</button>
          </div>
        </div>
        <div className="associate_brands">
          <img src={associate_1} alt="" className="brand" />
          <img src={associate_2} alt="" className="brand" />
          <img src={associate_3} alt="" className="brand" />
          <img src={associate_4} alt="" className="brand" />
          <img src={associate_5} alt="" className="brand" />
        </div>
      </div>
    </>
  );
}

export default Banner;
