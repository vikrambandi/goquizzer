import * as Types from 'Actions/types';

const initialState = {
    fetchingCollections: false,
    creatingCollection: false,
    userCollections: [],
    errorFetchingCollections: false,
    errorCreatingColelction: false,
    isCollectionFormOpen: false
};

const collectionReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_COLLECTIONS_PENDING:
            return { ...state, fetchingCollection: true };
        case Types.FETCH_COLLECTIONS_SUCCESS:
            return { ...state, fetchingCollection: false, userCollections: action.payload };
        case Types.FETCH_COLLECTIONS_FAILED:
            return { ...state, fetchingCollection: false, errorFetchingCollections: true }; // TO-DO
        case Types.CREATE_COLLECTION_PENDING:
            return { ...state, creatingCollection: true };
        case Types.CREATE_COLLECTION_SUCCESS:
            return { ...state, creatingCollection: false, userCollections: [...state.userCollections, action.payload] };
        case Types.CREATE_COLLECTION_FAILED:
            return { ...state, creatingCollection: false, errorCreatingColelction: true }; // TO-DO
        default:
            return state;
    }
};

export default collectionReducer;
