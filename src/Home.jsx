import React from 'react';
import OrangeImage from './assets/flying-orange.png';
import ChickenBreastImage from './assets/chickenbreast.png';
import BroccoliImage from './assets/broccoli.png';
import BeetImage from './assets/beetroot.png';
import MeatImage from './assets/meat.png';
import EggImage from './assets/egg.png';
import MilkImage from './assets/milk.png';
import TomatesImage from './assets/tomates.png';
import ShrimpImage from './assets/shrimp.png';
import SalmonImage from './assets/salmon.png';

const Home = () => {
  return (
    <div className="home">
      <div className="text-container">
        <h1>Welcome to the Health Eats Lab</h1>
        <h2>In here, you can search up your favourite food or recipe by entering the keyword,</h2>
        <h2>Calculate your BMI to find the best food diet.</h2>
        <h2>Press <a href="/recipe">Here</a> to start!</h2>
      </div>
      <div className="image-container">
        <img src={OrangeImage} alt="Flying Orange" className="flying-image-orange" />
      </div>
      <div className="image-container">
        <img src={ChickenBreastImage} alt="Flying Chicken Breast" className="flying-image-chicken" />
      </div>
      <div className="image-container">
        <img src={BroccoliImage} alt="Flying Broccoli" className="flying-image-broccoli" />
      </div>
      <div className="image-container">
        <img src={BeetImage} alt="Flying Beet Root" className="flying-image-beet" />
      </div>
      <div className="image-container">
        <img src={MeatImage} alt="Flying Meat" className="flying-image-meat" />
      </div>
      <div className="image-container">
        <img src={EggImage} alt="Flying Egg" className="flying-image-egg" />
      </div>
      <div className="image-container">
        <img src={MilkImage} alt="Flying Milk" className="flying-image-milk" />
      </div>
      <div className="image-container">
        <img src={TomatesImage} alt="Flying Tomates" className="flying-image-tomates" />
      </div>
      <div className="image-container">
        <img src={ShrimpImage} alt="Flying Shrimp" className="flying-image-shrimp" />
      </div>
      <div className="image-container">
        <img src={SalmonImage} alt="Flying Tomates" className="flying-image-salmon" />
      </div>
    </div>
  );
};

export default Home;