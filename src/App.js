import { ToggleButton, ToggleButtonGroup, Form } from 'react-bootstrap';
import './App.css';
import CardElement from './components/card';
import './styles/_all.scss';
import FormatListBulletedIcon from '@material-ui/icons/FormatListBulleted';
import ViewComfyIcon from '@material-ui/icons/ViewComfy';
import ListElement from './components/listItem';

function App() {

  const myFunction = () => {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }

  return (
    <div>
      <label id="switch" className="switch">
        <input type="checkbox" onClick={() => myFunction()} id="slider" />
        <span className="slider round"></span>
      </label>
      <h1>Switch me!</h1>
      <Form>
        <Form.Group>
          <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
        </Form.Group>
      </Form>
      <ToggleButtonGroup className='d-flex justify-content-center align-items-center' type="radio" name="options" defaultValue={0}>
        {[<ViewComfyIcon />, <FormatListBulletedIcon />].map((item, index) =>
          <ToggleButton key={index} value={index} variant='light' checked={0 === index}>{item}</ToggleButton>
        )}
      </ToggleButtonGroup>
      <ListElement />
      <CardElement />
    </div>
  );
}

export default App;
