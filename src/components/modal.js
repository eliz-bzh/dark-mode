import React, { useState } from 'react';
import { Col, Form, Modal, Row, Button } from 'react-bootstrap';
import Tooltip from '@material-ui/core/Tooltip';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import TextField from "@material-ui/core/TextField";

const ModalElement = (props) => {

    const [selectedDate, setSelectedDate] = useState(new Date());

    const [types] = useState([
        { id: 1, name: 'Привет' },
        { id: 2, name: 'Как дела' }
    ]);

    const [brands] = useState([
        { id: 1, name: 'Привет' },
        { id: 2, name: 'Как дела' }
    ]);

    const [suppliers] = useState([
        { id: 1, nameOrganization: 'Привет' },
        { id: 2, nameOrganization: 'Как дела' }
    ]);

    return (
        <div className='container'>
            <Modal size='xl'
                {...props}
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Добавление нового товара
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row key={1}>
                        <Col>
                            <Form>
                                <Form.Group>
                                    <div>
                                        <Form.File multiple required label='Выберите картинку для товара' data-browse='Выбрать' custom />

                                    </div>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Дата поставки</Form.Label>
                                    <Form.Control
                                        className='datePicker'
                                        type="date"
                                        name="date"
                                        required
                                        placeholder="Дата поставки" />
                                </Form.Group>
                                <Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Label>Название</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="name"
                                                required
                                                placeholder="Название" />
                                        </Col>
                                        <Col>
                                            <Form.Label>Модель</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="modal"
                                                required
                                                placeholder="Модель" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Label>Категория</Form.Label>
                                            <Form.Control as="select" name='type'>
                                                {types.map(type =>
                                                    <Tooltip key={type.id} title={type.name}>
                                                        <option key={type.id} value={type.id}>{type.name}</option>
                                                    </Tooltip>
                                                )}
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Label>Бренд</Form.Label>
                                            <Form.Control as="select" name='brand'>
                                                {brands.map(brand =>
                                                    <Tooltip key={brand.id} title={brand.name}>
                                                        <option key={brand.id} value={brand.id}>{brand.name}</option>
                                                    </Tooltip>
                                                )}
                                            </Form.Control>
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Label>Год выпуска</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="year"
                                                required
                                                placeholder="Год выпуска" />
                                        </Col>
                                        <Col>
                                            <Form.Label>Срок гарантии</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="warranty"
                                                required
                                                placeholder="Срок гарантии" />
                                        </Col>
                                        <Col>
                                            <Form.Label>Количество на складе</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="amount"
                                                required
                                                placeholder="Количество на складе" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group>
                                    <Row>
                                        <Col>
                                            <Form.Label>Поставщик</Form.Label>
                                            <Form.Control as="select" name='supplier'>
                                                {suppliers.map(supplier =>
                                                    <Tooltip key={supplier.id} title={supplier.nameOrganization}>
                                                        <option key={supplier.id} value={supplier.id}>{supplier.nameOrganization}</option>
                                                    </Tooltip>
                                                )}
                                            </Form.Control>
                                        </Col>
                                        <Col>
                                            <Form.Label>Цена</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="price"
                                                required
                                                placeholder="Цена" />
                                        </Col>
                                    </Row>
                                </Form.Group>
                                <Form.Group>
                                    <Button variant="light" type="submit">
                                        Добавить товар
                                        </Button>
                                </Form.Group>
                            </Form>
                        </Col>
                    </Row>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="light">
                        Закрыть
                        </Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
};

export default ModalElement;