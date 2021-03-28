import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Checkbox from './components/Checkbox'
import Dropdown from './components/Dropdown'
import { getList } from './components/List'
import { getCats } from './components/CatCall'

function App() {
  const [loading, setLoading] = useState(true)
  const [list, setList] = useState([]);
  const [cats, setCats] = useState([]);
  const [checked, setChecked] = useState(true);
  const [search, setSearch] = useState('')

//Fetch Resource Logic
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

//Fetch Category Logic
    useEffect(() => {
      let mounted = true;
      getCats()
        .then(categories => {
          if(mounted) {
            setCats(categories)
          }
        })
        setLoading(false)
      return () => mounted = false;
    }, [])

//Search Logic
  const filteredList = list.filter( resource => {
    return resource.name.toLowerCase().includes(search.toLowerCase())
  })

//Checkbox Logic
  const handleCheckbox = (checked) => {
    setChecked(checked)
  }

  return (
    <div className="App">
      <Header/>

      <div >
        <h1>Bridge Beyond Outreach</h1>

        <div className="search">
          <p className="searchtext">Search by Resource Name</p>
          <input type="text" placeholder="Resource Name" onChange={e =>setSearch(e.target.value) }/>
        </div>

        {/* <div className="cats">          
          {cats.map(category => 
            // <div>{category.name}{category.id}</div>
            <Checkbox label={category.name} onChange={handleCheckbox} selected={checked}/>
          )}
        </div> */}

        <Dropdown placeholder='Categories'>
        {cats.map(category => 
            <Checkbox styleClass="catchecks" label={category.name} onChange={handleCheckbox} selected={checked}/>
          )}
        </Dropdown>

        <ul>
          {loading ? <div>...Loading</div> : filteredList.map(resource =>
            <div className="resources" key={resource.id}>
              <h2>{resource.name}</h2>
              <p>{resource.description}</p>
              <a id="bridge" href={resource.link} target="blank">Visit {resource.name} Website</a>
              <p>{resource.contact_information}</p>
              {/* category info */}
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
