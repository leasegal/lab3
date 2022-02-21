import Icon from "./Door";
import '../handlers/font-handler.js';



let arr =[
  {
    "title":"היסטוריה",
    "icon":"['fas','door-open']"
  },
  {
    "title":"נשמר",
    "icon":"['fas','door-open']"

  },
  {
    "title":"הוספת תוכן",
    "icon":"['fas','door-open']"

  }

]

function App() {
  return(<div className='flex'>
 {arr.map((el,i)=>
 <Icon key={i}  icon={el.icon} title={el.title}/>)}
    
  </div>);
}

export default App;
