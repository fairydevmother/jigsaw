import { useState, useEffect } from 'react';

function Quote() {
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('https://dummyjson.com/quotes/random')
      .then((response) => response.json())
      .then((data) => {
        setQuote(data);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return <div>{quote.quote}
       {quote.author}
  </div>;
}

export default Quote;