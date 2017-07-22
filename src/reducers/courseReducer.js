/**
 * Created by Brandon on 7/20/2017.
 */
import initialState from './initialState';
import * as ActionTypes from '../actions/actionTypes';
export default function courseReducer(state = initialState.courses, action){
    switch (action.type){
        case ActionTypes.LOAD_COURSES_SUCCESS:
            return action.courses;

        default:
            return state;
    }
}