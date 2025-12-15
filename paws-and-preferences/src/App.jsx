import { useState } from 'react'
import './App.css'
import CatCard from './components/catCard'

function App() {
  //const [likedCat, setLikedCat] = useState(0);
  console.log('test')
  return (
    <div>
      <h1>CatSwipe</h1>
      <h2>Let's find out what types of cats you like</h2>
      <p>Swipe right for cats that you like, and swipe right for cats that you dislike</p>
      <CatCard />
    </div>
  )
}

export default App
