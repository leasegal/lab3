import Icon from "./Door";
import '../handlers/font-handler.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



let arr =[
  {
    "title":"הוספת תוכן",
    "icon":['fas','user-friends'] 
  },
  {
    "title":"נשמר",
    "icon":['fas','star']

  },
  {
    "title":"היסטוריה",
    "icon":['fas','history'] 

  }

]

function App() {
  return(<div className='flex'>
 {arr.map((el,i)=>
 <Icon key={i} icon={el.icon} title={el.title}/>)}
    
  </div>);
}

export default App;
