import React from "react";
import Navbar from "../components/Navbar"
import Hero from "../components/Hero";

export default function Home() {
    return (
      <div className="home">
        <Navbar />
        <Hero
          className="hero"
          imgUrl="https://adventurecenter.com.pk/wp-content/uploads/2021/12/jeep_2.jpg"
          title="Your Journey Your Story"
          text="Choose Your Favourite Destination"
          btnUrl="/"
          btnClass="show"
          btnText="Travel Plan"
        />
      </div>
    );
}