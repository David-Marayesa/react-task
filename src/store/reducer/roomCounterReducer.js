import { moveOutList } from "../../data";

const roomCounterReducer = (state = moveOutList, action) => {
    switch (action.type) {
        case 'FLIP': {
            const index = state.findIndex((item) => item.id !== action.index);
            console.log(index);
            // const newArray = [...state];      //clone the array
            // newArray[index].rooms = + 1      // update the new value

            // console.log(newArray[index]);
            // return {
            //     ...state, //copy the original state
            //     state: newArray
            // }
        }
            
        default:
            return state
    }
}

export default roomCounterReducer;