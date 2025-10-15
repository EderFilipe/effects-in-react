export type GithubType = {
  login:               string;
  avatar_url:          string;
  repos_url?:           string;
  name?:                string;
  company?:             string;
  blog?:                string;
  location?:            string;
  bio?:                 string;
  twitter_username?:    string;
  public_repos?:        number;
  public_gists?:        number;
  followers?:           number;
  following?:           number;
  created_at?:          string;
};

export async function fetchData(username: string) {
  const response = await fetch(`https://api.github.com/users/${username}`);


  if(!response.ok) {
    throw new Error('Usuário Inválido');
  }
  const data = await response.json();
  // console.log({data});

  return data;
}
