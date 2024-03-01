import data  from '../helpers/data';
import { arrowdown,arrowup } from '../helpers/icons';

const Question = () => {
  return (
    <div className='question-container'>
    {data.map((item)=>{
        return(
            <div className='question-card'>{item.id}-{item.question}
            <div className='arrow-down'>
            {arrowdown}
            </div>
            </div>
            )
    })}
    </div>
  )
}

export default Question