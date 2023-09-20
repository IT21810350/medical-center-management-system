import React from 'react';

const FM = () => {
    return (
        <div>
            <section style={{backgroundImage: `url(${bg})`}}>
        <header>
        <img
            src={menu}
            className="menu-btn"
            onClick={handleMenuClick}
            alt="menu"
        />
        <h3 className="logo">Logo</h3>
        </header>
        <div className="center-vertical">
        <div className="content">
            <h1>Data Analytics</h1>
            <p className="hero-subtitle">Making sense of your traffic.</p>
            <a href="/" className="cta">Go to my stats</a>
        </div>
        </div>
    </section>
        </div>
    );
};

export default FM;
