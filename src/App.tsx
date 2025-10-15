import { useEffect, useState } from 'react';
import './App.css';
import { type GithubType, fetchData } from './services/api';

function App() {
  const [data, setData] = useState<GithubType | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  console.count('render');

  useEffect(() => {
    setLoading(true);
    const requestGithubApi = async () => {
      try {
        setData(await fetchData('thiagobraddock'));
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
    requestGithubApi();
  }, []);

  /* if(!data) {
    return 'Carregando...';
  }; */

  return (
    <div className='container'>
      <header className='github-data'>
        <h1>GitHub Hunter 🪤</h1>
        {loading && 'Carregando...'}
        {error !== null && error}
        {data && (
          <>
            <p>{data.name}</p>
            <img src={data.avatar_url} alt="" />
          </>
        )}
      </header>
    </div>
  );
}

export default App;