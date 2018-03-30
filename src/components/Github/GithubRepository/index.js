import React from 'react';

import './github-repository.scss';

import { MediaCard } from 'shared/template';

const GithubRepository = ({ repository }) => (
    <div className="container-repository">
        <MediaCard data={repository} />
    </div>
);

export default GithubRepository;
