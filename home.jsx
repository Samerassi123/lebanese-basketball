import React from 'react';
import FormCard from '../Components/formcard';

const Home = () => {
  const cities = [
    { name: 'Beirut', desc: 'Home to major clubs, busy arenas, and passionate supporters.' },
    { name: 'Jounieh', desc: 'Known for strong basketball culture and loyal fan communities.' },
    { name: 'Zahle', desc: 'A city with sporting energy and growing youth talent.' },
    { name: 'Tripoli', desc: 'Another important place where basketball continues to grow.' }
  ];

  const forms = [
    {
      title: 'Player Registration',
      fields: [
        { name: 'playerName', label: 'Full Name', type: 'text', placeholder: 'Enter your name', required: true },
        { name: 'age', label: 'Age', type: 'number', placeholder: 'Enter your age', required: true },
        { name: 'position', label: 'Position', type: 'select', options: ['Point Guard', 'Shooting Guard', 'Small Forward', 'Power Forward', 'Center'], required: true },
        { name: 'city', label: 'City', type: 'text', placeholder: 'Your city', required: true }
      ]
    },
    {
      title: 'Team Application',
      fields: [
        { name: 'teamName', label: 'Team Name', type: 'text', placeholder: 'Enter team name', required: true },
        { name: 'coachName', label: 'Coach Name', type: 'text', placeholder: 'Coach full name', required: true },
        { name: 'level', label: 'Competition Level', type: 'select', options: ['Youth', 'School', 'University', 'Club'], required: true },
        { name: 'players', label: 'Number of Players', type: 'number', placeholder: 'Example: 12', required: true }
      ]
    },
    {
      title: 'Fan Membership',
      fields: [
        { name: 'fanName', label: 'Name', type: 'text', placeholder: 'Enter your name', required: true },
        { name: 'email', label: 'Email', type: 'email', placeholder: 'Enter your email', required: true },
        { name: 'favoriteTeam', label: 'Favorite Team', type: 'text', placeholder: 'Favorite Lebanese team', required: true },
        { name: 'plan', label: 'Membership Type', type: 'select', options: ['Basic', 'Premium', 'VIP'], required: true }
      ]
    },
    {
      title: 'Event Booking',
      fields: [
        { name: 'visitorName', label: 'Visitor Name', type: 'text', placeholder: 'Enter your name', required: true },
        { name: 'date', label: 'Match Date', type: 'date', placeholder: '', required: true },
        { name: 'arenaCity', label: 'Arena City', type: 'text', placeholder: 'Choose a city', required: true },
        { name: 'tickets', label: 'Tickets', type: 'number', placeholder: 'How many tickets', required: true }
      ]
    }
  ];

  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);
    alert('Form submitted successfully! Check console for details.');
  };

  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>Lebanese Basketball</h1>
          <p>Basketball is one of the most loved sports in Lebanon. From school teams to local clubs and national competitions, the game has a strong and proud community across the country.</p>
        </div>
      </section>

      <main className="container" style={{ padding: '3rem 0' }}>
        <div className="card">
          <h2>About Lebanese Basketball</h2>
          <p>
            Basketball is one of the most loved sports in Lebanon. From school teams
            to local clubs and national competitions, the game has a strong and proud
            community across the country. The Lebanese Basketball League features
            intense rivalries and has produced many talented players who have gone on
            to play internationally.
          </p>
        </div>

        <div className="card">
          <h2>Popular Club Cities</h2>
          <div className="grid">
            {cities.map((city, index) => (
              <div key={index} className="mini-card">
                <h3>{city.name}</h3>
                <p>{city.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h2>Basketball Forms</h2>
          <p>Fill out the required forms below to get involved with Lebanese basketball.</p>
          <div className="forms-grid">
            {forms.map((form, index) => (
              <FormCard
                key={index}
                title={form.title}
                fields={form.fields}
                onSubmit={handleFormSubmit}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;