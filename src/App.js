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
      .then(resources => {
        if(mounted) {
          setList(resources)
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
          {loading ? <div>...Loading</div> : list.map(resource =>
            <div> 
              <h2>{resource.name}</h2>
              <h4>{resource.description}</h4>
              {resource.categories.map(category => <div>{category.name}</div>)}
            </div>
            )}
        </ul>

        {/* {loading ? <div>...Loading</div> : <div>{resource.name}</div>} */}

      </div>
      <Footer/>
    </div>
  );
}

export default App;
