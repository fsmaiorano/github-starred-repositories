import axios from 'axios';

const GithubApi = axios.create({
  baseURL: 'https://api.github.com',
});

export default GithubApi;