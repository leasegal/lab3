import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{ useState } from 'react';
import '../handlers/font-handler.js';

/* class Door extends Component {
    constructor(props){
        super(props);
        this.state={isOpen:true}
        this.door = false
    }
    opposite=()=>{
      this.setState({isOpen:!this.state.isOpen})
    }

  render() {
    const coco  = this.state.isOpen;
    console.log(coco)
    return (
    <>
    <button className="button" onClick={this.opposite}>
      Click to {coco?'close':'open'}
      <FontAwesomeIcon  icon={coco?['fas','door-open']:['fas','door-closed']}/>
    </button>
    <div>{coco}</div>
    </>
    );
  }
} */

//החלק הטוב עושה ירוק רק לשם ניסוי על הפרויקט של ריאקט
/* const Door = ()=>  {
  const[stateDoor,setStateDoor]=useState({isOpen:true})
  const[nameGroup,changeNameGroup]=useState('mintaka')

  const coco  = stateDoor.isOpen;

  const opposite=()=>{
    setStateDoor({...stateDoor,isOpen:!stateDoor.isOpen})
    changeNameGroup(nameGroup=='mintaka'?'webschool':'mintaka')
    console.log(stateDoor)
  }
    return ( <div className="door">
    <button className="button" onClick={opposite}>
      Click to {coco?'close':'open'}
    </button> 
    <div className='status'>
    <FontAwesomeIcon  icon={coco?['fas','door-open']:['fas','door-closed']}/>
    </div>
    <div>name group: {nameGroup}</div>   
    </div>);
}


export default Door;
 */
const Icon =(props)=>{
  return(
      <div>
          <div className="icon">{props.icon}</div>
          <div>{props.title}</div>
      </div>
  )
}
export default Icon
