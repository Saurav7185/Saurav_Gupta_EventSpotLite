import React, { useState, useEffect } from 'react';
import NavBar from './components/NavBar';
import EventCard from './components/EventCard';
import EventDetailsModal from './components/EventDetailsModal';
import eventsData from './data/events.json';
import './styles/index.css';

function App() {
  const [events, setEvents] = useState(eventsData);
  const [searchQuery, setSearchQuery] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleSearch = (query) => {
    const filteredEvents = eventsData.filter(event => 
      event.name.toLowerCase().includes(query.toLowerCase()) || 
      event.location.toLowerCase().includes(query.toLowerCase())
    );
    setEvents(filteredEvents);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <div className="app">
      <NavBar onSearch={handleSearch} />
      <div className="event-list">
        {events.map(event => (
          <EventCard key={event.id} event={event} onClick={() => { setSelectedEvent(event); setShowModal(true); }} />
        ))}
      </div>
      {showModal && <EventDetailsModal event={selectedEvent} onClose={handleModalClose} />}
    </div>
  );
}

export default App;