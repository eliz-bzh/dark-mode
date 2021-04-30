import React from 'react';
import { Button, ButtonToolbar, Card, Carousel } from 'react-bootstrap';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const CardElement = () => {
    return (
        <Card style={{ width: '16.5rem' }}>
            <Carousel style={{ width: `16.4rem` }}>
                {[1, 2, 3].map(p =>
                    <Carousel.Item key={p}>
                        <img height='230px' className="d-block w-100" src="https://sun9-50.userapi.com/impf/c850136/v850136968/d1b24/-EMtgReU__k.jpg?size=200x0&quality=96&crop=0,0,960,960&sign=9c0e2c292504f9642a51d5d10997d550&ava=1" alt='error' />
                    </Carousel.Item>
                )}
            </Carousel>
            <Card.Header>Card Header</Card.Header>
            <Card.Body>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <ButtonToolbar className='d-grid gap-2 d-md-block d-flex justify-content-end'>
                    <Button variant="light">{<EditIcon />}</Button>
                    <Button className='ml-2' variant="light">{<DeleteIcon />}</Button>
                </ButtonToolbar>
            </Card.Footer>
        </Card>
    )
};

export default CardElement;