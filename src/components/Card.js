import React from 'react';
import { Row, Card, Button, Col, ButtonGroup} from 'react-bootstrap';
import Confetti from 'react-dom-confetti';

const config = {
    angle: 94,
    spread: 122,
    startVelocity: 67,
    elementCount: 182,
    decay: 0.82
};

// say a message
const speak = (text, callback) => {
    var u = new SpeechSynthesisUtterance();
    u.text = text;
    u.lang = 'en-US';
 
    u.onend = function () {
        if (callback) {
            callback();
        }
    };
 
    u.onerror = function (e) {
        if (callback) {
            callback(e);
        }
    };
 
    speechSynthesis.speak(u);
}

const FlashCard = (props) => {
    return <Row className="justify-content-center align-items-center h-100 loginArea" style={{textAlign: "center", marginTop:"-100px"}}>
        <Col>
            <Card.Body>
            <Card.Title onClick={(() => speak(props.word))}>
                {props.word}
            </Card.Title>
                <Row className="h-100 align-items-center">
                    <h4 className="hi">Hi Tobey!</h4>
                    <br/>
                    <hr />
                    <ButtonGroup className="margin-auto">
                        <Button variant="secondary" onClick={props.prev}>previous</Button>
                        <Confetti active={ props.showConfetti } config={ config } />
                        <Button variant="success" onClick={props.know}>know it!</Button>
                        <Button variant="primary" onClick={props.next}>next</Button>
                    </ButtonGroup>
                </Row>
            </Card.Body>
        </Col>
    </Row>
}

export default FlashCard