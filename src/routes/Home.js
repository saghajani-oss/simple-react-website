import React from "react";
import Navbar from "../components/Navbar"
import Hero from "../components/Hero";
import HomeImg from "../images/12.jpg";

export default function Home() {
    return (
      <div className="home">
        <Navbar />
        <Hero
          className="hero"
          imgUrl={HomeImg}
          title="Your Journey Your Story"
          text="Choose Your Favourite Destination"
          btnUrl="/"
          btnClass="show"
          btnText="Travel Plan"
        />
      </div>
    );
}