import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchCollections, createCollection } from 'Actions';
import { getCollectionsList, isFetchingCollections } from './helpers';

const useHome = () => {
    const [showCreateCollection, setCreateCollection] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [privacyMode, setPrivacyMode] = useState('public');
    const [coverImage, setCoverImage] = useState(null);

    const dispatch = useDispatch();
    const userCollections = useSelector(getCollectionsList);
    const isFetching = useSelector(isFetchingCollections);

    const handleCreateCollection = () => {
        dispatch(
            createCollection({
                title,
                description,
                privacyMode,
                coverImage
            })
        );
    };

    const toggleCollectionForm = val => {
        if (!val) {
            setCoverImage(null);
        }
        setCreateCollection(val);
    };

    const handleUpload = files => {
        setCoverImage(files.file);
        return files && files.fileList;
    };

    const handleRemoveFile = () => setCoverImage(null);

    const handleChange = (el, { target: { value } }) => {
        switch (el) {
            case 'title':
                setTitle(value);
                break;
            case 'description':
                setDescription(value);
                break;
            case 'privacyMode':
                setPrivacyMode(value);
                break;
            default:
        }
    };

    useEffect(() => {
        dispatch(fetchCollections());
    }, [dispatch]);

    return {
        title,
        coverImage,
        description,
        privacyMode,
        userCollections,

        isFetching,
        showCreateCollection,

        handleRemoveFile,
        handleChange,
        handleUpload,
        toggleCollectionForm,
        handleCreateCollection
    };
};
export default useHome;
