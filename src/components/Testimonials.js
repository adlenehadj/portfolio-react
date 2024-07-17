import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { TestimonialsContext } from '../components/TestimonialsContext';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const { testimonials } = useContext(TestimonialsContext);

  return (
    <div className="testimonials">
      <h1>Témoignages</h1>
      <ul className="testimonials-list">
        {testimonials.map((testimonial) => (
          <li key={testimonial.id} className="testimonial-item">
            <p><strong>{testimonial.name}:</strong> {testimonial.message}</p>
          </li>
        ))}
      </ul>
      <Link to="/add-testimonial" className="add-testimonial-button">Ajouter un témoignage</Link>
    </div>
  );
};

export default Testimonials;


