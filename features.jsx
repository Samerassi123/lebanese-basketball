import React from 'react';

const Features = () => {
  const features = [
    {
      title: '🏀 Player Registration',
      description: 'Easy online registration for players of all ages and skill levels. Join the Lebanese basketball community today!',
      benefits: ['Quick registration process', 'Connect with local clubs', 'Access to training programs']
    },
    {
      title: '👥 Team Management',
      description: 'Tools for coaches and team managers to organize practices, track player progress, and manage team rosters.',
      benefits: ['Team scheduling', 'Player statistics', 'Communication tools']
    },
    {
      title: '⭐ Fan Membership',
      description: 'Become a registered fan and get exclusive access to content, merchandise discounts, and event tickets.',
      benefits: ['Exclusive content', 'Membership discounts', 'Priority ticket access']
    },
    {
      title: '📅 Event Booking',
      description: 'Book tickets for matches, tournaments, and basketball events across Lebanon with our easy-to-use system.',
      benefits: ['Secure booking', 'Multiple payment options', 'Digital tickets']
    },
    {
      title: '📊 Live Scores',
      description: 'Stay updated with real-time scores, match statistics, and league standings.',
      benefits: ['Real-time updates', 'Match highlights', 'Player stats']
    },
    {
      title: '🎓 Training Programs',
      description: 'Access professional training programs, camps, and workshops for players and coaches.',
      benefits: ['Expert coaches', 'Skill development', 'Certification programs']
    }
  ];

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Features & Services</h1>
          <p>Everything you need to engage with Lebanese basketball</p>
        </div>
      </section>

      <main className="container" style={{ padding: '3rem 0' }}>
        <div className="grid">
          {features.map((feature, index) => (
            <div key={index} className="card" style={{ cursor: 'pointer' }}>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{feature.title}</h2>
              <p style={{ marginBottom: '1rem' }}>{feature.description}</p>
              <ul style={{ marginLeft: '1rem', color: '#555' }}>
                {feature.benefits.map((benefit, i) => (
                  <li key={i}>{benefit}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="card" style={{ textAlign: 'center', marginTop: '2rem' }}>
          <h2>Ready to Get Started?</h2>
          <p style={{ marginBottom: '1.5rem' }}>
            Join thousands of basketball enthusiasts across Lebanon. Register today and be part of our growing community!
          </p>
          <a href="/" style={{ 
            display: 'inline-block',
            background: '#ff0000',
            color: 'white',
            padding: '1rem 2rem',
            textDecoration: 'none',
            borderRadius: '10px',
            fontWeight: '600'
          }}>
            Get Started Now
          </a>
        </div>
      </main>
    </>
  );
};

export default Features;