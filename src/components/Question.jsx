import { useState } from "react";
import { arrowdown, arrowup } from "../helpers/icons";
import InterviewAccord from "./InterviewAccord";
import { Container, Row,Card } from "react-bootstrap";


const Question = ({question,answer,i,id}) => {
    const [answerVisible, setAnswerVisible] = useState(true);
    return (
        <Container>
        <Row>
                    <Card key={i} className="question-card">
                    <Card.Body className="d-flex justify-content-between">
                        {id}-{question}
                      
                            {answerVisible ? (
                                <div className="arrow-down" onClick={() => setAnswerVisible(false)} >
                                 {arrowdown}
                                </div>
                            ) : (
                                <div className="arrow-up" onClick={() => setAnswerVisible(true)}>
                                    {arrowup} 
                                </div>
                            )}
                     
                    </Card.Body>
                        {answerVisible ? "" : <InterviewAccord answer={answer} />}
                    </Card>
                  </Row>
           </Container>
    );
};

export default Question;
