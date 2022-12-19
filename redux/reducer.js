

const initialState = {

    title: 0
}




export default function reducer (state = {initialState}, action){
    if (action.type === 0){
        return {...state, title: +1}
    }


   else if (action.type === "ON_CHANGE_TITLE"){
        return {...state, title: -1}
    }

    return state
}