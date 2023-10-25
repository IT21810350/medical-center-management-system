import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import axios from "axios";

function Room({ room }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

        <div className="row bs">
            <div className="col-md-4 mt-2">
                <img src={room.imageUrls[0]} alt="" height="100px" width="200px" />
            </div>
            <div className="col-md-7">
                <h1>{room.name}</h1>
                <b><p>Room Type: {room.type}</p>
                    <p>Rent per day: {room.rentPerDay}</p></b>
                <div style={{ float: 'right' }}>
                    <Link to={`/room/${room._id}`}>
                        <button class="btn btn-primary m-2">Book now</button>
                    </Link>
                    <button class="btn btn-primary" onClick={handleShow}>View details</button>
                </div>
            </div>

            <Modal show={show} onHide={handleClose} size="lg">
                <Modal.Header>
                    <Modal.Title>{room.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Carousel>
                        {room.imageUrls.map(url => {
                            return (
                                <Carousel.Item>
                                    <img src={url} className="d-block w-100" alt="slide one" height="400px" />
                                </Carousel.Item>
                            )
                        })}
                    </Carousel>
                    <p>{room.description}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default Room;