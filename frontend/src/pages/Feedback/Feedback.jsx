import React, { useState } from 'react';
import './Feedback.css';
import axios from 'axios'
const Feedback = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, settext] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit =async (e) => {
    e.preventDefault();
    if (!name || !email || !text) {
      alert('Please fill out all fields.');
      return;
    }
try{
const {data}=await axios.post("http://localhost:3000/api/add",{name,email,text})
console.log(data);

}catch(error)
{
  console.log(error.message)
}
    

    setSubmitted(true);
  };

  return (
    <div className="feedback-container pooja">
      <h2>Feedback Form</h2>
      {submitted ? (
        <div className="thank-you-message">
          <h3>Thank you for your feedback!</h3>
          <p>We appreciate your comments.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Message:</label>
            <textarea
              value={text}
              onChange={(e) => settext(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-btn">
            Submit Feedback
          </button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
