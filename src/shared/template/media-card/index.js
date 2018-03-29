import React from 'react';
import PropTypes from 'prop-types';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
import { Badges } from 'shared/template';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

import './media-card.scss';

const MediaCard = ({ data }) => (
    <div>
        <Card className="card">
            <CardMedia
                className="media"
                image={data.owner.avatar_url}
                title={data.name}
            />
            <CardContent>
                <Typography gutterBottom variant="headline" component="h2">
                    {data.name}
                </Typography>
                <Typography component="p">
                    <p>{data.description}</p>
                    <p>{data.language}</p>
                    <p>{data.created_at}</p>
                    <p>{data.pushed_at}</p>
                </Typography>
            </CardContent>
            <CardActions>
                <Badges icon="star" count={data.stargazers_count} />
                <Badges icon="eye" count={data.watchers_count  } />
                <Badges icon="repoForked" count={data.forks_count  } />
                <Badges icon="issueOpened" count={data.open_issues_count } />
            </CardActions>
        </Card>
    </div>
);

MediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default MediaCard;