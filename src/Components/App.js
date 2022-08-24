import React,{useState} from "react";
import BubbleSort from './BubbleSort'
import './app.css'

const App = ()=>{
    
    

    
    const [state, setState] = useState('home')
    const [mainArray, setMainArray] = useState([])
    const [n,setN] = useState('')

    const onNumberAdd = (e)=>{
        e.preventDefault()
        let temp = mainArray.slice();
        temp.push(parseInt(n))
        setMainArray(temp.slice());
        setN('')
    }
    
    const madeArray = mainArray.map((item,index)=>{
        return (
            <div key={index} className="column eblock">
                <div className="ui fluid card imageItem">
                    <div className="image images"><span>{item}</span></div>
                </div>
            </div>
            )
    })


    if(state ==='home'){
        return(
            <div id="homeContainer">
                <form id='inputForm' className="ui form" onSubmit={(e)=>{onNumberAdd(e)}}>
                <div className="field">
                <label>User Input</label>
                <input id="inputInput"
                className="ui input number" 
                placeholder="Enter Number . . ."
                onChange={(e)=>{setN(e.target.value)}}
                value={n}
                type='number'></input>
                </div>
                
                <button className="ui button">Add</button>
                </form>
                <div className="ui grid" id="madeArrayContainer">{madeArray}</div>
                <button className="ui button" onClick={()=>{setMainArray([])}}>Clear</button>

                <button className="ui button" onClick={()=>{setState('bubble')}}>Bubble Sort</button>
                
            </div>
            ) 
    }
    else if(state==='bubble'){
        return(

        <div id="appContainer">
                <button className="ui button" onClick={()=>{setState('home')}}>Home</button>
                <BubbleSort data={mainArray}/>

        </div>
        )
    }
    
        
}
export default App;