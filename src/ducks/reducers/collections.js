import * as Types from 'Actions/types';

const initialState = {
    fetchingCollections: false,
    userCollections: [],
    errorFetchingCollections: false
};

const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_COLLECTIONS:
            return { ...initialState, fetchingCollection: true };
        case Types.FETCH_COLLECTIONS_SUCCESS:
            return { ...state, fetchingCollection: false, userCollections: action.payload };
        case Types.FETCH_COLLECTIONS_FAILED:
            return { ...state, fetchingCollection: false, errorFetchingCollections: true };
        default:
            return state;
    }
};

export default collectionReducer;
