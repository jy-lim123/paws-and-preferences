import { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

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
      <div {...handlers} style={{ touchAction: 'pan-y', userSelect: 'none'}}>
        <img 
          src={catImages[currentIndex]} 
          draggable={false}
              style={{

      borderRadius: '30px',
    }}
        />
      </div>
      <p>Cat {currentIndex + 1} of 15</p>
    </>
  );
}

export default CatCard;