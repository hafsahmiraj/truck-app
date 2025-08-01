import React from 'react';
import './HomePage.css';

// Utility function to get the correct image path for GitHub Pages
const getImagePath = (imageName) => {
  // For GitHub Pages deployment, use the full path with homepage base
  const basePath = process.env.PUBLIC_URL || '';
  return `${basePath}/${imageName}`;
};

const HomePage = () => {
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="header-top">
          <div className="contact-info">
            <span>📧 samplemail@donotreply.com</span>
            <span>📞 +639281234567</span>
          </div>
          <div className="header-right">
            <div className="search-container">
              <input type="text" placeholder="Search Keyword..." className="search-input" />
              <button className="search-btn">🔍</button>
            </div>
            <div className="cart-icon">
              🛒
            </div>
          </div>
        </div>
        <nav className="navbar">
          <div className="logo">
            <div className="logo-icon">🚜</div>
            <span>EXPEDITED ENTERPRISES</span>
          </div>
          <ul className="nav-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT US</a></li>
            <li><a href="#products">PRODUCTS</a></li>
            <li><a href="#sales">SALES</a></li>
            <li><a href="#contact">CONTACT US</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>COMPACT TRACKS &<br />MULTI-TERRAIN LOADERS</h1>
            <p>If you need a piece of equipment to lay asphalt on roads,<br />
to dig out drinking wells or another surface, the type of<br />
equipment that is the best choice for you depends on<br />
asphalt paver.</p>
            <button className="cta-button">CONTACT US!</button>
          </div>
          <div className="hero-image">
            <img src={getImagePath('terrain.jpg')} alt="Compact Track Loader" />
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="equipment-categories">
        <div className="category">
          <div className="category-content">
            <h3>EXCAVATOR</h3>
            <p>Heavy construction equipment<br />consisting of a boom, dipper,<br />bucket and cab on a<br />rotating platform known as<br />the "house".</p>
            <button className="category-btn">Read More!</button>
          </div>
          <div className="category-image">
            <img src={getImagePath('excavator.jpg')} alt="Excavator" />
          </div>
        </div>

        <div className="category">
          <div className="category-content">
            <h3>BACKHOE</h3>
            <p>Rear actor or back actor — is a<br />type of excavating equipment, or<br />digger, consisting of a digging<br />bucket on the end.</p>
            <button className="category-btn">Read More!</button>
          </div>
          <div className="category-image">
            <img src={getImagePath('backhoe.jpg')} alt="Backhoe" />
          </div>
        </div>

        <div className="category">
          <div className="category-content">
            <h3>DUMP TRUCK</h3>
            <p>Known also as a dumper<br />truck or tipper truck, is used<br />for taking dumps for construction<br />as well as coal.</p>
            <button className="category-btn">Read More!</button>
          </div>
          <div className="category-image">
            <img src={getImagePath('dumptruck.jpg')} alt="Dump Truck" />
          </div>
        </div>
      </section>

      {/* Categories and Featured Products */}
      <section className="main-content">
        <div className="content-wrapper">
          <div className="categories-sidebar">
            <h3>CATEGORIES</h3>
            <ul>
              <li><a href="#excavator">Excavator</a></li>
              <li><a href="#backhoe">Backhoe</a></li>
              <li><a href="#dumptruck">Dump Truck</a></li>
              <li><a href="#terrain">All terrain</a></li>
              <li><a href="#parts">Parts</a></li>
            </ul>
          </div>

          <div className="featured-products">
            <h3>FEATURED PRODUCTS</h3>
            <div className="products-grid">
              <div className="product-item">
                <img src={getImagePath('gears.jpg')} alt="Gears" />
                <div className="product-info">
                  <h4>GEARS</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <button className="product-btn">Learn More</button>
                </div>
              </div>

              <div className="product-item">
                <img src={getImagePath('roller.jpg')} alt="Roller" />
                <div className="product-info">
                  <h4>ROLLER</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <button className="product-btn">Learn More</button>
                </div>
              </div>

              <div className="product-item">
                <img src={getImagePath('Hydraulic.jpg')} alt="Hydraulic" />
                <div className="product-info">
                  <h4>HYDRAULIC</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <button className="product-btn">Learn More</button>
                </div>
              </div>

              <div className="product-item">
                <img src={getImagePath('Nuts.jpg')} alt="Nuts & Bolts" />
                <div className="product-info">
                  <h4>NUTS & BOLTS</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <button className="product-btn">Learn More</button>
                </div>
              </div>

              <div className="product-item">
                <img src={getImagePath('Coi.jpg')} alt="Coils" />
                <div className="product-info">
                  <h4>COILS</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <button className="product-btn">Learn More</button>
                </div>
              </div>

              <div className="product-item">
                <img src={getImagePath('Yellowmeta.jpg')} alt="Metal Parts" />
                <div className="product-info">
                  <h4>METAL PARTS</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  <button className="product-btn">Learn More</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Heavy Duty Track Banner */}
      <section className="heavy-duty-banner">
        <div className="banner-content">
          <h2>HEAVY DUTY TRACK</h2>
          <h3>10% OFF</h3>
          <p>On Selected Parts</p>
          <button className="banner-btn">Shop Now</button>
        </div>
      </section>

      {/* Sale Section */}
      <section className="sale-section">
        <div className="sale-header">
          <h2>SALE</h2>
        </div>
        <div className="sale-products">
          <div className="sale-item">
            <img src={getImagePath('gears.jpg')} alt="Gears Sale" />
            <div className="sale-info">
              <h4>GEARS - SALE 30%</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              <div className="price">$899 - $1200</div>
              <button className="sale-btn">Buy Now</button>
            </div>
          </div>

          <div className="sale-item">
            <img src={getImagePath('Yellowmeta.jpg')} alt="Metal Parts Sale" />
            <div className="sale-info">
              <h4>METAL - SALE 25%</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              <div className="price">$599 - $899</div>
              <button className="sale-btn">Buy Now</button>
            </div>
          </div>

          <div className="sale-item">
            <img src={getImagePath('Nuts.jpg')} alt="Nuts Sale" />
            <div className="sale-info">
              <h4>NUTS - SALE 40%</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              <div className="price">$199 - $399</div>
              <button className="sale-btn">Buy Now</button>
            </div>
          </div>

          <div className="sale-item">
            <img src={getImagePath('Hydraulic.jpg')} alt="Hydraulic Sale" />
            <div className="sale-info">
              <h4>HYDRAULIC - SALE 20%</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.</p>
              <div className="price">$1299 - $1899</div>
              <button className="sale-btn">Buy Now</button>
            </div>
          </div>
        </div>
        <div className="view-more">
          <button className="view-more-btn">VIEW MORE</button>
        </div>
      </section>

      {/* Equipment Showcase */}
      <section className="equipment-showcase">
        <div className="showcase-content">
          <div className="showcase-item active">
            <img src={getImagePath('terrain.jpg')} alt="Compact Track Loader" />
          </div>
          <div className="showcase-controls">
            <button className="prev-btn">‹</button>
            <button className="next-btn">›</button>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.123456789!2d-74.0059728!3d40.7589087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQ1JzMyLjEiTiA3NMKwMDAnMjEuNSJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus"
            width="100%"
            height="300"
            style={{border: 0}}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Our Location"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section footer-nav-links">
            <a href="#home">HOME</a>
            <a href="#about">ABOUT US</a>
            <a href="#products">PRODUCTS</a>
            <a href="#sales">SALE</a>
            <a href="#contact">CONTACT US</a>
          </div>
          <div className="footer-section contact-info">
            <p>📧 samplemail@donotreply.com</p>
            <p>📞 +639281234567</p>
            <p>📍 4612 Blackwell Street Dry Creek, AL</p>
          </div>
          <div className="footer-section">
            <h4>CONTACT FORM</h4>
            <form className="contact-form">
              <input type="text" placeholder="Name" />
              <input type="tel" placeholder="Phone" />
              <input type="email" placeholder="Email" />
              <textarea placeholder="Message" rows="4"></textarea>
              <button type="submit" className="submit-btn">SUBMIT</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="contact-details">
            <p>📧 sales@expeditedenterprises.com</p>
            <p>📞 Call: 000-000-000-0000, Fax: 000-000-000-0000</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
