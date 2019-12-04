import React from 'react';

const IDScanner = ({ locked, hasKeyCard, setLocked, setKeyCard }) => {
  
const toggleLocked = () => {
  setLocked(!locked);
}

  const toggleKeyCard = () => {
    setKeyCard(!hasKeyCard)
    toggleLocked();
  }
  
  return (
    <div>
      <div className={locked ? 'locked' : 'unlocked'}>{locked ? 'Locked' : 'Unlocked'}</div>
      {console.log(locked)}
      <div className='key-card'>
        KeyCard
        <button onClick={toggleKeyCard} className="toggle-btn">
          {hasKeyCard ? 'Remove Key Card' : 'Insert Key Card'}
        </button>
      </div>
    </div>
  );
};

IDScanner.defaultProps = {
  locked: true,
  hasKeyCard: false
};

export default IDScanner;
