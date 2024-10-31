import port01 from "../assets/img/port01.jpg"
import port02 from "../assets/img/port02.jpg"
import port03 from "../assets/img/port03.jpg"
import port04 from "../assets/img/port04.jpg"
import port05 from "../assets/img/port05.jpg"
import port06 from "../assets/img/port06.jpg"
import port07 from "../assets/img/port07.jpg"
import port08 from "../assets/img/port08.jpg"
import port09 from "../assets/img/port09.jpg"
import port10 from "../assets/img/port10.jpg"


export const headerNav = [
    {
        title: "intro",
        url:"#intro"
    },
    {
        title: "skill",
        url:"#skill"
    },
    {
        title: "site",
        url:"#site"
    },
    {
        title: "portfolio",
        url:"#port"
    },
    {
        title: "contact",
        url:"#contact"
    }
        //ul li a 를 배열화 시켜준 것이다.
]

export const introText = {
    title:"FRONTEND PORT",
    desc: ["사용기술스택 -> CLICK", "WELCOME"]
   
  }

  export const skillText = [
    {
      title: "도전을 멈추지 않는 프론트엔드를 꿈꾸는 '전선욱' 입니다.",
      desc: `자신의 부족한 점을 항상 되돌아보며 꾸준히 개발하는 것 자신의 역할에 최선을 다하며 역경이 와도 목표를 향해 꾸준히 나아가는것을 중요시 생각합니다
      웹디자인 기능사를 통해 프론트엔드의 꿈을 키워왔고  바리스타 자격증을 취득하여 카페에서 근무했으며 컴퓨터 활용능력과 마케팅 주식관련 지식으로 머니스테이션 인턴과정을 
      수행했습니다 이와 같이 결과물에 그치지 않고 발전시켜 나가는 것을 모토로 하고 있습니다.`
    },
   
    {
      title: "나에게 정직하다.",
      desc: `정직은 다른 사람보다 나에게 큰 의미를 부여해야 한다.      
    자신이 정직하지 않으면 진정으로 원하는 일을 열정적으로 밀고 나갈 수 없다.
    마음에서 우러나오는 일을 해야 정직해지며 삶을 더 즐길 줄 알게 된다.`
    }
  ]


  export const siteText = [
   
    {
        text: ["Documenting", "My Project", "on the Blog"],
        title: "나의 프로젝트 블로그에 기록하기",
        view: "https://blog.naver.com/turtleweb",
        info: [ 
            "자격증 후기 & AWS & 교내 공모전 & 경제 포스팅 & 사회적약자 대중교통 시스템",
        ],
    },
    {
        text: ["REACT.JS", "Wood Mode", "Portfolio Site"],
        title: "React.js 포트폴리오(첫번째 모드<나무 컨셉>)",
        code: "https://github.com/jeonportfolio/port2024-react",
        view: "/",
        info: [
            "REACT.js portfolio",
            "use stack : React.js, SCSS, gsap",
        ],
    },
    {
        text: ["NEXT.JS", "Dark Mode", "Portfolio Site"],
        title: "Next.js 포트폴리오(두번째 모드<무지개 컨셉>)",
        code: "https://github.com/jeonportfolio/port2024-next",
        view: "/",
        info: [
            "NEXT.js portfolio",
            "use stack : Next.js, SCSS, gsap",
        ],
    },
    {
        text: ["VUE.JS", "Rainbow Mode", "Portfolio Site"],
        title: "Vue.js 포트폴리오(세번째 모드<다크 컨셉>)",
        code: "https://github.com/jeonportfolio/port2024-vue",
        view: "/",
        info: [
            "VUE.js portfolio",
            "use stack : Vue.js, SCSS, gsap",
        ],
    },
   
  ];




export const portText = [
    {
        num: "01",
        title: "웹디자인기능사 사이트 (PC화면)",
        desc: "피그마 & HTML & CSS를 웹디자인기능사 기술을 활용한 사이트입니다. 저의 웹디자인기능사 공부법을 공유하였습니다.",
        img: port01,
        code: "https://github.com/jeonportfolio/FIGMA-WEB",
        view: "https://jeonportfolio.github.io/FIGMA-WEB/figma%20portfolio.html",
        name: "웹디자인 기능사",
    },
    {
        num: "02",
        title: "나만의 유튜브 사이트(반응형)",
        desc: "REACT & RAPID API를 활용해 나만의 자기개발 관련 카테고리를 구성한 유튜브 사이트 입니다 검색과 영상재생이 가능합니다. ★모바일에서 메뉴 생성은 로고클릭!! ",
        img: port02,
        code: "https://react-myyoutube.netlify.app",
        view: "https://react-myyoutube.netlify.app",
        name: "나만의 youtube",
    },
    {
        num: "03",
        title: "블로그 소개 페이지(PC버젼)",
        desc: "HTML/CSS/JAVA SCRIPT를 사용하여 자격증/aws/공모전 등 활동 기록들을 소개하는 페이지입니다. ",
        img: port03,
        code: "https://github.com/jeonportfolio/game-intro",
        view: "https://turtleweb.netlify.app/",
        name: "블로그 소개",
    },
    {
        num: "04",
        title: "인턴과정 소개 (PC 화면)",
        desc: "GSAP을 활용한 애니메이션을 추가하여 저의 인턴활동 과정을 소개하는 페이지입니다",
        img: port04,
        code: "https://github.com/jeonportfolio/GSAP-intern",
        view: "https://jeonportfolio.github.io/GSAP-intern/INTERN.html",
        name: "인턴과정 소개",
    },
    {
        num: "05",
        title: "게임 소개 페이지 (PC버젼)",
        desc: "GSAP을 활용해 javascript를 이용해 만든 3종 게임 소개 페이지 입니다.(새끼거북의 여행 & 지구를 지켜라 & 테트리스)",
        img: port05,
        code: "https://github.com/jeonportfolio/game-project",
        view: "https://gameintro.netlify.app",
        name: "GSAP게임소개",
    },
    {
        num: "06",
        title: "화려함의 정석 포트폴리오",
        desc: "화려하고 세련된 디자인과 다채로운 색상이 사용된 포트폴리오는 사용자를 홀릴 듯한 시각적인 매력을 지니고 있습니다. 포트폴리오 내의 각 작품들은 디테일한 디자인과 탁월한 시각적 표현력을 갖추고 있어, 주인공의 뛰어난 예술적 감각을 느낄 수 있습니다. 화려한 애니메이션 효과와 부드러운 전환은 사이트를 더욱 생동감 있게 만들어주며, 사용자들에게 색다른 경험을 선사합니다.",
        img: port06,
        code: "/",
        view: "/",
        name: "포트폴리오",
    },
    {
        num: "07",
        title: "패럴랙스 정석 포트폴리오",
        desc: "마치 예술작품을 감상하는 듯한 환상적인 경험을 선사하는 포트폴리오입니다. 패럴랙스 스크롤링을 활용하여 구성된 사이트는 사용자들에게 독특하고 멋진 시각적 효과를 제공합니다. 배경과 움직이는 요소들이 조화롭게 어우러져, 사이트 전반에 걸쳐 깊이와 입체감을 느낄 수 있습니다. 스크롤에 따라 움직이는 요소들은 마치 세계를 탐험하는 듯한 느낌을 주며, 사용자들을 끌어들이는 매력적인 요소로 작용합니다.",
        img: port07,
        code: "/",
        view: "/",
        name: "포트폴리오",
    },
    {
        num: "08",
        title: "트랜지션 포트폴리오",
        desc: "화면 전환과 요소들의 흐름이 순조롭고 매끄러운 작품들로 가득한 포트폴리오 사이트입니다. 페이지 간의 트랜지션은 마치 이야기를 풀어내는 듯한 흥미진진한 경험을 선사합니다. 트랜지션 효과의 적절한 활용은 작품들을 보다 동적이고 생동감 있게 만들어줍니다. 각 페이지의 이동이 자연스럽고 사용자들이 원활하게 사이트를 탐색할 수 있도록 배려된 구성은 개발자의 디자인 능력을 잘 보여주는 특징입니다.",
        img: port08,
        code: "/",
        view: "/",
        name: "포트폴리오",
    },
    {
        num: "09",
        title: "스크롤의 정석 포트폴리오",
        desc: "스크롤링을 활용하여 훌륭한 사용자 경험을 선사하는 포트폴리오 사이트입니다. 스크롤을 내리면서 작품들이 순차적으로 나타나고 효과적으로 전환되는 것은 마치 예술적인 이야기를 읽어나가는 듯한 느낌을 주며 사용자를 매료시킵니다. 스크롤의 움직임을 통해 작품들이 서서히 드러나고, 각 페이지 간의 전환은 자연스럽고 부드럽습니다. 이러한 트랜지션과 애니메이션들이 작품들의 내용과 테마를 더욱 강조해줍니다.",
        img: port09,
        code: "/",
        view: "/",
        name: "포트폴리오",
    },
    {
        num: "10",
        title: "모던함의 정석 포트폴리오",
        desc: "현대적이고 세련된 디자인으로 가득한 포트폴리오 사이트입니다. 모던한 느낌과 세심한 디테일이 조화를 이루며, 사용자에게 신선하고 품격 있는 경험을 제공합니다. 사이트의 디자인은 깔끔하고 단정하면서도 특유의 감성과 풍부한 표현력이 느껴집니다. 간결한 레이아웃과 모던한 색상 선택은 주인공의 디자인 감각을 잘 보여주는 특징입니다.",
        img: port10,
        code: "/",
        view: "/",
        name: "포트폴리오",
    },
    {
        num: "11",
        title: "모던함의 정석 포트폴리오",
        desc: "현대적이고 세련된 디자인으로 가득한 포트폴리오 사이트입니다. 모던한 느낌과 세심한 디테일이 조화를 이루며, 사용자에게 신선하고 품격 있는 경험을 제공합니다. 사이트의 디자인은 깔끔하고 단정하면서도 특유의 감성과 풍부한 표현력이 느껴집니다. 간결한 레이아웃과 모던한 색상 선택은 주인공의 디자인 감각을 잘 보여주는 특징입니다.",
        img: port10,
        code: "/",
        view: "/",
        name: "포트폴리오",
    },

];


export const contactText = [
 
    {
        link: "mailto:etoile929@naver.com",
        title: "mail : etoile929@naver.com",
    },
  ];

  export const footerText = [
    {
        title: "github",
        desc: "깃헙",
        link: "/",
    },
    {
        title: "blog",
        desc: "블로그",
        link: "/",
    },
    {
        title: "Linked In",
        desc: "링크드인",
        link: "/",
    },
    
  ];