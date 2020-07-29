import React from 'react';
import FibonacciGrid from './fibonacciGrid'
import './App.css'

const App = (): JSX.Element => {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          50x50 Grid Fibonacci checker exam by Onar De jesus
        </p>
      </header>
      <section>
          <FibonacciGrid />
      </section>
    </div>
  );
}

export default App;
