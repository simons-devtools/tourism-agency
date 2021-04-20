import React from 'react';
import { useHistory, useParams } from 'react-router';
import fakeData from '../../fakeData';
import map from '../../images/map.png';
import './Ticket.css';

const Ticket = () => {
    const { id } = useParams();
    const badget = fakeData.find(bdz => bdz.id === id);
    // console.log('Data: ', badget);

    const { title, description, photo } = badget;

    // Booking Checkout eventHandler func
    const history = useHistory();
    const handleBook = () => {
        history.push('/shipment');
    }

    return (
        <div className="ticket-container">
            <div className="badget-content">
                <img src={photo} alt="Badget-img" />
                <h4>{title}</h4>
                <p>{description}</p>
            </div>

            <div className="main-content">
                <div className="booking-form">
                    <h3>Booking Desh Tourism</h3>
                    <div className="input-group">
                        <label htmlFor="">From</label>
                        <input className="inp-style" type="text" name="" placeholder="Dhake, Bangladesh" />
                    </div>
                    <div className="input-group">
                        <label htmlFor="">To</label>
                        <input className="inp-style" type="text" name="" placeholder="New York, United States" />
                    </div>
                    <div className="inputs">
                        <div className="input-group">
                            <label htmlFor="">Departure</label>
                            <input className="inp-style" type="date" name="" />
                        </div>
                        <div className="input-group">
                            <label htmlFor="">Return</label>
                            <input className="inp-style" type="date" name="" />
                        </div>
                    </div>

                    <div className="calculations">
                        <div className="amount">
                            <div className="left">
                                <h4>Your total badget:</h4>
                            </div>
                            <div className="right">
                                <p>$550</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleBook} className="btn-style">Booking Now</button>
                </div>
            </div>

            <div className="map-content">
                <img src={map} alt="map-img" />
            </div>
        </div>
    );
};

export default Ticket;