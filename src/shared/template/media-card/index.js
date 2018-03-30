import React from 'react';
import PropTypes from 'prop-types';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { Badges } from 'shared/template';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import './media-card.scss';

const MediaCard = ({ data }) => (
    <Card className="card">
        <CardMedia
            className="media"
            image={data.owner.avatar_url}
            title={data.name}
        />
        <CardContent>
            <div className="card-title">
                {data.name}
            </div>
            <div className="card-info" >
                <p>{data.description && data.description.length > 60 ? data.description.substr(0, 60) + '...' : data.description}</p>
                <p>{data.language}</p>
                <div>
                    <div>
                        <p>Created At</p>
                        <p>{data.created_at}</p>
                    </div>
                    <div>
                        <p>Pushed At</p>
                        <p>{data.pushed_at}</p>
                    </div>
                </div>
            </div>
            <div className="card-status">
                <Badges icon="star" count={data.stargazers_count} />
                <Badges icon="eye" count={data.watchers_count} />
                <Badges icon="repoForked" count={data.forks_count} />
                <Badges icon="issueOpened" count={data.open_issues_count} />
            </div>
        </CardContent>
    </Card>
);

MediaCard.propTypes = {
    data: PropTypes.object.isRequired,
};

export default MediaCard;