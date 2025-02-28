import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './About.css';
import TopHeader from '../Home/Header/TopHeader';
import Header from '../Home/Header/Header';
import Footer from '../Home/Footer/Footer';
import visionImg from '../../Images/About-right.png';
import missionImg from '../../Images/About-left.png';
import BottomFooter from '../Home/Footer/BottomFooter';

const About = () => {
  return (
    <>
      <TopHeader />
      <Header />

      {/* About Us Banner Section */}
      <section className="about-us-section">
        <div className="container-fluid p-0">
          <div className="row">
            <div className="col-12">
              <div className="about-us-background">
                <h1 className="about-us-heading">About Us</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About The Company Section */}
      <section className="about-company-section py-5">
        <div className="container">
          <h2 className="text-center about-title">About The Company</h2>
          <p className="text-center about-text">
            KISANeSTORE is a venture of Kisan E-Store Pvt. Limited, which is the First Agro-eStore in India to launch a 
            complete range of agro-inputs & agro-services. We have associated the complete Ag-industry under one roof 
            for successful e-business of KISANeSTORE. Kisan E-Store Pvt. Limited is into the business of E-marketing of 
            Agro Inputs like Bio-Pesticides, Seeds, Fertilizers, Insecticides, Tissue-Culture, Green House, Irrigation Systems, 
            Cattle care, Farm Machinery & Equipments. KISANeSTORE is India’s First Agro-eStore to revolutionize agri-input 
            distribution for farmers in rural India with a complete range of agro-inputs & agro-services, with Pan India Free 
            Delivery on all Pin-Codes. KISANeSTORE has associated the whole Ag-industry under one roof to cater to the 
            farming community with genuine quality products.
          </p>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="our-vision-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className="vision-title">Our Vision</h2>
              <p className="vision-text">
                Our vision is to revolutionize Indian agriculture by becoming the most 
                trusted and comprehensive platform for farmers, empowering them with 
                access to genuine, affordable, and innovative agricultural products and 
                services. We aim to bridge the gap between technology and traditional 
                farming, fostering sustainable growth and enhancing the livelihoods of 
                every farmer, while creating a future where eco-friendly practices and 
                advanced tools ensure prosperity for the agricultural community.
              </p>
            </div>
            <div className="col-md-6">
              <img 
                src={visionImg} 
                alt="Farmer working in field" 
                className="img-fluid vision-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="our-mission-section py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6">
              <img 
                src={missionImg} 
                alt="Agricultural drone spraying crops" 
                className="img-fluid mission-image"
              />
            </div>
            <div className="col-md-6">
              <h2 className="mission-title">Our Mission</h2>
              <p className="mission-text">
                Our mission is to deliver high-quality and affordable agricultural products directly to 
                farmers' doorsteps, eliminating middlemen to ensure cost savings. We are dedicated 
                to educating and empowering farmers by providing access to the latest technology, 
                expert guidance, and government schemes to enhance farming practices. 
                By promoting sustainable and organic farming, we aim to create a greener and healthier 
                future while offering timely delivery, exceptional customer service, and a farmer-first 
                ecosystem driven by trust, innovation, and growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <BottomFooter/>
    </>
  );
};

export default About;
