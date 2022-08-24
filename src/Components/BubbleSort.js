import React from "react";
import './app.css'
import Array from './Array'


const BubbleSort = (props)=>{

    let stat = 0;

    

    const pauser = ()=>{
        return new Promise(resolve=>{
            let go = ()=>{
                stat = 0;
            resolve("resolved");
            }

            document.addEventListener('wheel',(e)=>{
                if(e.deltaY>0){
                    go();
                }
        
            })

        })
    }

    const sortArray = async()=>{

        document.getElementById('sortBtn').style.display = 'none';
        alert('scroll down for step wise sorting')
        let currentArray = []
        
        let list = document.querySelectorAll('.block')
        // console.log(list[0].children[0].children)
        let n = list.length
        for(let i =0; i<n;i++){
            currentArray.push(parseInt(list[i].children[0].innerText))
        }
        // console.log(currentArray)
        // document.getElementById('0').style.order = 1;
        // document.getElementById('1').style.order = 0;
        // let one = currentArray[0];
        // let two = currentArray[1];
        // currentArray[0] = two;
        // currentArray[1] = one;
        // console.log(currentArray)

        for(let i =0;i<n-1;i++){
            for(let j =0;j<n-1-i;j++){
                // console.log(j, 'J')
                stat =1;
                let one = j;
                let two = j +1;
                let newL = document.querySelectorAll('.block')
                
                
                let elOne = [];
                newL.forEach(element => {
                    // element.children[0].style.backgroundColor = 'white'
                    if(element.style.order==one || element.style.order==two){
                        element.children[0].style.backgroundColor = 'green'
                        elOne.push(element)
                    }
                });
                
                await pauser();
                    // console.log(elOne)

                if(currentArray[one]>currentArray[two]){
                    
                    

                    // if(stat ===1) await pauser();

                    // elOne[0].style.order = two.toString()
                    // elOne[1].style.order = one.toString()
                    elOne[0].style.order = two.toString();
                    elOne[1].style.order = one.toString();
                    elOne[0].children[0].style.backgroundColor = 'orange';
                    elOne[1].children[0].style.backgroundColor = 'orange';
                    // document.getElementById(two.toString()).style.order = one.toString();
                    
                    let valOne = currentArray[one];
                    let valtwo = currentArray[two];
                    currentArray[one] = valtwo;
                    currentArray[two] = valOne;
                    // console.log(currentArray)

                    await pauser();
                    


                    
                }

                newL.forEach(element => {
                    element.children[0].style.backgroundColor = 'white'
                    
                });

                
            }
            
        }

        alert('array sorted')
        
    }

    // const sortArray = async ()=>{
    //     for(let i = 0;i<10;i++){
    //         stat =1;
    //         console.log(i)
    //         if(stat ===1) await pauser();
    //     }
    // }


    return(
        <div id="bubbleSortContainer">
            <Array data={props.data}/>
            <button id="sortBtn" className="ui button" onClick={sortArray}>Sort</button>
        </div>
        ) 
        
}
export default BubbleSort;