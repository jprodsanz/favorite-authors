import React from 'react'
import { Button, Container, Row } from 'react-bootstrap';
import './Home.css';



export const Home = () => {
    return (
        <div className='main'>
            <Container>
                <Row>
                    <div className='intro-text'>
                        <div>
                            <h1 className="title">Welcome to App X </h1>
                            <p className="subtitle"> A safe place for your favorite Authors</p>
                        </div>
                            <div className="buttonContainer">
                                <a href="/new">
                                    <Button size='lg'className='landingbutton'>
                                        Add author
                                    </Button>
                                </a>
                                <a href="/display">
                                    <Button size='lg'className='landingbutton' variant='outline-primary'>
                                        View All
                                    </Button>
                                </a>
                            </div>
                    </div>
                </Row>
            </Container>
        </div>
    )
}
