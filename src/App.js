import React from 'react'
import SearchDoctor from './components/SearchDoctor/SearchDoctor'
import './App.css'
import FavoriteDoctor from './components/FavoriteDoctor/FavoriteDoctor'

function App() {
  return (
    <div className="App">
      {/* <SearchDoctor /> */}
      <FavoriteDoctor />
    </div>
  )
}

export default App;
