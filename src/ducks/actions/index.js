import { getCollections, postCollection } from 'Api';
import { v4 as uuid } from 'uuid';
import { storage } from 'Fb';

import * as Types from './types';

export const fetchCollections = () => dispatch => {
    dispatch({ type: Types.FETCH_COLLECTIONS_PENDING });

    getCollections()
        .then(({ data }) => {
            dispatch({
                type: Types.FETCH_COLLECTIONS_SUCCESS,
                payload: data
            });
        })
        .catch(err => dispatch({ type: Types.FETCH_COLLECTIONS_FAILED, payload: err }));
};
export const createCollection = body => dispatch => {
    dispatch({ type: Types.CREATE_COLLECTION_PENDING });

    const storageRef = storage.ref();
    storageRef
        .child(`cover_image/${uuid()}`)
        .put(body.coverImage, { contentType: body.coverImage.type })
        .then(snapshot => {
            snapshot.ref
                .getDownloadURL()
                .then(url => postCollection({ ...body, coverImage: url }))
                .then(({ data }) => {
                    dispatch({
                        type: Types.CREATE_COLLECTION_SUCCESS,
                        payload: data
                    });
                });
        })
        .catch(err => dispatch({ type: Types.CREATE_COLLECTION_FAILED, payload: err }));
};
