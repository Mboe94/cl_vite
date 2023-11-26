import { MyNavbar, Hero, Introducerer, Produkt } from "./PageCollections";
import "../css/Home.css";
import home from "../pics/aa_home.png";
import fly from "../pics/b_fly.png";
import bar from "../pics/bar.png";

const Mystyles = {
  color: "red",
  // Add more styles as needed
};

export default function Home() {
  return (
    <div>
      <MyNavbar></MyNavbar>
      <Hero></Hero>
      <Introducerer></Introducerer>
      <div className="produkter_homepage_jsx">
        <Produkt
          name="CORELINES HOME"
          beskrivelse="Den mest alsidige model"
          corelines_img={home}
        />
        <Produkt
          name="CORELINES FLY"
          beskrivelse="Tag den med på rejsen"
          corelines_img={fly}
        />
      </div>
    </div>
  );
}
