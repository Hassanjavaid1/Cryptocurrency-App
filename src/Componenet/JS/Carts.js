import React from "react";
import "../CSS/Carts.css";
import single_img1 from "../Photos/single-image1.png";
import single_img2 from "../Photos/single-image2.png";
function Carts() {
  return (
    <>
      <div className="cart_container">
        <div className="cart_content">
          <div className="content">
            <img src={single_img1} alt="" className="result_img" />
            <div className="result_text">
              <h3>Track Your Earnings And Cryptocode Made It Easy</h3>
              <p className="result_para">
                Nulla dui ultrices sed nam ligula dignissim tellus. Sem semper
                lorem facilisis ut amet tincidunt adipiscing maecenas.
              </p>
            </div>
          </div>
          <div className="content">
            <div className="result_text">
              <h3>Trust Us Due To Our Safe And Convenient Deposit</h3>
              <p className="result_para">
                Tristique morbi scelerisque vitae. Nulla dui ultrices sed nam
                ligula dignissim tellus semper lorem facilisis ut. Amet
                tincidunt adipiscing varius maecenas adipiscing.
              </p>
            </div>
            <img src={single_img2} alt="" className="result_img" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Carts;
