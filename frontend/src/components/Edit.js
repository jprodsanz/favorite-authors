import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom'
import { Container, Button, Form } from 'react-bootstrap';
import { MainScreen } from './MainScreen';

export const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [ firstName, setFirstName ] = useState('');
    const [ lastName, setLastName ] = useState('');
    const [ famousQuote, setFamousQuote ] = useState('');
    const [ age, setAge ] = useState('');
    const [ errors, setErrors ] = useState({});
    const [notFoundError, setNotFoundError ] = useState ('');
        console.log(id);
        useEffect  (() => {
            axios
                .get(`http://localhost:5000/api/author/${id}`)
                .then(response => {
                    console.log(response.data);
                        setFirstName(response.data.firstName);
                        setLastName(response.data.lastName);
                        setFamousQuote(response.data.famousQuote);
                        setAge(response.data.age);
                })
                    .catch((err) => {
                        console.log(err.response);
                        setNotFoundError('Author does not exist');
                    });
        },[]);

        const onSubmit = (e) => {
            e.preventDefault();
            // console.log(data);
            
            axios
            .put(`http://localhost:5000/api/author/${id}`,{firstName, lastName, famousQuote, age})
            .then((response) => {
                console.log(response);
                setErrors({});
                navigate('/display')
            })
            .catch((err) => {
                console.log(err.response.data);
                setErrors(err.response.data.errors);
        });
    };
        return (
            <Container>
            <MainScreen title='Welcome Back Pablo...'>
                    <Container className='mb-3'>
                                    <legend className='text-center'>Edit Author </legend>
                                    <Form onSubmit = {onSubmit}>
                                    {notFoundError ? (
                                    <h2>
                                        {notFoundError} <Link to="/new">Click here to add author</Link>
                                    </h2>
                                    ) : null}
                                        <Form.Group className='mb-3' controlId='firstName'>
                                            <Form.Label>First Name</Form.Label>
                                                <Form.Control 
                                                    type='text'
                                                    placeholder='First Name'
                                                    value={firstName}
                                                    onChange={e => setFirstName(e.target.value)
                                                    }
                                            
                                                />
                                                {errors.firstName && (
                                                    <Form.Text className='text-danger'>
                                                        {errors.firstName?.message}
                                                    </Form.Text>
                                                )}
                                        </Form.Group>
    
                                        <Form.Group className='mb-3' controlId='lastName'>
                                            <Form.Label>Last Name</Form.Label>
                                                <Form.Control 
                                                    type='text'
                                                    placeholder='Last Name'
                                                    value={lastName}
                                                    onChange={e => setLastName(e.target.value)
                                                    }
                                                    
                                                />
                                                {errors.lastName && (
                                                    <Form.Text className='text-danger'>
                                                        {errors.lastName?.message}
                                                    </Form.Text>
                                                )}
                                        </Form.Group>
    
                                        <Form.Group className='mb-3' controlId='famousQuote'>
                                            <Form.Label>Famous Quote</Form.Label>
                                                <Form.Control 
                                                    type='textarea'
                                                    placeholder='Famous Quote'
                                                    value= {famousQuote}
                                                    onChange={e => setFamousQuote(e.target.value)
                                                    }
                                                    // {...register('famousQuote')} 
                                                />
                                                {errors.famousQuote && (
                                                    <Form.Text className='text-danger'>
                                                        {errors.famousQuote?.message}
                                                    </Form.Text>
                                                )}
                                        </Form.Group>
    
                                        <Form.Group className='mb-3' controlId='age'>
                                            <Form.Label>Age</Form.Label>
                                                <Form.Control 
                                                    type='number'
                                                    placeholder='32'
                                                    value={age}
                                                    onChange={e => setAge(e.target.value)
                                                    }
                                                    // {...register('age')} 
                                                />
                                                {errors.age && (
                                                    <Form.Text className='text-danger'>
                                                        {errors.age?.message}
                                                    </Form.Text>
                                                )}
                                        </Form.Group>
                                    
                                        <div className="buttonContainer">
                                            <Button 
                                            size='lg'className='landingbutton' type="submit">Edit Author</Button>
                                        </div>
                                    </Form>
                    </Container>
            </MainScreen>
        </Container>
        )
    };