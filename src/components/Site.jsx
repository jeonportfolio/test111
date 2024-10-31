import React from "react";

import { siteText } from "../constants";


const Site = () => {
  return (
          <section id="site">
          <div className="site__inner">
              <h2 className="site__title">Site coding <em>포트폴리오 다양한 버젼</em></h2>
              <div className="site__wrap">
                {siteText.map((site, key) => (
                      <article className={`site__item s${key+1}`} key={key}>
                      <span className="num">{key+1}</span>
                      {/* key값은 0이기 때문에 1을 더해줘야 한다. */}
                      <div className="text">
                          <div>{site.text[0]}</div>
                          <div>{site.text[1]}</div>
                          <div>{site.text[2]}</div>
                      </div>
                      <h3 className="title">
                          {site.title}
                      </h3>
                      <div className="btn">
                          <a href = {site.code} target="_blank" rel="noopener noreferrer">code보기</a>
                          <a href = {site.view}  target="_blank" rel="noopener noreferrer">site보기</a>
                      </div>
                      <div className="info">
                          <span>{site.info[0]}</span>
                          <span>{site.info[1]}</span>
                          <span>{site.info[2]}</span>
                      </div>
                  </article>
                ))}
                  
              </div>
          </div>
      </section>
  )
}

export default Site ;