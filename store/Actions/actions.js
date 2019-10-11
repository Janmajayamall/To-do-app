export const changeScreen = (screeName) => {
    return({
        type:'SET_SCREEN',
        screen:screeName
    })
}

export const addNew = (stateVal) => {
    console.log(stateVal)
    const obj = {
        type: stateVal.selected,
        input: stateVal.inputTex
    }
    return({
        type:'ADD',
        value:obj
    })
}