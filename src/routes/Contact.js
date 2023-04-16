import React from "react";
import Navbar from "../components/Navbar"
import Hero from "../components/Hero"
import ContactImg from "../images/2.jpg"

export default function Contact() {
    return (
      <div className="contact">
        <Navbar />
        <Hero
          className="hero-mid"
          imgUrl={ContactImg}
          title="Contact"
          btnClass="hidden"
        />
      </div>
    );
  }