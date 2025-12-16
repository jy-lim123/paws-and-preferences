import { useEffect, useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import './CatCard.css'

function CatCard ({ catImages, currentIndex, setCurrentIndex, setLikedCat }) {
  const [offset, setOffset] = useState(0);
  const [isSwiping, setIsSwiping] = useState(false);
  
  useEffect(() => {
    catImages.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [catImages]);

  function nextImage() {
    setCurrentIndex(currentIndex + 1);
  }
  
  const handlers = useSwipeable({
    onSwiping: (eventData) => {
      setIsSwiping(true);
      setOffset(eventData.deltaX);
    },
    onSwipedLeft: () => {
      console.log('Disliked!');
      setOffset(-1000); // Fly off left
      setTimeout(() => {
        nextImage();
        setOffset(0);
        setIsSwiping(false);
      }, 300);
    },
    onSwipedRight: () => {
      console.log('Liked!');
      setLikedCat(prev => [...prev, catImages[currentIndex]]);
      setOffset(1000); // Fly off right
      setTimeout(() => {
        nextImage();
        setOffset(0);
        setIsSwiping(false);
      }, 300);
    },
    onSwiped: () => {
      if (isSwiping) {
        setOffset(0);
        setIsSwiping(false);
      }
    },
    trackMouse: true,
    preventScrollOnSwipe: true,
    delta: 50 
  });

  const rotation = offset * 0.05; // Subtle rotation based on swipe

  return (
    <>
      <div 
        className='card-container'
        {...handlers} 
        style={{
          transform: `translateX(${offset}px) rotate(${rotation}deg)`,
          transition: isSwiping ? 'none' : 'transform 0.3s ease-out'
        }}
      >
        <img 
          src={catImages[currentIndex]} 
          draggable={false}
          className='card-img'
        />
      </div>
      <p>Cat <strong>{currentIndex + 1}</strong> of <strong>15</strong></p>
    </>
  );
}

export default CatCard;