/**
 * Created by Brandon on 7/20/2017.
 */
import * as ActionTypes from './actionTypes';
import AuthorApi from '../api/mockAuthorApi';

export function loadAuthorsSuccess(authors){
    return { type:ActionTypes.LOAD_AUTHORS_SUCCESS, authors };
}

export function loadAuthors() {
    return function (dispatch) {
        return AuthorApi.getAllAuthors().then(authors => {
            dispatch(loadAuthorsSuccess(authors));
        }).catch(error =>{
            throw (error);
        });
    };
}