import React from "react";
import Header from "../components/Header";
import Skip from "../components/Skip";
import Port from "../components/Port";
import Skill from "../components/Skill";
import Site from "../components/Site";
import Intro from "../components/Intro";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import Main from "../components/Main";


const HomeView = () => {
 
  return (
    <div>
        <Skip />
        <Header />
        <Main>
          <Intro /> 
          <Skill />
          <Site />
          <Port />
          <Contact />
        </Main>
        <Footer />
    </div>//부모역할의  div가 필요하다
  )
}

export default HomeView