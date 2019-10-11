const defaultState = 'ALL_NOTES'

export default (state=defaultState, action)=>{
    console.log(action)
    switch(action.type){
        case('SET_SCREEN'):
            return (action.screen);
        default:
            return state;
    }
}