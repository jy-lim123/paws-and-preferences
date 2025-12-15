import { useEffect, useState } from 'react';

function CatCard () {
  const TOTAL_IMAGES = 15;
  const [catImages, setCatImages] = useState(() => {
    const imgUrl = [];
    for (let i = 0; i < TOTAL_IMAGES; i++){
      imgUrl.push(`https://cataas.com/cat?width=450&height=600&random=${i}`)
    }
    return imgUrl;
  });

  const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
    catImages.forEach((url) => {
      const img = new Image();
      img.src = url;
    });
  }, [catImages]);

  function nextImage() {
    if (currentIndex < 14){
      setCurrentIndex(currentIndex + 1);
    }
    
  }

  function resetImage() {
    //setCatImages([]);
    setCurrentIndex(0);
  }


  console.log(catImages);
  return (
    <>
      <img src={catImages[currentIndex]} />
      <button onClick = {nextImage}>Next</button>
      <button onClick = {resetImage}>Reset</button>
      <p>Cat {currentIndex + 1} of 15</p>
    </>
  );
}

export default CatCard