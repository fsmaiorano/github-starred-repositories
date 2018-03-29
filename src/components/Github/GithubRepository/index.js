import React from 'react';

import './github-repository.scss'; 

const GithubRepository = ({repository}) => (
    <div className="container">
        <p>id {repository.id}</p>
        <p>language {repository.language}</p>
        <p>pushed at{repository.pushed_at}</p>
        <p>created at{repository.created_at}</p>
        <p>open issues count{repository.open_issues_count}</p>
        <p>forks count{repository.forks_count}</p>
        <p>name {repository.name}</p>
        <p>stars {repository.stargazers_count}</p>
        <p>watchers {repository.watchers_count}</p>
        <p>url {repository.url}</p>
    </div>
);

export default GithubRepository;


//nome
//language
//qtd estrelas
// qtd de issues
//created
//pushed