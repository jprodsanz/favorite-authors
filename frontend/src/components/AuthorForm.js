import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { MainScreen } from './MainScreen';
import { Container, Button, Form } from 'react-bootstrap';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


export const AuthorForm = () => {
    const navigate = useNavigate();
    
    const schema = yup.object().shape({
        firstName: yup.string().required('Your first name is required'),
        lastName: yup.string().required('Your last name is required'),
        famousQuote: yup.string().required('Give us a quote here'),
        age: yup.number().positive().integer().min(18).max(99).required(),
    });
    
    const {register, handleSubmit, formState: {errors}} = useForm({
        resolver: yupResolver(schema),
    });
    
    const onSubmit = (data) => {
        console.log(data);
        
        axios.post('http://localhost:5000/api/author',data)
        .then(() => navigate('/display'))
        .catch(err => console.error(err))
    };
    
    return (
        <Container>
        <MainScreen title='Welcome Back Pablo...'>
                <Container className='mb-3'>
                                <legend className='text-center'>Who's your favorite author?</legend>
                                <Form onSubmit = {handleSubmit(onSubmit)}>
                                    
                                    <Form.Group className='mb-3' controlId='firstName'>
                                        <Form.Label>First Name</Form.Label>
                                            <Form.Control 
                                                type='text'
                                                
                                                placeholder='First Name'
                                                {...register('firstName')} 
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
                                                {...register('lastName')} 
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
                                                {...register('famousQuote')} 
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
                                                {...register('age')} 
                                            />
                                            {errors.age && (
                                                <Form.Text className='text-danger'>
                                                    {errors.age?.message}
                                                </Form.Text>
                                            )}
                                    </Form.Group>
                                
                                    <div className="buttonContainer">
                                        <Button 
                                        // onClick= {() => {
                                        //     navigate('/display')
                                        // }}
                                        size='lg'className='landingbutton' type="submit">Add Author</Button>
                                    </div>
                                </Form>
                </Container>
        </MainScreen>
    </Container>
    )
};


