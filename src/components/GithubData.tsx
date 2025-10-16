import { FaXTwitter, FaYoutube } from 'react-icons/fa6';
import type { GithubType } from '../services/api';
import './GithubData.css';
import { useEffect } from 'react';

type GithubDataProps = {
  data: GithubType
};

function GithubData({ data }: GithubDataProps) {
  console.count('Renderizou');
  useEffect(() => {
    return () => {
      console.log('Desmontou');
    };
  }, [data]);
  return (
    <div className="github__main-info">
      <img src={ data.avatar_url } alt="Imagem de Perfil do usuário" />
      <section>
        <h2>{data.name}</h2>
        <div className="social-media">
          {data.twitter_username && (
          <a href={ `https://twitter.com/${data.twitter_username}` } target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={ 20 } />
          </a>
          )}
          <a href={ data.blog } target="_blank" rel="noopener noreferrer">
            <FaYoutube size={ 20 } />
          </a>
        </div>
        <p>{ data.bio }</p>
      </section>
    </div>
  );
}

export default GithubData;