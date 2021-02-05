import './App.css';
import Header from './components/Header'
import Footer from './components/Footer'
import { useEffect, useState } from 'react';

function App() {

  const [resource, setResource] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(async () => {
    const response = await fetch('https://buddy-system-api.herokuapp.com/resources')
    const data = await response.json()
    const [item] = data
    setResource(item)
    setLoading(false)
  }, [])

  return (
    <div className="App">
      <Header/>
      <div >
        <h1>Bridge Beyond Buddy</h1>

        {loading ? <div>...Loading</div> : <div>{resource.name}</div>}

      </div>
      <Footer/>
    </div>
  );
}

export default App;
