import React from 'react';
import './about.css';

export function About() {
  const [quote, setQuote] = React.useState('Loading...');
  const [quoteAuthor, setQuoteAuthor] = React.useState('unknown');

  React.useEffect(() => {
    const random = Math.floor(Math.random() * 1000);
    fetch('https://api.quotable.io/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setQuoteAuthor(data.author);
      })
      .catch();
  }, []);



  return (
    <main className='main'>
      <h2>About Conference Scheduler</h2>
      <div className="about-container">
        <p> 
          Conference Scheduler was created to provide organizations with an application specifically for administrating and organizing conference meetings
          as well as delivering necessary information to attendees in real time.
        </p>
        <div className='quote-container'>
          <p className='quote'>{quote}</p>
          <p className='author'>{quoteAuthor}</p>
        </div>
      </div>
    </main>

  );
}