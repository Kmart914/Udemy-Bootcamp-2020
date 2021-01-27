import React from "react";

function Footer(){

const year = new Date();
const currentYear = year.getFullYear();

return (
  <footer>
  <p>Kevin Martzolf - Copright {currentYear}</p>
  </footer>
);
}


export default Footer;
