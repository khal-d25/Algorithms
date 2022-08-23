import React,{useState} from "react";
import Array from "./Array";
import './app.css'



const BinarySearch = ()=>{
    

    const [arr,setArray] = useState([])
    const [sarr,setsArray] = useState([])
    const [n, setN] = useState('')
    const [s, setS] = useState('')

    const addNumberToArray = (e)=>{

        e.preventDefault()
        let temp = arr.slice();
        temp.push(parseInt(n));
        setArray(temp.slice())
        temp = temp.sort((a,b)=> a-b);
        setsArray(temp.slice())
        console.log(temp)
        setN('')
        
    }

     const onSrcValue = (e)=>{
         console.log(e)
         setS(parseInt(e))
     }

    const binarySearch = (e,low,high)=>{
        e.preventDefault()
        let post = sarr.slice(low,high)
        console.log(post)
        // let tPost = <Array data={post}/>;
        // document.querySelector('#arrayContainer').append(tPost)
        let mid = Math.floor((low + high)/2)

        if(s===sarr[mid]){
            console.log('found')
        }
        else if(s>sarr[mid]){
            return binarySearch(e,mid+1,high)
        }
        else if(s<sarr[mid]){
            return  binarySearch(e,low,mid-1)
        }
        
    }

    

    return(
        <div id="binarySrcContainer">
            <form id="inputForm" onSubmit={(e)=>{addNumberToArray(e)}}>

            <input 
            onChange={(e)=>{setN(e.target.value)}}
            value={n}
            type='number'></input>
            <button id="addBtn">Add</button>
            </form>
        <div>
        <form onSubmit={(e)=>{binarySearch(e,0,arr.length)}}>

            <input
            onChange={(e)=>{onSrcValue(e.target.value)}}
            value={s}
            type='number'></input>
            <button id="srcBtn">Search</button>
        </form>
            <div id="arrayContainer">
                Original Array
            <Array data={arr}/>
                Sorted Array
            <Array data={sarr}/>
            </div>
            
        </div>
        </div>


    )
}

export default BinarySearch;