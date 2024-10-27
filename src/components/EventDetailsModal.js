import React, { useState } from 'react';
import '../styles/EventDetails.css'

const EventDetailsModal = ({ event, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{event.name}</h2>
        <p>{event.date}</p>
        <p>{event.location}</p>
        <p>{event.description}</p>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EventDetailsModal;