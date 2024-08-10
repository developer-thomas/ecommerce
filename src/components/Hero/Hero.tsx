import "./styles.css";
import { ModeThemeProps } from "../../models/ModeThemeProps";

import darkFacebook from "../../assets/facebook-dark.png";
import lightFacebook from "../../assets/facebook-light.png";
import darkInstagram from "../../assets/instagram-dark.png";
import lightInstagram from "../../assets/instagram-light.png";
import darkPinterest from "../../assets/pinterest-dark.png";
import lightPinterest from "../../assets/pinterest-light.png";
import hero from "../../assets/hero.png";

const Hero = ({ mode, setMode }: ModeThemeProps) => {
  return (
    <div className="hero">
      <div className="hero-left">
        <h3>Choose Your Favorite Watch</h3>
        <h1>SHOP JEWELLERY FOR</h1>
        <h1>EVERY OCCASION</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error rerum earum laudantium unde magni veniam
          suscipit, nemo aliquid consequatur at recusandae perferendis blanditiis, perspiciatis odio voluptatibus quasi,
          iste quia nisi?
        </p>
        <button>Show Watches</button>
        <div className="social">
          <img src={mode === "dark" ? lightFacebook : darkFacebook} alt="facebook icon" />
          <img src={mode === "dark" ? lightInstagram : darkInstagram} alt="instagram icon" />
          <img src={mode === "dark" ? lightPinterest : darkPinterest} alt="pinterest icon" />
        </div>
      </div>
      <div className="hero-right">
        <img src={hero} alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
