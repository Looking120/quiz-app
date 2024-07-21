import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page from '../Component/Page';
import Quiz from '../Component/Quiz';
import Result from '../Component/Result';
import Error from '../Component/Error';
import '../assets/CSS/style.css';

const HomePage = () => {
  return (
    <div className="app-container">
      <div className="quiz-box">
        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/quiz/:level" element={<Quiz />} />
          <Route path="/result" element={<Result />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
};

export default HomePage;
