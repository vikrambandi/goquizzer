// collection actions
import { getCollections } from 'Api';

import { CREATE_COLLECTION, FETCH_COLLECTIONS, FETCH_COLLECTIONS_SUCCESS, FETCH_COLLECTIONS_FAILED } from './types';

export const fetchCollections = () => dispatch => {
    dispatch({ type: FETCH_COLLECTIONS });

    getCollections()
        .then(({ data }) => {
            dispatch({
                type: FETCH_COLLECTIONS_SUCCESS,
                payload: data
            });
        })
        .catch(err => dispatch({ type: FETCH_COLLECTIONS_FAILED, payload: err }));
};
export const postCollection = () => dispatch => {
    dispatch({ type: CREATE_COLLECTION });
};
