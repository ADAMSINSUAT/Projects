import * as actions from "./actionType";

export const onUpdate = (val) => {
    return {
        type: actions.UPDATE,
        payload: val
    }
}
export const onUpdateClass = (val) => {
    return {
        type: actions.CLASSUPDATE,
        payload: val
    }
}
export const onUpdateFunction = (val) => {
    return {
        type: actions.FUNCTIONUPDATE,
        payload: val
    }
}
// export const onChangeName = (val) =>{
//     return{
//         type: actions.NAME,
//         payload: val,
//     }
// }

// export const onChangeDOB = (val) =>{
//     return{
//         type: actions.DOB,
//         payload: val,
//     }
// }

// export const onChangeAge = (val) =>{
//     return{
//         type: actions.AGE,
//         payload: val,
//     }
// }

// export const onChangeOccupation = (val) =>{
//     return{
//         type: actions.OCC,
//         payload: val,
//     }
// }

// export const onChangeEmail = (val) =>{
//     return{
//         type: actions.EMAIL,
//         payload: val,
//     }
// }

// export const onChangeContactNo = (val) =>{
//     return{
//         type: actions.CN,
//         payload: val,
//     }
// }