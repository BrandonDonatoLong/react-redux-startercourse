/**
 * Created by Brandon on 7/20/2017.
 */
import initialState from './initialState';
import * as ActionTypes from '../actions/actionTypes';
export default function courseReducer(state = initialState.courses, action){
    switch (action.type){
        case ActionTypes.LOAD_COURSES_SUCCESS:
            return action.courses;
        case ActionTypes.UPDATE_COURSE_SUCCESS:
            return [
                ...state.filter(course => course.id !== action.course.id),
                Object.assign({},action.course)
            ];
        case ActionTypes.CREATE_COURSE_SUCCESS:
            return [
                ...state,
                Object.assign({},action.course)
            ];
        default:
            return state;
    }
}