import React from 'react'

const Main = ( {children} ) => { //main 안에 컴포넌트 요소들을 집어 넣었기 때문에 children 사용
  return (
    <main id="main" role = "main">
        {children}
    </main>
  )
}

export default Main;