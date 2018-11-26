import React, { Component } from 'react';
import {b} from '../words/words';
import { Col, Row, Container, DropdownButton, Dropdown, ButtonGroup } from 'react-bootstrap';
import FlashCard from '../components/Card';
import { setLearnedWord, /* deleteLearnedWord, */ itExists, filterKnownWords } from '../utils/words';

import './App.css';

let currentWordIndex = parseInt(localStorage.getItem("currentWordIndex")) || 0;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentWord: b[currentWordIndex],
      allWords: b,
      iKnowIt: false,
      knownList: [],
    }
  }
  nextWord = () => {
    if (currentWordIndex === this.state.allWords.length - 1) return;
    localStorage.setItem("currentWordIndex", currentWordIndex)
    this.setState({
      currentWord: this.state.allWords[++currentWordIndex],
      iKnowIt: itExists(this.state.allWords[currentWordIndex])
    }, () => {
      setTimeout(() => {
        this.setState({
          iKnowIt: false,
        })
      }, 100)
    }) 
  }
  previousWord = () => {
    if (currentWordIndex === 0) return;
    localStorage.setItem("currentWordIndex", currentWordIndex)
    this.setState({
      currentWord: this.state.allWords[--currentWordIndex],
      iKnowIt: itExists(this.state.allWords[currentWordIndex])
    }, () => {
      setTimeout(() => {
        this.setState({
          iKnowIt: false,
        })
      }, 100)
    })
  }
  knowIt = (word) => {
    setLearnedWord(this.state.currentWord);
  }

  filterForUnknownWords = () => {
    this.setState({
      allWords: filterKnownWords(b),
    }, () => {
      this.setState({
        currentWord: this.state.allWords[currentWordIndex]
      })
    })
  }
  showAll = () => {
    this.setState({
      allWords: b,
    }, () => {
      this.setState({
        currentWord: this.state.allWords[currentWordIndex]
      })
    })
  }

  render() {
    return (
      <Container className="h-100">
        <Row className="h-100">
          <Col>
            <DropdownButton as={ButtonGroup} title="Tools" id="bg-nested-dropdown" variant="info">
                <Dropdown.Item eventKey="1" onClick={this.filterForUnknownWords}>Show unknown only</Dropdown.Item>
                <Dropdown.Item eventKey="2" onClick={this.showAll} >Show all</Dropdown.Item>
            </DropdownButton>
            <FlashCard showConfetti={this.state.iKnowIt} word={this.state.currentWord} know={this.knowIt} next={this.nextWord} prev={this.previousWord} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
