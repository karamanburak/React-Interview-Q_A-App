import { useState } from 'react';
import data from '../helpers/data';
import { arrowdown, arrowup } from '../helpers/icons';

const Question = () => {
    const [answerVisible, setAnswerVisible] = useState(true)
    return (
        <div className='question-container'>
            {data.map((item,i) => {
                return (
                    <div key={i} className='question-card'>{item.id}-{item.question}
                        <div className='arrow-down'>      
                         {answerVisible 
                        ? (
                            <div onClick={() => setAnswerVisible(false)} > {arrowdown} </div>
                        ) : (
                            <div onClick={()=> setAnswerVisible(true)}> {arrowup} </div>
                        )
                            
                        }
                        </div>
                       
                        <div>
                            
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Question