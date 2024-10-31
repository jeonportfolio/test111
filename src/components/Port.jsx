import React, { useEffect, useRef } from "react";

import { portText } from "../constants";
import {gsap} from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";  


const Port = () => {
    const horizontalRef = useRef(null);
    const sectionRef = useRef([]);
    // react에서 가로모드 gsap을 쓰려면 전체적인 길이를 알아야 하기떄문에 useRef를 사용한다. 
    // useEffect(() => {
    //     gsap.registerPlugin(ScrollTrigger);

    //     const horizontal = horizontalRef.current;
    //     const sections = sectionRef.current;
    
    //     let scrollTween =gsap.to(sections, {
    //         xPercent: -100 * (sections.length -1),
    //         // 현재의 넓이는 빼주는 것 
    //         ease: "none",
    //         scrollTrigger: {
    //             trigger: horizontal,
    //             start: "top 30px",
    //             end: () => "+=" + horizontal.offsetWidth,
    //             pin: true,
    //             scrub: 1,
    //             markers: false,
    //             invalidateOnRefresh: true,
    //             anticipatePin: 1,
    //         }
    //     })
    //     return () => {
    //         scrollTween.kill();
    //         //port부분에 따로 만든 스크립트이기 때문에 다른 섹션으로 넘어갈때는 이 gsap가 꺼지게 해야 안깨진다.
    //     }
    // },[]);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
    
        const horizontal = horizontalRef.current;
        const sections = sectionRef.current;
    
        let scrollTween = gsap.to(sections, {
            xPercent: -100 * (sections.length - 1),
            ease: "none",
            scrollTrigger: {
                trigger: horizontal,
                start: "top top",
                end: () => "+=" + horizontal.offsetWidth,
                pin: true,
                scrub: 1,
                markers: false,
                invalidateOnRefresh: true,
                anticipatePin: 1,
            },
        });
    
        const handleResize = () => {
            ScrollTrigger.refresh();
        };
    
        window.addEventListener("resize", handleResize);
    
        return () => {
            scrollTween.kill();
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    

  return (
            <section id="port" ref={horizontalRef}> 
            <div className="port__inner">
                <div className="port__title">
                    portfolio <em> ★사진클릭 → 깃허브 이동 or 사이트보기 클릭 → 사이트 이동 </em>
                </div>
                <div className="port__wrap">
                    
                    {portText.map((port, key) => (
                            <article 
                                className={`port__item p${key+1}`} 
                                key={key}
                                ref={(el) => (sectionRef.current[key] = el)}
                                //10개의 섹션이 있는데 한개의 길이도 알아야 한다. 각각의 값을 구하는 수 
                            >
                                    <span className="num">{port.num}.</span>
                                    <a href={port.code} target="_blank" className="img" rel="noreferrer noopener">
                                        <img src={port.img} alt= {port.name} />
                                    </a>
                                    <h3 className="title">{port.title}</h3>
                                    <p className="desc">{port.desc}</p>
                                    <a href={port.view} target="_blank" className="site" rel="noreferrer noopener">사이트보기</a>
                             </article>
                    ))}
                </div>
            </div>
        </section>
        
     )
   }

export default Port;