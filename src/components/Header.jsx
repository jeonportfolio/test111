import React, {useState} from "react"

import { headerNav } from "../constants";


const Header = () => {
    const[show, setShow] = useState(false);

    const toggleMenu = () => {
       setShow((prevShow) => !prevShow);
    }
    // true의 값이 되면 false가 되고 false가 되면  true가 되라는 명령
  return (
    <header id="header" role="banner">
    <div className="header__inner">
        <div className="header__logo">
            <a href="/">portfolio<em>react.js(WOOD CONCEPT)</em></a>
        </div>
        <nav 
            className={`header__nav ${show ? "show" : ""}`} 
            role="navigation" 
            aria-label="메인메뉴"
        >
            <ul>
                {headerNav.map((nav, key) => (
                    <li key={key}>
                        <a href={nav.url}>{nav.title}</a>
                    </li>
                ))}
                {/* key값을 부여해 각각의 인덱스의 고유의 값을 부여해 에러가 나지 않게 한다. */}
                {/* 위에 정의한 headerNav의 값을 가져오는 스크립트 또한 react에서는 class를 쓰지 않는다 className*/}
            </ul>
        </nav>
        <div 
            className="header__nav__mobile" 
            id="headerToggle" 
            aria-controls="primary-menu" 
            aria-expanded={show ? "true" : "false"}
            role="button" 
            tabIndex="0" //모바일일때 tab키를 누르면 바로 메뉴로 갈 수 있게 해줌 
            onClick={toggleMenu}
        >
                <span></span>
            </div>
        </div>
  </header>

  )
}

export default Header;