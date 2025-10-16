import { useEffect, useState } from 'react';
import './App.css';
import './components/GithubData';
import { type GithubType, fetchData } from './services/api';
import GithubData from './components/GithubData';
import { delay } from './services/utils';

function App() {
  const [data, setData] = useState<GithubType | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState<string>('');

  const requestGithubApi = async () => {
    setLoading(true);
    try {
      setLoading(true);
      await delay(2000);
      setData(await fetchData(username));
      if (error) {
        setError(null);
      }
    } catch (err : any) {
      setError(err.message);
      setData(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='container'>
      <header className='github-data'>
        <h1>GitHub Hunter 🪤</h1>
        <div className="search-group">
          <input type="text" onChange={(e) => setUsername(e.target.value)}/>
          <button onClick={requestGithubApi}
          disabled={loading}>
            {loading ? (<> Buscando  <span className='spinner'/> </>) : 'Buscar'}
          </button>
        </div>
        {loading && 'Carregando...'}
        {error !== null && error}
        {data && <GithubData data={data}/> }
        
      </header>
    </div>
  );
}

export default App;