import React, { useState } from 'react';
import axios from 'axios';
import { FeedbackText, FeedbackTextArea, FeedbackThumb, SubmitFeedback } from './UserPageStyled';

const Feedback = () => {
  const [feedbackText, setFeedbackText] = useState('');

  const handleFeedbackChange = (e) => {
    setFeedbackText(e.target.value);
  };

  const handleSendFeedback = async () => {
    try {
      // Відправка POST-запиту на сервер
      const response = await axios.post('https://beauty-blossom-backend.onrender.com/api/feedback', {
        feedback: feedbackText,
      });

      // Опрацювання відповіді сервера
      console.log(response.data);

      // Очищення textarea після успішної відправки
      setFeedbackText('');

      // Виведення повідомлення в консоль
      console.log('Дякуємо за відгук!');
    } catch (error) {
      console.error('Помилка при відправці відгуку:', error);
    }
  };

  return (
    <FeedbackThumb>

      <FeedbackText>
        Дорогі партнери! Ми безмежно вдячні вам за співпрацю з нами. Цінуємо вашу думку і будемо раді стати краще для вас. Якщо у вас є запитання, пропозиції або інші побажання - залиште, будь ласка, відгук.
      </FeedbackText>
      <FeedbackTextArea
        
        placeholder="Ваш відгук та пропозиції"
        rows={4} // Фіксована кількість рядків
        cols={50} // Фіксована кількість символів в рядку
        value={feedbackText}
        onChange={handleFeedbackChange}
      />
      <SubmitFeedback onClick={handleSendFeedback}>Відправити</SubmitFeedback>
    </FeedbackThumb>
  );
}

export default Feedback;