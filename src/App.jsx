// App.js
import React, { useState } from 'react';

const App = () => {
  // Mobile menu state
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Accordion state for beauty section items
  const [openItems, setOpenItems] = useState([false, false, false, false]);

  const toggleAccordion = (index) => {
    setOpenItems(prev => prev.map((item, i) => i === index ? !item : false));
  };

  // FAQ Items Data
  const faqItems = [
    {
      title: "Top 5 Lipstick Shades of the Season",
      img: "images/1.jpg",
      answer: "Trending shades include nude, coral, and deep red tones."
    },
    {
      title: "Makeup Tips from Professionals",
      img: "images/2.jpg",
      answer: "Blend properly and use minimal products for best results."
    },
    {
      title: "Best Skincare Routine",
      img: "images/3.jpg",
      answer: "Cleanse, tone, and moisturize daily."
    },
    {
      title: "All Articles",
      img: "images/4.jpg",
      answer: "Browse all beauty related articles here."
    }
  ];

  // Cards Data
  const cards = [
    { category: "body", img: "images/1.jpg" },
    { category: "face", img: "images/2.jpg" },
    { category: "hair", img: "images/3.jpg" },
    { category: "other", img: "images/4.jpg" }
  ];

  return (
    <>
      {/* Global Styles */}
      <style>{`
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        img {
          max-width: 100%;
          height: auto;
          display: block;
        }

        body {
          font-family: 'Inter', sans-serif;
          background: #f5f1e8;
          overflow-x: hidden;
          margin: 0;
        }

        h1, h2, .logo, .green, .big-new, .hero-content h1, .hero1 h1, .text-block h2, .discount-box h1, .right-pro h2 {
          font-family: 'Playfair Display', serif;
        }

        /* ========== NAVBAR ========== */
        .navbar {
          position: absolute;
          top: 0;
          width: 100%;
          padding: 20px 60px;
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          border-bottom: 1px solid rgba(0, 0, 0, 0.08);
          z-index: 100;
          background: transparent;
        }
        .logo { color: #3d4b3d; letter-spacing: 2px; justify-self: start; font-weight: 600; font-size: 1.3rem; }
        .nav-links { display: flex; gap: 30px; justify-self: center; }
        .nav-links a { text-decoration: none; color: #6c756c; font-weight: 500; transition: color 0.2s; }
        .cart-icon { justify-self: end; cursor: pointer; }

        /* Hamburger button (hidden on desktop) */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 28px;
          height: 20px;
          cursor: pointer;
          z-index: 101;
        }
        .hamburger span {
          display: block;
          width: 100%;
          height: 2px;
          background-color: #3d4b3d;
          transition: 0.3s;
          border-radius: 2px;
        }

        /* ========== HERO SECTION — fixed spacing ========== */
        .hero {
          width: 100%;
          min-height: 100vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          margin-top: 0;
          padding-top: 0;
        }
        .hero-content {
          margin: 0;
          padding: 0;
        }
        .hero-content h1 { font-size: 72px; line-height: 1.2; color: #3d4b3d; margin-bottom: 0.5rem; }
        .hero-content span { display: block; }
        .italic { font-style: italic; color: #7c8c6c; }
        .with-leaf { display: flex; align-items: center; justify-content: center; gap: 14px; }
        .leaf-icon { transform: translateY(-2px); }
        .hero-content p { font-family: 'Inter', sans-serif; margin-top: 12px; color: #5f6a5a; }
        .hero-btn { margin-top: 25px; padding: 14px 32px; background: #5f6f52; color: #fff; border-radius: 25px; border: none; cursor: pointer; font-weight: 500; }
        
        /* floating images */
        .hero img {
          position: absolute;
          width: 200px;
          border-radius: 12px;
          object-fit: cover;
        }
        .img-left-top { top: 100px; left: 120px; }
        .img-left-bottom { bottom: -40px; left: 100px; }
        .img-right-top { top: 120px; right: 120px; }
        .img-right-bottom { bottom: 80px; right: 100px; }

        /* ========== CARDS ========== */
        .container { display: flex; gap: 20px; padding: 60px 20px; max-width: 100%; margin: auto; height: 700px; align-items: center; justify-content: center; }
        .card { background: #fff; border-radius: 12px; width: 30%; overflow: hidden; position: relative; cursor: pointer; transition: 0.3s; height: 350px; }
        .card:hover { transform: translateY(-5px); }
        .card img { width: 100%; height: 100%; object-fit: cover; }
        .tag { position: absolute; top: 12px; left: 12px; background: #eee; padding: 6px 10px; font-size: 13px; border-radius: 6px; display: flex; align-items: center; gap: 6px; }

        /* ========== BANNER (LEFT SIDE: FULL WIDTH + FULL HEIGHT IMAGE) ========== */
        .ban {
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 700px;
        }
        .banner {
          width: 100%;
          max-width: 1200px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          border-radius: 28px;
          overflow: hidden;
          background: #841818;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
        }
        .left-pro {
          background: #748d36;
          position: relative;
          min-height: 420px;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
        }
        .left-pro::before {
          content: '';
          position: absolute;
          width: 380px;
          height: 380px;
          background: rgba(255, 255, 255, 0.12);
          border-radius: 50%;
          top: -120px;
          left: -120px;
          z-index: 1;
        }
        .left-pro::after {
          content: '';
          position: absolute;
          width: 220px;
          height: 220px;
          background: rgba(255, 255, 255, 0.08);
          border-radius: 50%;
          bottom: -80px;
          right: -60px;
          z-index: 1;
        }
        .product-image {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 0;
          background: none;
          border: none;
          backdrop-filter: none;
          padding: 0;
          overflow: hidden;
          z-index: 0;
        }
        .product-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0;
          display: block;
        }
        .discount-box {
          position: relative;
          z-index: 2;
          text-align: right;
          color: white;
          width: 100%;
          padding: 50px;
        }
        .discount-box span {
          display: inline-block;
          background: rgba(255, 255, 255, 0.18);
          padding: 10px 18px;
          border-radius: 999px;
          margin-bottom: 18px;
          font-size: 14px;
          letter-spacing: 1px;
          backdrop-filter: blur(5px);
        }
        .discount-box h1 {
          font-size: 72px;
          line-height: 0.95;
          font-weight: 700;
        }
        .discount-box p {
          margin-top: 14px;
          font-size: 20px;
          opacity: 0.95;
          letter-spacing: 1px;
        }

        .right-pro {
          background: #7C8C6C;
          position: relative;
          padding: 60px;
          min-height: 420px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .right-pro::before {
          content: '';
          position: absolute;
          width: 320px;
          height: 320px;
          border: 2px solid #efefef;
          border-radius: 50%;
          top: -70px;
          right: -70px;
        }
        .right-pro::after {
          content: '';
          position: absolute;
          width: 180px;
          height: 180px;
          border: 2px solid #f1f1f1;
          border-radius: 50%;
          bottom: -60px;
          left: -60px;
        }
        .offer-tag {
          width: max-content;
          padding: 10px 18px;
          border-radius: 999px;
          background: #f6f6f3;
          color: #8b8b80;
          font-size: 14px;
          margin-bottom: 24px;
          letter-spacing: 1px;
        }
        .right-pro h2 {
          font-size: 70px;
          line-height: 0.95;
          color: #fff;
          font-weight: 700;
          position: relative;
          z-index: 2;
        }
        .right-pro p {
          margin-top: 22px;
          font-size: 18px;
          line-height: 1.7;
          color: #ffffff;
          max-width: 420px;
          position: relative;
          z-index: 2;
        }
        .right-pro .btn {
          margin-top: 32px;
          width: max-content;
          padding: 16px 30px;
          border: none;
          border-radius: 14px;
          background: #bcc4a8;
          color: #fff;
          font-size: 16px;
          cursor: pointer;
          transition: 0.3s ease;
          position: relative;
          z-index: 2;
        }
        .shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(2px);
          opacity: 0.9;
        }
        .s1 {
          width: 90px;
          height: 90px;
          background: linear-gradient(145deg, #3d4b3d, #d8b693);
          top: 40px;
          right: 60px;
        }
        .s2 {
          width: 120px;
          height: 120px;
          background: linear-gradient(145deg, #3d4b3d, #d8c0a2);
          bottom: 40px;
          right: 120px;
        }

        /* ========== OTHER SECTIONS ========== */
        .container1 { width: 1500px; margin: auto; padding: 60px 20px; }
        .hero1 { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: 60px; }
        .hero1 h1 { font-size: 50px; line-height: 1.3; }
        .hero1 p { color: #6d6d6d; font-size: 18px; line-height: 1.6; }
        .btn { margin-top: 20px; display: inline-block; background-color: #2C3219; color: #fff; padding: 12px 22px; border-radius: 25px; text-decoration: none; font-size: 14px; }
        .hero1 img { width: 100%; max-width: 360px; justify-self: end; border-radius: 20px; }
        .bottom { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 30px; margin-top: 80px; align-items: start; }
        .card1 img { width: 100%; border-radius: 6px; display: block; height: 700px; object-fit: cover; }
        .text-block { padding-top: 20px; }
        .text-block h2 { font-size: 35px; margin-bottom: 10px; }
        .text-block p { font-size: 18px; color: #6d6d6d; line-height: 1.6; }

        .new-section { height: 150vh; background: #F5F1E8; position: relative; padding: 60px 80px; overflow: visible; }
        .green { color: #6e7f5f; margin: 0; font-size: 70px; }
        .sub { margin-top: 15px; font-size: 15px; color: #555; }
        .big-new { font-size: 34vw; font-weight: 900; color: #7C8C6C; text-align: center; line-height: 0.65; margin: 30px 0 0; letter-spacing: -6px; }
        .right-box { position: absolute; bottom: 150px; left: 20%; width: 1000px; display: flex; gap: 20px; align-items: flex-start; }
        .right-box img { width: 650px; height: 300px; object-fit: cover; border-radius: 10px; }
        .text-box { display: flex; flex-direction: column; margin-top: 5%; }
        .text-box p { font-size: 14px; color: #444; line-height: 1.7; width: 400px; }
        .text-box button { margin-top: 15px; border-radius: 25px; width: 150px; height: 50px; border: 2px solid #6e7f5f; color: #6e7f5f; background: transparent; font-size: 20px; cursor: pointer; }
        .img1 { position: absolute; top: 8%; left: 65%; transform: translateX(-50%); width: 650px; height: 300px; object-fit: cover; border-radius: 10px; }

        .beauty-section { display: flex; height: 100vh; padding: 40px; gap: 40px; margin-bottom: 160px; }
        .left { width: 50%; height: 100%; }
        .left img { width: 100%; height: 100%; object-fit: cover; border-radius: 25px; }
        .right { width: 50%; display: flex; flex-direction: column; justify-content: flex-start; }
        .top-content { margin-bottom: 30px; }
        .beauty-section h1 { font-size: 48px; margin: 0 0 10px; }
        .subtitle { color: #666; font-size: 16px; }
        .items { width: 100%; }
        .item { border-top: 1px solid #000; padding: 20px 0; cursor: pointer; }
        .item:last-child { border-bottom: 1px solid #000; }
        .item-header { display: flex; justify-content: space-between; align-items: center; }
        .item-header span { font-size: 22px; font-weight: 700; }
        .item-right { display: flex; align-items: center; gap: 12px; }
        .item-right img { width: 60px; height: 60px; object-fit: cover; border-radius: 6px; }
        .arrow { font-size: 18px; }
        .answer { display: none; margin-top: 10px; font-size: 14px; color: #444; }

        .footer { background: #7C8C6C; padding: 40px 60px; height: auto; }
        .footer-top { display: flex; justify-content: space-between; align-items: flex-start; }
        .logo-box { background: #fff; padding: 10px 16px; border-radius: 20px; display: inline-flex; align-items: center; gap: 8px; }
        .footer-right { max-width: 500px; }
        .footer-title { color: #fff; font-size: 22px; margin-bottom: 15px; line-height: 1.4; }
        .subscribe-box { display: flex; gap: 10px; margin-bottom: 15px; }
        .subscribe-box input { flex: 1; padding: 10px 15px; border-radius: 20px; border: none; outline: none; }
        .subscribe-box button { background: #000; color: #fff; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; }
        .socials { display: flex; gap: 20px; }
        .social-item { color: #fff; font-size: 14px; display: flex; align-items: center; gap: 6px; }
        .footer-divider { margin: 30px 0 15px; height: 1px; background: #6e7f5f; box-shadow: 0 2px 6px rgba(0,0,0,0.2); border: none; }
        .footer-bottom { display: flex; justify-content: space-between; font-size: 14px; color: #fff; }
        .right-text { display: flex; gap: 20px; }

        /* ========== RESPONSIVE ========== */
        @media (max-width: 950px) {
          .banner { grid-template-columns: 1fr; }
          .discount-box h1, .right-pro h2 { font-size: 58px; }
        }
        @media (max-width: 768px) {
          .navbar {
            grid-template-columns: auto 1fr auto;
            padding: 15px 25px;
            background: #f5f1e8;
            position: relative;
          }
          .hamburger {
            display: flex;
            justify-self: start;
            margin-right: 15px;
          }
          .logo {
            justify-self: start;
            margin-right: auto;
          }
          .nav-links {
            position: fixed;
            top: 70px;
            left: -100%;
            width: 70%;
            height: calc(100vh - 70px);
            background: #f5f1e8;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: 30px;
            padding: 40px 20px;
            transition: 0.3s ease;
            z-index: 99;
            box-shadow: 2px 0 15px rgba(0,0,0,0.1);
            border-right: 1px solid rgba(0,0,0,0.05);
          }
          .nav-links.active {
            left: 0;
          }
          .nav-links a {
            font-size: 1.2rem;
            width: 100%;
            text-align: center;
            padding: 10px;
          }
          .cart-icon {
            justify-self: end;
          }
          .hero {
            min-height: 90vh;
            padding-top: 10px;
            margin-top: 0;
          }
          .hero-content h1 {
            font-size: 38px;
          }
          .hero img {
            width: 85px;
          }
          .img-left-top { top: 70px; left: 12px; }
          .img-left-bottom { bottom: 20px; left: 12px; }
          .img-right-top { top: 90px; right: 12px; }
          .img-right-bottom { bottom: 20px; right: 12px; }
          
          .container { flex-direction: column; height: auto; padding: 40px 20px; }
          .card { width: 90%; height: 280px; }
          .container1 { width: 100%; padding: 40px 20px; }
          .hero1 { grid-template-columns: 1fr; text-align: center; }
          .hero1 img { justify-self: center; }
          .bottom { grid-template-columns: 1fr; }
          .card1 img { height: auto; }
          .new-section { height: auto; padding: 40px 20px; }
          .green { font-size: 40px; }
          .big-new { font-size: 20vw; }
          .right-box { position: static; width: 100%; flex-direction: column; margin-top: 30px; }
          .right-box img { width: 100%; height: auto; }
          .text-box p { width: 100%; }
          .img1 { position: relative; top: auto; left: auto; transform: none; width: 100%; margin: 20px 0; }
          .beauty-section { flex-direction: column; height: auto; gap: 30px; margin-bottom: 80px; }
          .left, .right { width: 100%; }
          .left { height: 320px; }
          .beauty-section h1 { font-size: 36px; }
          .footer { padding: 30px 25px; }
          .footer-top { flex-direction: column; gap: 25px; }
          .footer-right { max-width: 100%; }
          .footer-bottom { flex-direction: column; align-items: center; gap: 8px; }
          .ban { height: auto; padding: 40px 20px; }
          .discount-box { padding: 30px; }
        }
        @media (max-width: 650px) {
          .left-pro, .right-pro { padding: 0; }
          .discount-box h1, .right-pro h2 { font-size: 42px; }
          .right-pro .btn { width: 100%; text-align: center; }
          .discount-box { padding: 30px 20px; }
          .right-pro { padding: 30px; }
        }
        @media (max-width: 480px) {
          .hero-content h1 { font-size: 30px; }
          .hero img { width: 65px; }
          .card { width: 95%; height: 230px; }
          .discount-box h1 { font-size: 36px; }
          .right-pro h2 { font-size: 34px; }
        }
      `}</style>

      {/* Navbar */}
      <div className="navbar">
        <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logo">HERBÉ</div>
        <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
          <a href="#" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }}>shop</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }}>philosophy</a>
          <a href="#" onClick={(e) => { e.preventDefault(); setIsMenuOpen(false); }}>gallery</a>
        </div>
        <div className="cart-icon">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#5f6f52" strokeWidth="1.8">
            <path d="M6 7h12l-1 12H7L6 7z" />
            <path d="M9 7a3 3 0 0 1 6 0" />
          </svg>
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <img src="images/1.jpg" className="img-left-top" alt="leaf" />
        <img src="images/2.jpg" className="img-left-bottom" alt="oil" />
        <img src="images/3.jpg" className="img-right-top" alt="botanical" />
        <img src="images/4.jpg" className="img-right-bottom" alt="ritual" />
        <div className="hero-content">
          <h1>
            <span className="with-leaf">
              <svg className="leaf-icon" width="42" height="42" viewBox="0 0 24 24" fill="none" stroke="#5f6f52" strokeWidth="1.4">
                <path d="M4 20c6-8 10-12 16-16" />
                <path d="M8 16c2-2 4-3 6-4" />
                <path d="M7 13c2-1 4-2 6-3" />
                <path d="M10 18c2-2 4-3 6-5" />
              </svg>
              ETHICAL
            </span>
            <span className="italic">plant-based</span>
            <span>SKINCARE</span>
          </h1>
          <p>Sustainably sourced, loved by skin</p>
          <button className="hero-btn" onClick={() => alert('Explore Products')}>EXPLORE PRODUCTS</button>
        </div>
      </section>

      {/* Cards + Philosophy */}
      <section>
        <div className="container1">
          <div className="container">
            {cards.map((card, idx) => (
              <div className="card" key={idx}>
                <div className="tag">( {card.category} ) <span className="arrow">↗</span></div>
                <img src={card.img} alt={card.category} />
              </div>
            ))}
          </div>
          <div className="hero1">
            <div>
              <h1>New philosophy of selfcare: healthy skin & hair</h1>
              <p>Sage is about consciously simple — effective formulas, thoughtful ingredients, and soft textures designed for real everyday life.</p>
              <a href="#" className="btn" onClick={(e) => e.preventDefault()}>More about Sage</a>
            </div>
            <img src="images/2.jpg" alt="Sage" />
          </div>
          <div className="bottom">
            <div className="card1"><img src="images/7.jpg" alt="ritual" /></div>
            <div className="card1"><img src="images/6.jpg" alt="essence" /></div>
            <div className="card1">
              <div className="text-block">
                <h2>Pure care by nature</h2>
                <p>Thoughtfully crafted formulas designed to bring balance and calm to your daily routine. Lightweight textures and gentle ingredients.</p>
              </div>
              <img src="images/5.jpg" alt="care" />
            </div>
          </div>
        </div>
      </section>

      {/* Banner */}
      <section>
        <div className="ban">
          <div className="banner">
            <div className="left-pro">
              <div className="product-image"><img src="images/1.jpg" alt="Full size product" /></div>
              <div className="discount-box">
                <span>NEW COLLECTION</span>
                <h1>UP TO<br />50% OFF</h1>
                <p>Luxury Beauty & Skincare</p>
              </div>
            </div>
            <div className="right-pro">
              <div className="offer-tag">LIMITED TIME OFFER</div>
              <h2>BUY 2<br />GET 1 FREE</h2>
              <p>Discover premium beauty essentials with elegant skincare products and exclusive seasonal discounts.</p>
              <button className="btn" onClick={() => alert('Shop Now')}>Shop Now</button>
              <div className="shape s1"></div>
              <div className="shape s2"></div>
            </div>
          </div>
        </div>
      </section>

      {/* New Section */}
      <section className="new-section">
        <div className="content">
          <h1 className="green">All-in-One</h1>
          <h1 className="green">Skincare Complex</h1>
          <p className="sub">Multitasking formulas designed to simplify your routine.<br />Clean, effective, and balanced skincare.</p>
          <div className="big-new">NEW</div>
          <div className="right-box">
            <img src="images/7.jpg" alt="product" />
            <div className="text-box">
              <p>Gentle yet effective formulation suitable for daily skincare use enhances natural glow and skin barrier while keeping skin healthy and balanced. Multitasking formulas designed to simplify your routine. Clean, effective, and balanced skincare.</p>
              <button onClick={() => alert('Catalog')}>Catalog</button>
            </div>
          </div>
        </div>
        <img src="images/6.jpg" className="img img1" alt="main" />
      </section>

      {/* Beauty Section with Accordion */}
      <section className="beauty-section">
        <div className="left"><img src="images/4.jpg" alt="beauty" /></div>
        <div className="right">
          <div className="top-content">
            <h1>Let’s Talk About Beauty</h1>
            <p className="subtitle">How to choose the right skincare for your skin?</p>
          </div>
          <div className="items">
            {faqItems.map((item, idx) => (
              <div className="item" key={idx} onClick={() => toggleAccordion(idx)}>
                <div className="item-header">
                  <span>{item.title}</span>
                  <div className="item-right">
                    <img src={item.img} alt={item.title} />
                    <span className="arrow">↗</span>
                  </div>
                </div>
                <div className="answer" style={{ display: openItems[idx] ? 'block' : 'none' }}>
                  {item.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-left">
            <div className="logo-box">
              <span className="icon">●</span>
              <span className="logo-text">BeaconsLab</span>
            </div>
          </div>
          <div className="footer-right">
            <h2 className="footer-title">Subscribe to stay updated with latest news and updates!</h2>
            <div className="subscribe-box">
              <input type="email" placeholder="E-mail" />
              <button onClick={() => alert('Subscribed!')}>Subscribe</button>
            </div>
            <div className="socials">
              <div className="social-item">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <rect x="2" y="2" width="20" height="20" rx="5" fill="none" stroke="white" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="5" fill="none" stroke="white" strokeWidth="2"/>
                  <circle cx="17.5" cy="6.5" r="1.5" fill="white"/>
                </svg> Instagram
              </div>
              <div className="social-item">
                <svg viewBox="0 0 24 24" width="20" height="20">
                  <path d="M21 3L2 10L10 14L21 3Z" fill="none" stroke="white" strokeWidth="2"/>
                  <path d="M10 14V21L14 17" fill="none" stroke="white" strokeWidth="2"/>
                  <path d="M21 3L14 21L10 14" fill="none" stroke="white" strokeWidth="2"/>
                </svg> Telegram
              </div>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <div className="left-text">© 2026, All rights reserved</div>
          <div className="right-text">
            <span>Privacy Policy</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;