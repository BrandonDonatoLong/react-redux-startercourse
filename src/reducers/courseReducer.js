/**
 * Created by Brandon on 7/20/2017.
 */
import * as ActionTypes from '../actions/actionTypes';
export default function courseReducer(state = [], action){
    switch (action.type){
        case ActionTypes.CREATE_COURSE:
            return [...state,
                Object.assign({}, action.course)
            ];

        default:
            return state;
    }
}