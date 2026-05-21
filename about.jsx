import React from 'react';

const About = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>About Us</h1>
          <p>Learn more about the rich history and culture of Lebanese basketball</p>
        </div>
      </section>

      <main className="container" style={{ padding: '3rem 0' }}>
        <div className="card">
          <h2>History of Basketball in Lebanon</h2>
          <p>
            Basketball was introduced to Lebanon in the early 20th century and quickly became
            one of the nation's most beloved sports. The Lebanese Basketball Federation was
            established in 1949, and since then, the sport has grown exponentially across
            the country.
          </p>
          <p>
            Lebanon has produced several internationally recognized players who have competed
            in top leagues around the world, including the NBA, EuroLeague, and Chinese
            Basketball Association. The national team has achieved remarkable success,
            qualifying for multiple FIBA World Cups and Asian Championships.
          </p>
        </div>

        <div className="card">
          <h2>Our Mission</h2>
          <p>
            Our mission is to promote and develop basketball at all levels across Lebanon.
            We aim to:
          </p>
          <ul style={{ marginLeft: '2rem', marginTop: '1rem' }}>
            <li>Provide opportunities for youth to learn and play basketball</li>
            <li>Support local clubs and community programs</li>
            <li>Develop talented players for national and international competitions</li>
            <li>Promote sportsmanship, teamwork, and healthy lifestyles</li>
            <li>Preserve and celebrate the rich history of Lebanese basketball</li>
          </ul>
        </div>

        <div className="card">
          <h2>Key Achievements</h2>
          <ul style={{ marginLeft: '2rem' }}>
            <li>🏆 4-time FIBA Asia Champions (2001, 2003, 2005, 2007)</li>
            <li>🌍 Multiple World Cup appearances (2002, 2006, 2010)</li>
            <li>⭐ Produced NBA players: Rony Seikaly, Matt Freije</li>
            <li>🏅 50+ players in international leagues worldwide</li>
            <li>📈 100+ registered clubs across Lebanon</li>
          </ul>
        </div>
      </main>
    </>
  );
};

export default About;