import React, {useEffect} from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"//주소설정해주는 섹터
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";
import smooth from "./utils/smooth";
import link from "./utils/link";


const App = () => {
   
        useEffect( () => {
            smooth();
            link();
        }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/about" element={<AboutView />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;