import { useState } from 'react'
import './App.css'
import CatCard from './components/catCard'

function App() {
  //const [likedCat, setLikedCat] = useState(0);
  const TOTAL_IMAGES = 15;
  const [catImages, setCatImages] = useState(() => {
    const imgUrl = [];
    for (let i = 0; i < TOTAL_IMAGES; i++){
      imgUrl.push(`https://cataas.com/cat?width=500&height=500&random=${i}`)
    }
    return imgUrl;
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div>
      <h1>CatSwipe</h1>
      <h2>Let's find out what types of cats you like</h2>
      <p>Swipe right for cats that you like, and swipe left for cats that you dislike</p>
      <CatCard 
        catImages={catImages}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
      />
    </div>
  )
}

export default App
