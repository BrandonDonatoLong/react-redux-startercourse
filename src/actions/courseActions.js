/**
 * Created by Brandon on 7/20/2017.
 */
import * as ActionTypes from './actionTypes';

export function createCourse(course){
    return { type:ActionTypes.CREATE_COURSE, course };
}
