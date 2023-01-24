import React from 'react'
import axios from 'axios'
import { Accordion, Badge, Button, Card } from "react-bootstrap";
import { MainScreen } from './MainScreen';
import { useState, useEffect } from 'react';
import { format } from 'date-fns'

export const DisplayAll = () => {
    const [ allAuthors, setAllAuthors ] = useState([]);
    
    useEffect(() => {
        axios
        .get('http://localhost:5000/api/authors')
        .then ((response) => {
            console.log(response.data);
            setAllAuthors(response.data);
        })
        .catch((err) => {
            console.log(err.response);
        });
    }, []);

    const deleteHandler = (id) => {
        axios
        .delete(`http://localhost:5000/api/author/${id}`)
        .then((response) => {
            console.log ('Your author has been deleted');
            console.log(response);

            const filteredAuthors = allAuthors.filter((author) => {
                return author._id !== id;
            });
            setAllAuthors(filteredAuthors);
            })
            .catch((err) => {
                console.log('Warning, you will delete entry', err.response);
            });
        };
    return (
        <MainScreen title='Welcome back Pablo...'>
            {
                [...allAuthors].sort((a, b) => a.firstName.localeCompare(b.firstName)).map((author) =>(
                    <Accordion key={author._id}>
                        <Accordion.Item >
                    <Card style= {{ margin: 10 }}>
                        <Card.Header style= {{display:'flex'}}>
                                <span 
                                    style={{
                                        color: 'black',
                                        textDecoration: 'none',
                                        flex: 1, 
                                        cursor: 'pointer',
                                        alignSelf: 'center',
                                        fontSize: 18, 
                                    }}
                                    >
                                        <Accordion.Button as={Card.Text} bg='link' >
                                            {author.firstName} {author.lastName}
                                        </Accordion.Button>
                                </span>
                            <div>
                                <Button href={`/edit/${author._id}`}>Edit</Button>
                                <Button variant='danger' className='mx-2' onClick={()=>deleteHandler(author._id)}>Delete</Button>
                            </div>
                        </Card.Header>
                                    <Accordion.Collapse >
                                            <Card.Body>
                                                <h4>
                                                    <Badge bg='success' text='light'>
                                                        Age -  {author.age}
                                                    </Badge>
                                                </h4>
                                            <blockquote className="blockquote mb-0">
                                                <p>
                                                    {author.famousQuote}
                                                </p>
                                                <footer className="blockquote-footer">
                                                    Created on - {author.createdAt} </footer>
                                                </blockquote>
                                            </Card.Body>
                                    </Accordion.Collapse>
                    </Card>
                    </Accordion.Item>
                    </Accordion>
                ))
            }
        </MainScreen>
            
    );
    };