import React, { useState } from 'react';
import { ToggleButton, ToggleButtonGroup, Form, Navbar, Nav, Button } from 'react-bootstrap';
//import './App.css';
import CardElement from './components/card';
import './styles/_all.scss';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import ListElement from './components/listItem';
import Switcher from './components/switcher';
import ArrowUpwardOutlinedIcon from '@material-ui/icons/ArrowUpwardOutlined';
import ModalElement from './components/modal';


function App() {

  const [showScroll, setShowScroll] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false)
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
    <div className='container'>
      <span className='logo'></span>
      <h1>Switch me!</h1>
      <Switcher />
      <Navbar collapseOnSelect expand="lg" >
        <Nav.Item>
          <Nav.Link style={{ display: 'inline-block' }} className='text-white mr-3'>Главная</Nav.Link>
        </Nav.Item>
      </Navbar>
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
          <Form.Control type="password" placeholder="Search" className="mr-sm-2" />
          <Form.File multiple required label='Выберите картинку для товара' data-browse='Выбрать' custom />
        </Form.Group>
      </Form>
      <Form.Check type="checkbox" label='CheckBox' />
      <Form.Check type="radio" label='Radio' />
      <ToggleButtonGroup className='d-flex justify-content-center align-items-center' type="radio" name="options" defaultValue={0}>
        {['Клиент', 'Администратор'].map((item, index) =>
          <ToggleButton key={index} value={index} variant='outline-dark' checked={0 === index}>{item}</ToggleButton>
        )}
      </ToggleButtonGroup>
      <Button type='submit' variant='outline-dark' size="lg" block onClick={() => setShowModal(!showModal)}>Модель</Button>
      <ModalElement show={showModal} />
      <ToggleButtonGroup className='d-flex justify-content-center align-items-center' type="radio" name="options" defaultValue={0}>
        {[<ViewComfyIcon />, <FormatListBulletedIcon />].map((item, index) =>
          <ToggleButton key={index} value={index} variant='light' checked={0 === index}>{item}</ToggleButton>
        )}
      </ToggleButtonGroup>
      <ListElement />
      <ListElement />
      <ListElement />
      <ListElement />
      <ListElement />
      <ListElement />
      <CardElement />
      <ArrowUpwardOutlinedIcon className="scrollTop" onClick={scrollTop} style={{ height: 40, display: showScroll ? 'flex' : 'none' }} />
    </div>
  );
}

export default App;
