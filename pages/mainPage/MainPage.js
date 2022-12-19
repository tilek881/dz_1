import React, {useState} from 'react';
import {useSelector,useDispatch} from "react-redux";


function MainPage() {

    const dispatch = useDispatch()
    const title = useSelector(state => state.title)



        const [counter, setCounter] = useState(0)


        const handleClick1 = () => {
            dispatch({
            type:0
            }
        )
            setCounter(counter + 1)
        }


        const handleClick2 = () => {
          dispatch({
          type:0

          }
        )
            setCounter(counter - 1)
        }




    return (
        <div>
            <h1>{title}</h1>
            <button onClick={handleClick1}>+</button>
            <button onClick={handleClick2}>-</button>
        </div>
    );
}

export default MainPage

