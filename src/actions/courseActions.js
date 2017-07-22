/**
 * Created by Brandon on 7/20/2017.
 */
import * as ActionTypes from './actionTypes';
import courseAPI from '../api/mockCourseApi';

export function loadCoursesSuccess(courses){
    return { type:ActionTypes.LOAD_COURSES_SUCCESS, courses };
}

export function updateCourseSuccess(course) {
    return {type:ActionTypes.UPDATE_COURSE_SUCCESS, course};
}
export function createCourseSuccess(course) {
    return {type:ActionTypes.CREATE_COURSE_SUCCESS, course};
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

export function saveCourse(course) {
    return function (dispatch, getState) {
        return courseAPI.saveCourse(course).then( savedCourse => {
            course.id !== '' ? dispatch(updateCourseSuccess(savedCourse)) :
                dispatch(createCourseSuccess(savedCourse));
        }).catch(error =>{
            throw (error);
        });
    };
}