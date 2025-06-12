import './App.css';
import { useEffect, useState } from 'react';
import {getPoids} from './services/appelerws'
function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getPoids()
        .then(setData)
        .catch(err => console.error("Erreurrrrr :", err));
  },   []);
    console.log("dataaaa:"+  data)
  return (
      <div>
        <h1>Données WS {data?.body}</h1>
        {data ? <pre>{JSON.stringify(data, null, 2)}</pre> : <p>Chargement…</p>}
      </div>
  );

}

export default App;
