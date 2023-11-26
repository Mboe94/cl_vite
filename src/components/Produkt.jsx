// Produkt.jsx
import React from "react";
import "../css/Produkt.css";
import home from "../pics/aa_home.png";

function Produkt(props) {
  return (
    <div className="produkter_main_div">
      <div className="produkt_div">
        <h1>{props.name}</h1>
        <h2>{props.beskrivelse}</h2>
        <img
          className="produkt_img_homepage"
          src={props.corelines_img}
          alt={props.name}
        />
        <button className="btn se_produkt_btn">Se produkt</button>
      </div>
    </div>
  );
}

export default Produkt;
