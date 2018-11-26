import React, { Component } from 'react';
import {b} from '../words/words';
import { Col, Row, Container } from 'react-bootstrap';

import { setLearnedWord, deleteLearnedWord } from '../utils/words';
import './App.css';
let currentWordIndex = 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }
  componentDidMount(){
    console.log(b);
    // setLearnedWord('penis')
    deleteLearnedWord('penis');
  }
  render() {
    return (
      <Container>
        <Row>
          <Col>
            <h1>Hello Tobey!</h1>
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
