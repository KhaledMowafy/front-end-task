import './App.css';
import React, {useState, useEffect} from 'react';
import Videos from './views/videos/videos';
import Header from './views/header/Header';

function App() {
  const [search, setSearch] = useState();

  return (
    <div className="App">
      <Header onSearchChange ={event => setSearch(event.target.value)}/>
      <Videos searchValue={search}/>
    </div>
  );
}

export default App;
