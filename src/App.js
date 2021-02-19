import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import {getList} from './components/List'

function App() {
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([]);
  const [search, setSearch] = useState('')

  //Fetch Logic
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

  //Search Logic
  const filteredList = list.filter( resource => {
    return resource.name.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className="App">
      <Header/>

      <div >
        <h1>Bridge Beyond Buddy</h1>
        <div className="search">
          <p className="searchtext">Search by Resource Name</p>
          <input type="text" placeholder="Resource Name" onChange={e =>setSearch(e.target.value) }/>
        </div>
        <ul>
          {loading ? <div>...Loading</div> : filteredList.map(resource =>
            <div key={resource.id}>
              <h2>{resource.name}</h2>
              <h4>{resource.description}</h4>
              {resource.categories.map(category => <div>{category.name}</div>)}
            </div>
            )}
        </ul>

      </div>

      <Footer/>
    </div>
  );
}

export default App;
