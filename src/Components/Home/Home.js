import React, { useState } from 'react';
import './Home.css';
import fakeData from '../../fakeData';
import Car from '../Car/Car';
import { Container } from '@material-ui/core';

const Home = () => {
    const [badgets, setBadgets] = useState(fakeData);

    return (
        <Container className="home-container">
            <div className="badget-con">
                {
                    badgets.map(badget => <Car key={badget.id} badget={badget} />)
                }
            </div>
        </Container>
    );
};

export default Home;