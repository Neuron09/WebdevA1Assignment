import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from './title.png';
import './Summary1.css';

function Summary1() {
  const [likes, setLikes] = useState(279); // Set an initial value for likes
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
    setIsLiked(true);
  };

  return (
    <div className="analysis-container"> 
      <div className="logo-container">
        <img src={logo} className="title-container" alt="title" />
        <Link to="/login" className="login">Login</Link>
      </div>
      <div className="summary-container"> 
      <h1>News Summary</h1>
      <p>
        Experts, including leaders from OpenAI and Google DeepMind, have warned that artificial intelligence (AI) could lead to the extinction of humanity. The Centre for AI Safety has published a statement urging the global prioritization of mitigating AI risks, comparing it to other societal-scale risks like pandemics and nuclear war. The statement highlights concerns about AI being weaponized, the potential for AI-generated misinformation to destabilize society, the concentration of AI power, and human enfeeblement. While some experts support these warnings, others believe they are exaggerated. The debate centers around the impact of AI on humanity, with some emphasizing the need to address near-term harms and issues such as bias in AI systems. The concerns raised by the Centre for AI Safety highlight the need for careful consideration of AI's societal implications and the development of regulatory frameworks. The discussion around AI risks continues to evolve, with ongoing debates on how to ensure the safe and responsible development and deployment of AI technologies.
      </p>
      <button className="like-button" onClick={handleLike} disabled={isLiked}>
        {isLiked ? 'Liked' : 'Like'}
      </button>
      <p>Total Likes: {likes}</p>
    </div>
    </div>
  );
}

export default Summary1;
