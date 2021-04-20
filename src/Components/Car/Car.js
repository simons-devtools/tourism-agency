import React from 'react';
import './Car.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Container } from '@material-ui/core';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});

function Car({ badget }) {
    const classes = useStyles();

    const { id, title, description, photo } = badget;

    const history = useHistory();
    const handleBook = (id) => {
        history.push(`/booking/${id}`);
    }

    return (
        // <Container classes="car-container">
            <Card className={classes.root} style={{margin: '20px'}}>
                <CardActionArea>
                    <CardMedia
                        style={{ width: '250px' }}
                        className={classes.media}
                        image={photo}
                        title="Click to spand me"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">{title}</Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button size="small" color="primary">Share</Button>
                    <Button onClick={() => handleBook(id)} size="small" color="primary">Book Now</Button>
                </CardActions>
            </Card>
        // </Container>
    );
}

export default Car;