import React from "react";
import "../CSS/Carts.css";
function Message() {
  return (
    <>
      <div className="message_container">
        <div className="main_message">
          <div className="message_title">
            <h4>Subscribe & Get News Updates</h4>
            <p className="message_detail">
              uis massa posuere commodo sed tortor ultrices accumsan augue.
              Aliquet bibendum placerat vivamus diam ullamcorper vitae sapien
              auctor ut. Suspendisse donec id aenean diam dolor nec vitae massa
              id. Velit nullam consequat orci amet fames sed. Amet tincidunt
              adipiscing varius maecenas adipiscing.
            </p>
          </div>
          <div className="input_field">
            <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" name="message" id="message" placeholder="Write your email here"/>
 <button  id="subscribe">Subscribe Now</button>

            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Message;
