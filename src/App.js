import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import Loader from './components/Loader'
import Checkbox from './components/Checkbox'
import Dropdown from './components/Dropdown'
import { getList } from './components/List'
import { getCats } from './components/CatCall'
import MultiSelect from "react-multi-select-component";


function App() {
  const [loading, setLoading] = useState(false)
  const [list, setList] = useState([]);
  const [cats, setCats] = useState([]);
  //const [checked, setChecked] = useState(true);
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState([]);

  const options = [];
//Fetch Resource Logic
  useEffect(() => {
    let mounted = true;
    getList()
      .then(resources => {
        if(mounted) {
          setList(resources)
          setLoading(true)
        return () => mounted = false;
        }
      })
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
    }, [])

//Search Logic
  const filteredList = list.filter( resource => {
    // todo : apply filters here based on what is set
    //resource.categories.where(x=>x.name == 'what is in your filtered set a , delimited list of category names')
    return resource.name.toLowerCase().includes(search.toLowerCase())
  })

  const setCategories = (listOf)=>{
    setSelected(listOf);
    console.log("todo: igure out how to fire off the filteredList logic having it consider the selected categories")
  }

  return (
    <div className="App">
      <Header/>

      <div >
        <h1>Bridge Beyond Outreach</h1>

        <div className="search">
          <h4 className="searchtext">Search by Resource Name</h4>
          <input type="text" placeholder="Resource Name" onChange={e =>setSearch(e.target.value)}/>
        </div>
        <div>
    </div>
        {/* map data to options array */}
        <div className="hiddenArray">   
          {cats.map(category => 
            options.push({label:category.name, value:category.name})
        )}</div>
     
        <div className="multiSelect">
          <h4>Search by Category</h4>
         
        <MultiSelect
        options={options}
        value={selected}
        onChange={setCategories}
        labelledBy="Select a Category"
        disableSearch={true}
      />
      </div>
     
        <ul>
          {loading ? filteredList.map(resource =>
            <div className="resourcesCard" key={resource.id}>
              <div className="container">
              <h2>{resource.name}</h2>
              <p>{resource.description}</p>
              <a id="bridge" href={resource.link} target="blank">Visit {resource.name} Website</a>
              <p>{resource.contact_information}</p>
              {/* category info */}
              {resource.categories.map(category => <div>{category.name}</div>)}
              </div>
            </div> 
            ) : <Loader/>
            }
        </ul>
      </div>

      <Footer/>
    </div>
  );
}

export default App;
