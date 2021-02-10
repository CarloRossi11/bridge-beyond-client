import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import {getList} from './components/List'

function App() {
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([]);

  useEffect(() => {
    let mounted = true;
    getList()
      .then(items => {
        if(mounted) {
          setList(items)
        }
      })
      setLoading(false)
    return () => mounted = false;
  }, [])

  return (
    <div className="App">
      <Header/>
      <div >
        <h1>Bridge Beyond Buddy</h1>

        <ul>
          {loading ? <div>...Loading</div> : list.map(item => 
          // can add key={item.item} in li tag
          <li>
            {item.name} </li>)}
        </ul>

        {/* {loading ? <div>...Loading</div> : <div>{resource.name}</div>} */}

      </div>
      <Footer/>
    </div>
  );
}

export default App;
