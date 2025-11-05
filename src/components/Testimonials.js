import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './Testimonials.css';

const fallbackReviews = [
  {
    author: 'Jennifer R.',
    text: 'Amazing instructors, coaches, and classes—competition for adults and kids.',
    rating: 5,
  },
  {
    author: 'Brian C.',
    text: 'Coaches pour into every athlete, pushing technique and discipline while keeping the environment supportive.',
    rating: 5,
  },
  {
    author: 'Leslie H.',
    text: 'The facility is spotless, schedules are organized, and the staff makes families feel welcome from day one.',
    rating: 5,
  },
  {
    author: 'Marcos G.',
    text: 'My kids and I have grown so much here—the training is technical, intense, and the culture is second to none.',
    rating: 5,
  },
];

const Testimonials = () => {
  const [reviews, setReviews] = useState(fallbackReviews);

  useEffect(() => {
    fetch('/api/google-reviews')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.success && Array.isArray(data.reviews)) {
          const fiveStar = data.reviews
            .filter(review => review.rating === 5)
            .map(review => ({
              author: review.author_name,
              text: review.text,
              rating: review.rating,
            }));
          if (fiveStar.length > 0) {
            setReviews(fiveStar);
          }
        }
      })
      .catch(error => {
        console.error('Error fetching Google Reviews:', error);
        setReviews(fallbackReviews);
      });
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
  };

  return (
    <section id="testimonials-section" className="testimonials-section">
      <h2 className="section-title">What Our Members Say</h2>
      <div className="testimonials-container">
        <Slider {...settings}>
          {reviews.map((review, index) => (
            <div key={index}>
              <div className="testimonial-card">
                <div className="testimonial-rating" aria-label={`${review.rating}-star Google review`}>
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex} className="testimonial-star">★</span>
                  ))}
                </div>
                <p className="testimonial-quote">“{review.text}”</p>
                <p className="testimonial-author">— {review.author || review.author_name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;