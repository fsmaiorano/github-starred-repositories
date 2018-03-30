import React from 'react';
import PropTypes from 'prop-types';

import './github-repository.scss';

import { MediaCard } from 'shared/template';

const GithubRepository = ({ repository }) => (
    <div className="container-repository">
        <MediaCard data={repository} />
    </div>
);

GithubRepository.propTypes= {
    repository: PropTypes.object.isRequired,
}

export default GithubRepository;
