import Header from '../../components/Header';
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'

import './about.css';

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam hic explicabo iure omnis quod aliquam dolor ea nesciunt ullam eligendi!
      </Header>

      <section className="about_story">
        <div className="container about_story-container">
          <div className="about_section-image">
            <img src={StoryImage} alt="Our Story Image" />
          </div>
          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, illum. Vitae, enim eaque. Enim reprehenderit soluta sapiente in aliquam? Aperiam veritatis, dolor asperiores odit rem cupiditate non excepturi maiores molestias nobis dicta consequatur quia necessitatibus natus perferendis aliquid sit dolor.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa a eos excepturi dignissimos quo quasi expedita omnis pariatur libero! Provident cumque consectetur enim animi Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt, corporis? repudiandae accusantium ipsum?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam nostrum esse provident quaerat laborum facere.</p>
          </div>
        </div>
      </section>

      <section className="about_vision">
        <div className="container about_vision-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde voluptates, amet aut temporibus quia eos voluptate non vitae consequuntur adipisci. adipisicing elit. Inventore, illum. Vitae, enim eaque. Enim reprehenderit soluta sapiente in excepturi maiores molestias nobis dicta consequatur quia necessitatibus natus At amet odit sit dolor.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa a eos excepturi dignissimos quo quasi expedita et alias beatae libero! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam, labore? Provident cumque ipsum?</p>
          </div>
           <div className="about_section-image">
            <img src={VisionImage} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about_mission">
        <div className="container about_mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt="Our Mission Image" />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, illum. Vitae, enim eaque. Enim reprehenderit soluta sapiente in aliquam? Aperiam veritatis, dolor asperiores odit rem cupiditate non excepturi maiores dolor.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa a eos excepturi dignissimos quo quasi expedita et alias beatae omnis pariatur libero!</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus quisquam nostrum esse provident.</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
