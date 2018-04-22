import { ADD_SUP } from './action-types';

const initialState = {
    allSups: [ { author:'Gene', key:'11', body:'I will not eat that', time:'10:41' } ]
};

let rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_SUP:
            return {...state, allSups: [...state.allSups, action.payload]};
        default:
            return state;
    }
};






export default rootReducer;