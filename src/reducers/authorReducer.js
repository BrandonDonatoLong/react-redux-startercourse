/**
 * Created by Brandon on 7/20/2017.
 */
import initialState from './initialState';
import * as ActionTypes from '../actions/actionTypes';
export default function authorReducer(state = initialState.authors, action){
    switch (action.type){
        case ActionTypes.LOAD_AUTHORS_SUCCESS:
            return action.authors;
        default:
            return state;
    }
}