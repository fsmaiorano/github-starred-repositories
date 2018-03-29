import React from 'react';
import PropTypes from 'prop-types';

import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card';
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
                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                    across all continents except Antarctica
        </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    Share
        </Button>
                <Button size="small" color="primary">
                    Learn More
        </Button>
            </CardActions>
        </Card>
    </div>
);

export default MediaCard;