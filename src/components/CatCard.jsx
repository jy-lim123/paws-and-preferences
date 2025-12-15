import { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import './CatCard.css'

function CatCard ({ catImages, currentIndex, setCurrentIndex, setLikedCat }) {
  
  useEffect(() => {
    catImages.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [catImages]);

  function nextImage() {
    //if (currentIndex < catImages.length - 1){
      setCurrentIndex(currentIndex + 1);
    //}
  }
  
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      console.log('Disliked!');
      nextImage();
    },
    onSwipedRight: () => {
      console.log('Liked!');
      setLikedCat(prev => [...prev, catImages[currentIndex]]);
      nextImage();
    },
    trackMouse: true,
    preventScrollOnSwipe: true,
    delta: 50 
  });

  return (
    <>
      <div 
        className='card-container'
        {...handlers} 
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