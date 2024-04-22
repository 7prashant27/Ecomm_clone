import React, { useReducer } from 'react'
import { css } from "@emotion/css"

const styles = css`
    display:flex ;
    align-items:center;
    justify-content:center
`


const initial_state_val = {
    count:0
}

 
const reducer = ( state , action ) =>{

    switch(action.type) {

        case 'INCREMENT' : {
            return {count : state.count +1}
        }

        case 'DECREMENT' : {
            return {count : state.count - action.value }

        }
        default :{
            return state
        }
    }
}
 
const Counterplus = () => {

    const [state , dispatch ] = useReducer( reducer, initial_state_val);


    const handleDecrease =()=>{

        dispatch( { type:'DECREMENT' , value:2 })
    }
    const handleIncrease =()=>{
        dispatch( { type:'INCREMENT' , value:2 })
    }    
    
    return (
        <div className={styles}>

            <button onClick={handleIncrease}> + </button>
            {state.count}
            <button onClick={handleDecrease}> - </button>
        </div>
    )
}

export default Counterplus;

