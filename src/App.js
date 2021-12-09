import layrlogo from "./layrlabs.png";
import layrswap from "./layrswap.png";
import layrbridge from "./layrbridge.png";
import layrlogs from "./layrlogs.png"
import cardanoscan from "./cardanoscan.png"
import "./App.css";
import { Image, Navbar, Tab, Tabs, Container, Col, Row, InputGroup, FormControl, DropdownButton, Dropdown, Button, ButtonGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}


function App() {




  return (
    <div className="App">


      <Navbar className="Navbar" bg="#025fa2" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
              alt=""
              src={layrlogo}
              width="400"
              height="100"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
        </Container>
      </Navbar>

      <header className="App-header">

        <Container>
          <Row>
            <Row xs={10} md={10}>
                <Button><img src={layrswap} alt="swap" onClick={() => openInNewTab('http://18.223.121.155:30000/#/swap')}
                /></Button>
              </Row>
              <div style={{ height: 25 }}></div>
              <Row xs={10} md={10}>
                <Button><img src={layrbridge} alt="bridge" onClick={() => openInNewTab('http://18.217.79.46:30001/')}
                /></Button>
              </Row>
              <div style={{ height: 25 }}></div>
              <Row xs={10} md={10}>
                <Button><img src={layrlogs} alt="logs" onClick={() => openInNewTab('')}
                /></Button>
              </Row>
              <div style={{ height: 25 }}></div>
              <Row xs={10} md={10}>
                <Button>
                  <img src= {cardanoscan} alt="testnet" onClick={() => openInNewTab('https://testnet.cardanoscan.io/')}/>
                </Button>
              </Row>
              <div style={{ height: 25 }}></div>            
          </Row>
        </Container>


      </header>
    </div>
  );
}




export default App;
