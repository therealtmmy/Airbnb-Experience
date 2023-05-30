import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Card from "./Components/Card";
import HeroContents from "./Components/HeroContents";
import reportWebVitals from "./reportWebVitals";
import data from "./Components/data";

const root = ReactDOM.createRoot(document.getElementById("root"));

const cards = data.map((item) => {
  return (
    <Card 
      key={item.id}
      item={item}
    />
  );
});

root.render(
  <React.StrictMode>
    <Nav />
    <Hero />
    <HeroContents />
  <section className="card">
  {cards}
  </section>
  </React.StrictMode>
);

reportWebVitals();
