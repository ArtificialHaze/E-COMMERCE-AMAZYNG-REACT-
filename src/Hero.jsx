import React from "react";
import HeroImg from "./assets/hero.png";
import { RiShoppingBagFill } from "react-icons/ri";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 3, type: "spring" };

  return (
    <div className="hero-container">
      <div className="hero-left">
        <span className="text1">Skin protection cream</span>
        <div className="text2">
          <span>Trending Collection</span>
          <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</span>
        </div>
      </div>
      <div className="hero-middle">
        <motion.div
          initial={{ bottom: "2rem" }}
          whileInView={{ bottom: "-10rem" }}
          transition={transition}
          className="blueCircle"
        ></motion.div>
        <img src={HeroImg} width={600} alt="Image" />
        <motion.div
          transition={transition}
          initial={{ right: "4%" }}
          whileInView={{ right: "-11%" }}
          className="cart2"
        >
          <RiShoppingBagFill />
          <div className="signup">
            <span>Best sign up offers.</span>
            <div>
              <BsArrowRight />
            </div>
          </div>
        </motion.div>
      </div>
      <div className="hero-right">
        <div className="traffic">
          <span>55k</span>
          <span>Monthly Traffic</span>
        </div>
        <div className="customers">
          <span>77k</span>
          <span>Happy Customers</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
