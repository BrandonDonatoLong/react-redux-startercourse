/**
 * Created by Brandon on 7/20/2017.
 */
import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
//this isn't needed right now but wanted to add it now in preparation for multiple reducers.
//the {courses} is called shorthanded objects by ES6 it is when the left hand of the object is the same as the right hand of the object.
const rootReducer = combineReducers({
    courses,
    authors
});

export default rootReducer;