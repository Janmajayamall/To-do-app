const defaultState = [];

export default (state=defaultState, action)=>{
    console.log(action)
    switch(action.type){
        case('ADD'):
            const arr = state;
            arr.push(action.value)
            return (arr);
        default:
            return state;
    }
}