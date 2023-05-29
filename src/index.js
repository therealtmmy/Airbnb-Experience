import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import HeroContents from "./Components/HeroContents";
import reportWebVitals from "./reportWebVitals";
import Image from "./Components/image 12.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <HeroContents />
    <Card
      img={Image}
      rating="5.0"
      reviewCount={6}
      country="Nigeria"
      title="Life Lessons with Katie Zaferes"
      price={136}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
