import React from 'react';

function About() {
  return (
    <main className="main" style={{ textAlign: 'center' }}>
      <h2>About Us</h2>
      <div className="aboutUs">
        <p>
          Welcome to our company! We are a dedicated team of professionals
          committed to delivering excellence in everything we do.
        </p>
        <div className="mission">
          <div className="padding20">
            <h3>Our Mission</h3>
            <p>
              To provide innovative solutions that make a positive impact on our
              clients' success.
            </p>
          </div>
          <div className="padding20">
            <h3>Our Vision</h3>
            <p>
              To become a leading force in our industry while maintaining the
              highest standards of quality and service.
            </p>
          </div>
        </div>
        <p className="margintop20">
          With years of experience in the industry, we pride ourselves on our
          customer-focused approach and commitment to excellence.
        </p>
      </div>
    </main>
  );
}

export default About;