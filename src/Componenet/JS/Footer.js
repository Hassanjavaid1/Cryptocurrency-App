import React from "react";
import "../CSS/Footer.css";
import { MdOutlineMail } from "react-icons/md";
import { RiFacebookFill } from "react-icons/ri";
import { LuGithub } from "react-icons/lu";
import { TbBrandFiverr } from "react-icons/tb";
import { SiUpwork } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa6";
import logo from "../Photos/main-logo.png";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="sub_footer">
          <div className="footer-item">
            <img src={logo} alt="logo" />
            <p className="footer_text">
              Posuere ac in in nisl sed augue. Ultrices eget pretium sit euismod
              mi id posuere ac in in nisl sed augue.
            </p>
          </div>
          <div className="about_me">
            <div className="footer_social_title">About Me</div>
            <div className="sub_about_me">
              <a
                className="footer_tag"
                href="https://hassanjavaid1.github.io/MyPortfolioWebsite"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Me
              </a>
            </div>
            <div className="sub_about_me">Features</div>
            <div className="sub_about_me">News</div>
          </div>
          <div className="about_me">
            <div className="footer_social_title">Company</div>
            <div className="sub_about_me">CRYPTOCODE</div>
            <div className="sub_about_me">SECURITY</div>
            <div className="sub_about_me">RANKINGS</div>
          </div>
          <div className="about_me">
            <div className="footer_social_title">Support</div>
            <div className="sub_about_me">FAQS</div>
            <div className="sub_about_me">SUPPORT</div>
            <div className="sub_about_me">CONTACT US</div>
          </div>
          <div className="get_in_touch">
            <div className="footer_social_title">Get In Touch</div>
            <a
              href="mailto:hassanjavaid159@gmail.com"
              className="footer_social_link"
            >
              <span className="social_link_icon">
                <MdOutlineMail />
                hassanjavaid159@gmail.com
              </span>
            </a>

            <div className="sub_footer_social_media">
              <h4 className="Footer_social_follow">Follow Me</h4>
              <div className="footer_social_media">
                <a
                  href="https://www.linkedin.com/in/hassan-javaid-aa7610290/"
                  className="footer_icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedinIn className="react_footer_icon" />
                </a>
                <a
                  href="https://web.facebook.com/profile.php?id=61551678367934"
                  className="footer_icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <RiFacebookFill className="react_footer_icon" />
                </a>
                <a
                  href="https://github.com/hassanjavaid1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer_icon"
                >
                  <LuGithub className="react_footer_icon" />
                </a>
                <a
                  href="https://www.fiverr.com/hassanjavaid121?up_rollout=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer_icon"
                >
                  <TbBrandFiverr className="react_footer_icon" />
                </a>
                <a
                  href="https://www.upwork.com/freelancers/~01c469c95425efc4ca"
                  className="footer_icon"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiUpwork className="react_footer_icon" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="main_footer">
        <div className="sub_main">
          <p id="copyright">
            &copy;2024 Copyright.Website Developed by{" "}
            <span>Hassan javaid!</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
