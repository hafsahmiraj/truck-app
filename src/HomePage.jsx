import React, { useEffect, useState } from 'react';
import './HomePage.css';

// Utility function to get the correct image path for GitHub Pages
const getImagePath = (imageName) => {
  // For development and GitHub Pages deployment
  const basePath = process.env.PUBLIC_URL || '';
  const imagePath = `${basePath}/${imageName}`;
  console.log('Image path for', imageName, ':', imagePath); // Debug log
  return imagePath;
};

// Product database with categories
const productDatabase = {
  excavator: [
    {
      id: 1,
      name: "CAT 320 Excavator",
      image: "excavator.jpg",
      description: "Heavy-duty excavator with advanced hydraulic system for maximum efficiency.",
      price: "$45,000 - $65,000",
      category: "excavator"
    },
    {
      id: 2,
      name: "Excavator Bucket",
      image: "gears.jpg",
      description: "High-quality excavator bucket attachment for various digging applications.",
      price: "$2,500 - $4,500",
      category: "excavator"
    },
    {
      id: 3,
      name: "Hydraulic Cylinder",
      image: "Hydraulic.jpg",
      description: "Premium hydraulic cylinder designed for excavator boom and arm operations.",
      price: "$1,800 - $3,200",
      category: "excavator"
    }
  ],
  backhoe: [
    {
      id: 4,
      name: "JCB 3DX Backhoe",
      image: "backhoe.jpg",
      description: "Versatile backhoe loader perfect for construction and agricultural work.",
      price: "$35,000 - $50,000",
      category: "backhoe"
    },
    {
      id: 5,
      name: "Backhoe Attachment",
      image: "Yellowmeta.jpg",
      description: "Durable metal attachment for backhoe digging and loading operations.",
      price: "$3,200 - $5,800",
      category: "backhoe"
    },
    {
      id: 6,
      name: "Backhoe Stabilizer",
      image: "Nuts.jpg",
      description: "Heavy-duty stabilizer system with nuts and bolts for secure positioning.",
      price: "$800 - $1,500",
      category: "backhoe"
    }
  ],
  dumptruck: [
    {
      id: 7,
      name: "Heavy Dump Truck",
      image: "dumptruck.jpg",
      description: "Industrial dump truck for large-scale construction material transportation.",
      price: "$75,000 - $120,000",
      category: "dumptruck"
    },
    {
      id: 8,
      name: "Truck Hydraulic System",
      image: "Hydraulic.jpg",
      description: "Advanced hydraulic lifting system for dump truck bed operations.",
      price: "$8,500 - $12,000",
      category: "dumptruck"
    },
    {
      id: 9,
      name: "Truck Body Parts",
      image: "Yellowmeta.jpg",
      description: "Reinforced metal body parts and panels for dump truck construction.",
      price: "$2,200 - $4,800",
      category: "dumptruck"
    }
  ],
  terrain: [
    {
      id: 10,
      name: "All-Terrain Loader",
      image: "terrain.jpg",
      description: "Multi-terrain compact track loader for versatile construction operations.",
      price: "$55,000 - $85,000",
      category: "terrain"
    },
    {
      id: 11,
      name: "Track Roller System",
      image: "roller.jpg",
      description: "High-performance roller system for smooth all-terrain navigation.",
      price: "$4,500 - $7,200",
      category: "terrain"
    },
    {
      id: 12,
      name: "Terrain Coil Springs",
      image: "Coi.jpg",
      description: "Heavy-duty coil spring system for superior terrain handling and stability.",
      price: "$1,200 - $2,800",
      category: "terrain"
    }
  ],
  parts: [
    {
      id: 13,
      name: "Precision Gears",
      image: "gears.jpg",
      description: "High-precision gears for various construction equipment applications.",
      price: "$350 - $850",
      category: "parts"
    },
    {
      id: 14,
      name: "Hydraulic Components",
      image: "Hydraulic.jpg",
      description: "Premium hydraulic pumps, valves, and cylinders for equipment maintenance.",
      price: "$450 - $1,200",
      category: "parts"
    },
    {
      id: 15,
      name: "Nuts & Bolts Kit",
      image: "Nuts.jpg",
      description: "Complete fastener kit with various nuts, bolts, and washers for equipment repair.",
      price: "$85 - $250",
      category: "parts"
    },
    {
      id: 16,
      name: "Metal Brackets",
      image: "Yellowmeta.jpg",
      description: "Reinforced metal brackets and mounting hardware for equipment assembly.",
      price: "$125 - $380",
      category: "parts"
    },
    {
      id: 17,
      name: "Coil Springs",
      image: "Coi.jpg",
      description: "Heavy-duty coil springs for suspension and shock absorption systems.",
      price: "$180 - $450",
      category: "parts"
    },
    {
      id: 18,
      name: "Road Roller Parts",
      image: "roller.jpg",
      description: "Replacement parts and maintenance components for road roller equipment.",
      price: "$280 - $680",
      category: "parts"
    }
  ]
};

const HomePage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileContactFormOpen, setIsMobileContactFormOpen] = useState(false);

  // Initialize products on component mount
  useEffect(() => {
    // Get all products for initial display
    const allProducts = Object.values(productDatabase).flat();
    setFilteredProducts(allProducts.slice(0, 6)); // Show first 6 products initially
  }, []);

  // Filter products when category changes
  useEffect(() => {
    if (selectedCategory === 'all') {
      const allProducts = Object.values(productDatabase).flat();
      setFilteredProducts(allProducts.slice(0, 6));
    } else {
      const categoryProducts = productDatabase[selectedCategory] || [];
      setFilteredProducts(categoryProducts);
    }
  }, [selectedCategory]);

  // Handle category selection
  const handleCategoryClick = (category, event) => {
    event.preventDefault();
    setSelectedCategory(category);
    // Smooth scroll to products section
    const productsSection = document.querySelector('.featured-products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Handle category button clicks from main categories
  const handleCategoryButtonClick = (category) => {
    setSelectedCategory(category);
    // Smooth scroll to products section
    const productsSection = document.querySelector('.featured-products');
    if (productsSection) {
      productsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Cart functionality
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  const addToCart = (product) => {
    const existingItem = cartItems.find(item => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productId) => {
    setCartItems(cartItems.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(productId);
    } else {
      setCartItems(cartItems.map(item => 
        item.id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const getTotalItems = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  // Mobile menu functionality
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // Handle navigation link clicks
  const handleNavClick = (href) => {
    closeMobileMenu();
    // Smooth scroll to section
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Mobile contact form functionality
  const toggleMobileContactForm = () => {
    setIsMobileContactFormOpen(!isMobileContactFormOpen);
  };

  const closeMobileContactForm = () => {
    setIsMobileContactFormOpen(false);
  };

  const handleContactFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    alert('Thank you for your message! We will get back to you soon.');
    closeMobileContactForm();
  };
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate');
        }
      });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.scroll-animate, .slide-in-left, .slide-in-right, .scale-in');
    animatedElements.forEach(el => observer.observe(el));

    // Special handling for banner
    const banner = document.querySelector('.heavy-duty-banner');
    if (banner) {
      const bannerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, observerOptions);
      bannerObserver.observe(banner);
    }

    // Equipment Showcase Functionality
    const showcaseImages = [
      { src: 'excavator.jpg', title: 'Heavy Duty Excavator', description: 'Professional excavation equipment for all construction needs' },
      { src: 'backhoe.jpg', title: 'Versatile Backhoe', description: 'Multi-purpose digging and loading equipment' },
      { src: 'dumptruck.jpg', title: 'Industrial Dump Truck', description: 'Heavy-duty transportation for construction materials' },
      { src: 'roller.jpg', title: 'Road Roller', description: 'Compaction equipment for road construction' },
      { src: 'terrain.jpg', title: 'All-Terrain Loader', description: 'Multi-terrain compact track loader for versatile operations' },
      { src: 'truck2.jpg', title: 'Commercial Truck', description: 'Reliable transportation for heavy equipment and materials' }
    ];

    let currentImageIndex = 0;
    const showcaseContainer = document.querySelector('.showcase-images-container');
    const showcaseTitle = document.querySelector('.showcase-title');
    const showcaseDescription = document.querySelector('.showcase-description');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const indicators = document.querySelector('.showcase-indicators');

    // Create image elements
    if (showcaseContainer) {
      showcaseContainer.innerHTML = '';
      showcaseImages.forEach((image, index) => {
        const imgElement = document.createElement('div');
        imgElement.className = `showcase-image ${index === 0 ? 'active' : ''}`;
        imgElement.style.backgroundImage = `url(${getImagePath(image.src)})`;
        showcaseContainer.appendChild(imgElement);
      });
    }

    // Create indicators
    if (indicators) {
      indicators.innerHTML = '';
      showcaseImages.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.className = `indicator ${index === 0 ? 'active' : ''}`;
        indicator.addEventListener('click', () => goToSlide(index));
        indicators.appendChild(indicator);
      });
    }

    const updateShowcase = () => {
      const images = document.querySelectorAll('.showcase-image');
      const indicatorElements = document.querySelectorAll('.indicator');
      
      images.forEach((img, index) => {
        img.classList.toggle('active', index === currentImageIndex);
      });
      
      indicatorElements.forEach((indicator, index) => {
        indicator.classList.toggle('active', index === currentImageIndex);
      });
      
      if (showcaseTitle) {
        showcaseTitle.textContent = showcaseImages[currentImageIndex].title;
      }
      if (showcaseDescription) {
        showcaseDescription.textContent = showcaseImages[currentImageIndex].description;
      }
    };

    const goToSlide = (index) => {
      currentImageIndex = index;
      updateShowcase();
    };

    const nextSlide = () => {
      currentImageIndex = (currentImageIndex + 1) % showcaseImages.length;
      updateShowcase();
    };

    const prevSlide = () => {
      currentImageIndex = (currentImageIndex - 1 + showcaseImages.length) % showcaseImages.length;
      updateShowcase();
    };

    // Event listeners
    if (nextBtn) nextBtn.addEventListener('click', nextSlide);
    if (prevBtn) prevBtn.addEventListener('click', prevSlide);

    // Auto-play functionality
    const autoPlayInterval = setInterval(nextSlide, 5000);

    // Pause auto-play on hover
    const showcaseSection = document.querySelector('.equipment-showcase');
    if (showcaseSection) {
      showcaseSection.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
      showcaseSection.addEventListener('mouseleave', () => {
        const newAutoPlayInterval = setInterval(nextSlide, 5000);
        return newAutoPlayInterval;
      });
    }

    // Keyboard navigation
    const handleKeyPress = (e) => {
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === 'ArrowRight') nextSlide();
    };
    document.addEventListener('keydown', handleKeyPress);

    return () => {
      observer.disconnect();
      clearInterval(autoPlayInterval);
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, []);
  return (
    <div className="homepage">
      {/* Header */}
      <header className="header">
        <div className="header-container">

          {/* Main Navigation */}
          <nav className="main-navbar">
            <div className="logo">
              <div className="logo-icon">
                <img src={getImagePath('top2.png')} alt="Expedited Enterprises Logo" className="logo-image" />
              </div>
              <div className="logo-text">
                <span className="company-name">EXPEDITED</span>
                <span className="company-subtitle">ENTERPRISES</span>
              </div>
            </div>

            <div className="nav-center">
              <ul className="nav-links">
                <li><a href="#home" className="nav-link active">HOME</a></li>
                <li><a href="#about" className="nav-link">ABOUT US</a></li>
                <li><a href="#products" className="nav-link">PRODUCTS</a></li>
                <li><a href="#sales" className="nav-link">SALES</a></li>
                <li><a href="#contact" className="nav-link">CONTACT US</a></li>
              </ul>
            </div>

            <div className="header-right">
              <div className="search-container">
                <input type="text" placeholder="Search equipment..." className="search-input" />
                <button className="search-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21 21L16.514 16.506L21 21ZM19 10.5C19 15.194 15.194 19 10.5 19C5.806 19 2 15.194 2 10.5C2 5.806 5.806 2 10.5 2C15.194 2 19 5.806 19 10.5Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              <div className="cart-container">
                <button className="cart-btn" onClick={toggleCart}>
                  <span className="cart-icon">🛒</span>
                  <span className="cart-count">{getTotalItems()}</span>
                </button>
              </div>
              <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
                <span className={isMobileMenuOpen ? 'open' : ''}></span>
                <span className={isMobileMenuOpen ? 'open' : ''}></span>
                <span className={isMobileMenuOpen ? 'open' : ''}></span>
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: `url(${getImagePath('terrain.jpg')})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">COMPACT TRACKS & MULTI-TERRAIN LOADERS</h1>
          <p className="hero-subtitle">Professional construction equipment for maximum efficiency and reliability.</p>
          <button className="cta-button">GET STARTED</button>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="equipment-categories scroll-animate">
        <div className="category slide-in-left">
          <div className="category-content">
            <h3>EXCAVATOR</h3>
            <p>Heavy construction equipment<br />consisting of a boom, dipper,<br />bucket and cab on a<br />rotating platform known as<br />the "house".</p>
            <button className="category-btn" onClick={() => handleCategoryButtonClick('excavator')}>View Products</button>
          </div>
          <div className="category-image">
            <img src={getImagePath('excavator.jpg')} alt="Excavator" />
          </div>
        </div>

        <div className="category scale-in">
          <div className="category-content">
            <h3>BACKHOE</h3>
            <p>Rear actor or back actor — is a<br />type of excavating equipment, or<br />digger, consisting of a digging<br />bucket on the end.</p>
            <button className="category-btn" onClick={() => handleCategoryButtonClick('backhoe')}>View Products</button>
          </div>
          <div className="category-image">
            <img src={getImagePath('backhoe.jpg')} alt="Backhoe" />
          </div>
        </div>

        <div className="category slide-in-right">
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
      <section className="main-content scroll-animate">
        <div className="content-wrapper">
          <div className="categories-sidebar">
            <h3>CATEGORIES</h3>
            <ul>
              <li><a href="#all" onClick={(e) => handleCategoryClick('all', e)} className={selectedCategory === 'all' ? 'active' : ''}>All Products</a></li>
              <li><a href="#excavator" onClick={(e) => handleCategoryClick('excavator', e)} className={selectedCategory === 'excavator' ? 'active' : ''}>Excavator</a></li>
              <li><a href="#backhoe" onClick={(e) => handleCategoryClick('backhoe', e)} className={selectedCategory === 'backhoe' ? 'active' : ''}>Backhoe</a></li>
              <li><a href="#dumptruck" onClick={(e) => handleCategoryClick('dumptruck', e)} className={selectedCategory === 'dumptruck' ? 'active' : ''}>Dump Truck</a></li>
              <li><a href="#terrain" onClick={(e) => handleCategoryClick('terrain', e)} className={selectedCategory === 'terrain' ? 'active' : ''}>All Terrain</a></li>
              <li><a href="#parts" onClick={(e) => handleCategoryClick('parts', e)} className={selectedCategory === 'parts' ? 'active' : ''}>Parts</a></li>
            </ul>
          </div>

          <div className="featured-products">
            <h3>{selectedCategory === 'all' ? 'FEATURED PRODUCTS' : `${selectedCategory.toUpperCase()} PRODUCTS`}</h3>
            <div className="products-grid">
              {filteredProducts.map((product) => (
                <div key={product.id} className="product-item">
                  <img src={getImagePath(product.image)} alt={product.name} />
                  <div className="product-info">
                    <h4>{product.name.toUpperCase()}</h4>
                    <p>{product.description}</p>
                    <p className="product-price" style={{color: '#ff9900', fontWeight: 'bold', fontSize: '14px', marginTop: '8px'}}>{product.price}</p>
                    <div className="product-actions">
                      <button className="product-btn learn-more-btn">Learn More</button>
                      <button className="product-btn add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
                    </div>
                  </div>
                </div>
              ))}
              {filteredProducts.length === 0 && (
                <div style={{gridColumn: '1 / -1', textAlign: 'center', color: '#fff', padding: '40px'}}>
                  <p>No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Heavy Duty Track Banner */}
      <section className="heavy-duty-banner">
        <div 
          className="banner-background" 
          style={{ backgroundImage: `url(${getImagePath('top2.png')})` }}
        ></div>
        <div className="banner-overlay"></div>
        <div className="banner-content">
          <h2>HEAVY DUTY TRACK</h2>
          <h3>10% OFF</h3>
          <p>On Selected Parts</p>
          <button className="banner-btn">Shop Now</button>
        </div>
      </section>

      {/* Sale Section */}
      <section className="sale-section scroll-animate">
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
          <div className="showcase-images-container">
            {/* Images will be dynamically created by JavaScript */}
          </div>
          
          <div className="showcase-overlay">
            <div className="showcase-text">
              <h2 className="showcase-title">Heavy Duty Excavator</h2>
              <p className="showcase-description">Professional excavation equipment for all construction needs</p>
            </div>
          </div>
          
          <div className="showcase-controls">
            <button className="prev-btn" aria-label="Previous image">‹</button>
            <button className="next-btn" aria-label="Next image">›</button>
          </div>
          
          <div className="showcase-indicators">
            {/* Indicators will be dynamically created by JavaScript */}
          </div>
          
          <div className="showcase-progress">
            <div className="progress-bar"></div>
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
<div className="form-group">
                <input type="text" placeholder=" " className="form-input" />
                <label className="form-label">Name</label>
              </div>
              <div className="form-group">
                <input type="tel" placeholder=" " className="form-input" />
                <label className="form-label">Phone</label>
              </div>
              <div className="form-group">
                <input type="email" placeholder=" " className="form-input" />
                <label className="form-label">Email</label>
              </div>
              <div className="form-group">
                <textarea placeholder=" " rows="4" className="form-textarea"></textarea>
                <label className="form-label">Message</label>
              </div>
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

      {/* Cart Sidebar */}
      <div className={`cart-sidebar ${isCartOpen ? 'open' : ''}`}>
        <div className="cart-overlay" onClick={closeCart}></div>
        <div className="cart-content">
          <div className="cart-header">
            <h3>Shopping Cart ({getTotalItems()})</h3>
            <button className="cart-close-btn" onClick={closeCart}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <div className="cart-items">
            {cartItems.length === 0 ? (
              <div className="empty-cart">
                <div className="empty-cart-icon">🛒</div>
                <p>Your cart is empty</p>
                <p className="empty-cart-subtitle">Add some products to get started</p>
              </div>
            ) : (
              cartItems.map(item => (
                <div key={item.id} className="cart-item">
                  <img src={getImagePath(item.image)} alt={item.name} className="cart-item-image" />
                  <div className="cart-item-details">
                    <h4>{item.name}</h4>
                    <p className="cart-item-price">{item.price}</p>
                    <div className="cart-item-controls">
                      <button 
                        className="quantity-btn" 
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        -
                      </button>
                      <span className="quantity">{item.quantity}</span>
                      <button 
                        className="quantity-btn" 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        +
                      </button>
                      <button 
                        className="remove-btn" 
                        onClick={() => removeFromCart(item.id)}
                        title="Remove from cart"
                      >
                        🗑️
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
          
          {cartItems.length > 0 && (
            <div className="cart-footer">
              <div className="cart-summary">
                <p className="total-items">Total Items: {getTotalItems()}</p>
              </div>
              <div className="cart-actions">
                <button className="checkout-btn">Proceed to Checkout</button>
                <button className="clear-cart-btn" onClick={() => setCartItems([])}>
                  Clear Cart
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Navigation Sidebar */}
      <div className={`mobile-nav-sidebar ${isMobileMenuOpen ? 'open' : ''}`}>
        <div className="mobile-nav-overlay" onClick={closeMobileMenu}></div>
        <div className="mobile-nav-content">
          <div className="mobile-nav-header">
            <div className="mobile-logo">
              <img src={getImagePath('top2.png')} alt="Logo" className="mobile-logo-image" />
              <div className="mobile-logo-text">
                <span className="mobile-company-name">EXPEDITED</span>
                <span className="mobile-company-subtitle">ENTERPRISES</span>
              </div>
            </div>
            <button className="mobile-nav-close-btn" onClick={closeMobileMenu}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M18 6L6 18M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          
          <nav className="mobile-nav-links">
            <a href="#home" className="mobile-nav-link" onClick={() => handleNavClick('#home')}>
              <span className="nav-icon">🏠</span>
              <span>HOME</span>
            </a>
            <a href="#about" className="mobile-nav-link" onClick={() => handleNavClick('#about')}>
              <span className="nav-icon">ℹ️</span>
              <span>ABOUT US</span>
            </a>
            <a href="#products" className="mobile-nav-link" onClick={() => handleNavClick('.featured-products')}>
              <span className="nav-icon">📦</span>
              <span>PRODUCTS</span>
            </a>
            <a href="#sales" className="mobile-nav-link" onClick={() => handleNavClick('.sale-section')}>
              <span className="nav-icon">🏷️</span>
              <span>SALES</span>
            </a>
            <a href="#contact" className="mobile-nav-link" onClick={() => handleNavClick('.footer')}>
              <span className="nav-icon">📞</span>
              <span>CONTACT US</span>
            </a>
          </nav>
          
        </div>
      </div>

      {/* Mobile Contact Form Toggle Button */}
      <button className="mobile-contact-toggle" onClick={toggleMobileContactForm}>
        📞 Contact Us
      </button>

      {/* Mobile Contact Form */}
      <div className={`mobile-contact-form ${isMobileContactFormOpen ? 'open' : ''}`}>
        <div className="mobile-form-header">
          <h3 className="mobile-form-title">Get in Touch</h3>
          <button 
            className="mobile-form-close" 
            onClick={closeMobileContactForm}
            type="button"
          >
            ×
          </button>
        </div>
        <form onSubmit={handleContactFormSubmit}>
          <div className="form-group">
            <input 
              type="text" 
              className="form-input" 
              placeholder="Your Name" 
              required 
            />
          </div>
          <div className="form-group">
            <input 
              type="email" 
              className="form-input" 
              placeholder="Your Email" 
              required 
            />
          </div>
          <div className="form-group">
            <textarea 
              className="form-textarea" 
              placeholder="Your Message" 
              rows="4"
              required 
            />
          </div>
          <button className="submit-btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
