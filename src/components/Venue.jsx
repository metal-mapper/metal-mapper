import React, { Component } from 'react';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardMedia from '@material-ui/core/CardMedia';

const styles = {
  card: {
    minWidth: 200,
  },
  title: {
    marginBottom: 16,
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },

  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

const Venue = props => (
  <Card
    style={{ width: 200 }}
  >
    <CardMedia
      image="https://static.vinepair.com/wp-content/uploads/2017/05/pub-internal.jpg"
      title="Contemplative Reptile"
      style={{ height: 200 }}
    />
    <CardContent>
      <Typography gutterBottom variant="headline" component="h2">
        {props.venue.venueName}
      </Typography>
      <Typography component="p">
          Tags: {props.venue.venueType}
      </Typography>
      <Typography component="p">
          Rating: {props.venue.venueRating}
      </Typography>
      <Typography component="p">
          Address: {props.venue.venueAddress}
      </Typography>
      <Typography component="p">
          Price: {props.venue.venuePriceRange}
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
);

export default withStyles(styles)(Venue);
