import { useState } from 'react'
import './App.css'
import CatCard from './components/CatCard'
import Summary from './components/Summary';
import Header from './components/Header';

function App() {
  const [likedCat, setLikedCat] = useState([]);
  const TOTAL_IMAGES = 15;
  const [catImages] = useState(() => {
    const imgUrl = [];
    for (let i = 0; i < TOTAL_IMAGES; i++){
      imgUrl.push(`https://cataas.com/cat?width=300&height=300&random=${i}`)
    }
    return imgUrl;
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  function resetApp() {
    setCurrentIndex(0);
    setLikedCat([]);
  }
  return (
    <>
      <Header />
      <div className='app-container'>
        {currentIndex < catImages.length ? (
          <>
            <h2>Let's find out what types of cats you like</h2>
            <p>Swipe right for cats that you like, and swipe left for cats that you dislike</p>
            <CatCard 
              catImages={catImages}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              setLikedCat={setLikedCat}
              likedCat={likedCat}
            />
          </>
        ) : (
          <Summary 
            likedCat = {likedCat}
            onReset = {resetApp}
          />
        )
        }
      </div>
    </>

  )
}

export default App
