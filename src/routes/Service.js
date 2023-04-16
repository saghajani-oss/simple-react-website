import React from "react";
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ServiceImg from "../images/1.jpg"

export default function Sevice() {
    return (
      <div className="service">
        <Navbar />
        <Hero
          className="hero-mid"
          imgUrl={ServiceImg}
          title="Service"
          btnClass="hidden"
        />
      </div>
    );
}