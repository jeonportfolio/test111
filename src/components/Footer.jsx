import React from "react";

import { footerText } from "../constants";


const Footer = () => {
  return (
      <footer id="footer" role="contentinfo">
          <div className="footer__inner">
              <div className="footer__text">
                  <span>jeon</span>
                  <span>© jeon's</span>
              </div>
              <div className="footer__info">
                  <div className="left">
                      <div className="title">
                          <a href="/">😄</a>
                      </div>
                      <p>읽어주셔서 감사합니다!!</p>
                  </div>
                  <div className="right">
                      <h3>social</h3>
                      <ul>
                          {footerText.map((footer, key) => (
                               <li key={key}>
                                  <a href={footer.link}>{footer.title}</a>
                                  <em>{footer.desc}</em>
                               </li>
                          ))}
                          
                      </ul>
                  </div>
              </div>
              <div className="footer__right">
                  © 2024 jeon<br />
                  이 사이트는 리액트를 이용하여 제작하였습니다.
              </div>
          </div>
      </footer>
  );
};


export default Footer;