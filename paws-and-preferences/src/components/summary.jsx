function Summary ({ likedCat, onReset }) {
  return (
    <>
      <h1>Summary</h1>
      <p>You liked {likedCat.length} cats</p>
      
      <div>
        {likedCat.map((cat, index) => (
          <img
            key={index}
            src={cat}
            alt="Liked cat"
            style={{
              width: '100px',
              borderRadius: '12px',
              margin: '6px'
            }}
          />
        ))}
      </div>

      <button onClick={onReset}>Restart</button>
    </>
  );
}

export default Summary