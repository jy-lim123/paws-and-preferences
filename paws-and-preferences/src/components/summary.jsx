import './Summary.css';

function Summary ({ likedCat, onReset }) {
  return (
    <div className='summary-container'>
      <h1>Summary</h1>
      <p>You liked {likedCat.length} cats</p>
      
      <div className="summary-list">
        {likedCat.map((cat, index) => (
          <img
            className='summary-image'
            key={index}
            src={cat}
          />
        ))}
      </div>

      <button 
        className='reset-button'
        onClick={onReset}
      >Restart</button>
    </div>
  );
}

export default Summary