import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { storage } from 'Fb';
import { createCollection } from 'Api';
import { fetchCollections } from 'Actions';
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
        console.log('handleCreateCollection');
        const storageRef = storage.ref();
        storageRef
            .child(`cover_image/${coverImage.name}`)
            .put(coverImage, { contentType: coverImage.type })
            .then(snapshot => {
                snapshot.ref
                    .getDownloadURL()
                    .then(image => {
                        createCollection({
                            title,
                            description,
                            privacyMode,
                            coverImage: image
                        });
                    })
                    .catch(err => console.err(err));
            })
            .catch(err => console.log(' error uploading file: ', err));
    };

    const toggleCollectionForm = val => {
        if (!val) {
            setCoverImage(null);
        }
        setCreateCollection(val);
    };

    const handleUpload = files => {
        console.log({ files });
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
