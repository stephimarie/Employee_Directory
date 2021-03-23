import React from "react";
import Banner from "../components/Banner/banner";

function About() {
  return (
    <div>
      <Banner
        backgroundImage="https://therainmakercompanies.com/wp-content/uploads/2018/06/Close-up-hands-group-working-on-laptop.jpeg"
        title="About This App"
        subtitle="This React app gives business professionals the ability to access their employees, and easily search, filter,
        and sort through their entire directory."
        buttonText="View Employee Directory"
        buttonRoute="/employee-directory"
      ></Banner>
    </div>
  );
}
export default About;
