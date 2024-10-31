import React from "react"

import { skillText } from "../constants";

const Skill = () => {
  return (
        <section id="skill">
        <div className="skill__inner">
            <h2 className="skill__title">전선욱 <em>WHO AM I?</em></h2>
            <div className="skill__desc">
                 {skillText.map((skill, key) => (
                     <div key={key}>
                          <span>{key+1}</span> 
                          {/* 0부터 나오기 때문에 +1을 해준것 */}
                          <h3>{skill.title}</h3>
                          <p >{skill.desc}</p>
                      </div>
                 ))}
                        <div>
                            <span>{4}</span> 
                            <h3>학력 및 자격사항</h3>
                            <p > ▶한국공학대학교(IT경영학과)(2019.03 ~ 2025.02(졸업예정))<br/>
                                 ▶머니스테이션(인턴과정(실습 및 파트) 2024.01.02 ~ 2024.12.01)(마케팅부서) <br/>
                                 ▶웹디자인 기능사<br/>
                                 ▶OPIC IH등급<br/>
                                 ▶SQLD<br/>
                                 ▶컴퓨터활용능력2급<br/>
                                 ▶교내 공모전 -팀 프로젝트 APP 기획- 우수상<br/>
                                 ▶운전면허 보통 2종 <br/>
                                 ▶바리스타 2급 <br/>
                            </p>
                        </div>
             </div>   
         </div>
       </section>
    
      )
  }

export default Skill;