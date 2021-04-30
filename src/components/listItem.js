import React from 'react';
import { ButtonToolbar, Col, Container, ListGroup, Row, Button, Carousel } from 'react-bootstrap';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';

const ListElement = () => {
    return (
        <ListGroup.Item className='mr-2 mt-2' >
            <Row>
                <Col md='auto' className='d-flex justify-content-center'>
                    <Carousel style={{ width: `16.4rem` }}>
                        {[1, 2, 3].map(p =>
                            <Carousel.Item key={p}>
                                <img height='230px' className="d-block w-100" src="https://sun9-50.userapi.com/impf/c850136/v850136968/d1b24/-EMtgReU__k.jpg?size=200x0&quality=96&crop=0,0,960,960&sign=9c0e2c292504f9642a51d5d10997d550&ava=1" alt='error' />
                            </Carousel.Item>
                        )}
                    </Carousel>
                </Col>
                <Col>
                    <Container>
                        <h3 align='center' className='mt-2 mb-4'>Apple iPhone 12 Max</h3>
                        <Row>
                            <Col>
                                Категория: Телефоны<br />
                                        Бренд: Apple<br />
                                        Модель: iPhone 12 Max<br />
                                        Год выпуска: 2019<br />
                            </Col>
                            <Col>
                                Срок гарантии: 2<br />
                                        Количество на складе: 231<br />
                                        Поставщик: Поставщик: ОАО "Поставщик", г.Минск, ул.Победителей, 21, +375256758978<br />
                                        Цена: <b>2000 BYN</b>
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
            <hr />
            <ButtonToolbar className='d-grid gap-2 d-md-block d-flex justify-content-end'>
                <Button variant="light">{<EditIcon />}</Button>
                <Button className='ml-2' variant="light">{<DeleteIcon />}</Button>
            </ButtonToolbar>
        </ListGroup.Item>
    )
};

export default ListElement;