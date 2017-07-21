/**
 * Created by Brandon on 7/20/2017.
 */
import * as ActionTypes from './actionTypes';
import courseAPI from '../api/mockCourseApi';

export function loadCoursesSuccess(courses){
    return { type:ActionTypes.LOAD_COURSES_SUCCESS, courses };
}

export function loadCourses() {
    return function (dispatch) {
        return courseAPI.getAllCourses().then(courses => {
            dispatch(loadCoursesSuccess(courses));
        }).catch(error =>{
            throw (error);
        });
    };

}