import Fruits from "./Fruits";
import FruitsCounter from "./FruitsCounter";

function FruitsPage(props){
    return(
        <div>
            <h1>Where should the state go?</h1>
            <Fruits fruits={props.fruits}/>
            <FruitsCounter fruits={props.fruits}/>
        </div>
    );
}
    
export default FruitsPage