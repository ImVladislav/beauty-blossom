import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminFeedbackPage = () => {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    axios.get('https://beauty-blossom-backend.onrender.com/api/feedback')
      .then(response => {
        const receivedFeedbacks = response.data;
          setFeedbacks(receivedFeedbacks);
          
      })
      .catch(error => {
        console.error('Помилка отримання даних про відгуки', error);
      });
  }, []);

  return (
    <div>
      <h3>Сторінка відгуків адміністратора</h3>
      {feedbacks.map(feedback => (
        <div key={feedback._id}>
          {/* Рендерінг даних відгуку */}
          <p>{feedback.feedbacks}</p>
        </div>
      ))}
    </div>
  );
};

export default AdminFeedbackPage;