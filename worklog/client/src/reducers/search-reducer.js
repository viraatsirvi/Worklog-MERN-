import * as types from '../action/action-type';


const initialState = {

  data: []

};

const searchReducer = function(state = initialState, action) {
    
    switch(action.type) {
        case types.GET_SEARCH_RES:
            
            return Object.assign({}, state, {
            data: action.data
            
            });
           
         default:
                return state;
    }
}


export default searchReducer;