import React, { useState } from 'react';

import './App.css';

function App() {
  const [color, setColor] = useState('#4f50e1');
  const [result, setResult] = useState('a');

  const getRandomColor = () => {
    const single = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'a', 'b', 'c', 'd', 'e', 'f'];
    let random = '';
    for (let i = 0; i < 6; i++) {
      const letter = single[Math.floor(Math.random() * single.length)];
      random += letter;
    }
    return random;
  };

  const setColortoState = () => {
    setColor(getRandomColor());
  };

  React.useEffect(() => {
    setColortoState();
  }, []);

  const checkAnswer = (val) => {
    console.log(val);
    if (val) {
      setResult(true);
    } else {
      setResult(false);
    }
    setColortoState();
  };

  const colors = [getRandomColor(), getRandomColor()];

  const randomIndex = Math.floor(Math.random() * 3);

  if (randomIndex === 2) {
    colors.push(color);
  } else {
    colors.push(colors[randomIndex]);
    colors[randomIndex] = color;
  }

  return (
    <main>
      <div>
        <div className='color-box' style={{ background: `#${color}` }}></div>
        <div className='btn-container'>
          {colors.map((c, index) => {
            return (
              <button
                type='button'
                className='btn'
                key={index}
                onClick={() => checkAnswer(c === color)}
              >
                {c}
              </button>
            );
          })}
        </div>
        {result !== 'a' && (
          <div>
            {result ? (
              <h2 className='correct'>Correct</h2>
            ) : (
              <h2 className='wrong'>Wrong</h2>
            )}
          </div>
        )}
      </div>
    </main>
  );
}

export default App;
