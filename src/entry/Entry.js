import React, { useState } from 'react';

import IDScanner from '../scanner/IDScanner';

const Entry = () => {

  const [locked, setLocked] = useState(true);
  const [hasKeyCard, setKeyCard] = useState();

  return (
    <div>
      <IDScanner
      locked={locked} 
      setLocked={setLocked} 
      hasKeyCard={hasKeyCard} 
      setKeyCard={setKeyCard}/>
      <button data-testid='open-button' disabled={locked}>Open</button>
    </div>
  );
}

export default Entry;