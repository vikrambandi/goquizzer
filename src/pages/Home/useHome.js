import { useState } from 'react';
import { storage } from 'Fb';

const useHome = () => {
    const [showCreateCollection, setCreateCollection] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [privacyMode, setPrivacyMode] = useState('public');
    const [coverImage, setCoverImage] = useState(null);

    const handleCreateCollection = () => {
        console.log('handleCreateCollection');
        const storageRef = storage.ref();
        // 1.first upload the image to storage
        storageRef
            .child('cover_image/' + coverImage.name)
            .put(coverImage, { contentType: coverImage.type })
            .then(snapshot => console.log(snapshot))
            .catch(err => console.log(' error uploading file: ', err));
        // 2. fetch the image url from storage upload response
        // 3. add  collection values to database
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
                return;
        }
    };

    return {
        title,
        coverImage,
        description,
        privacyMode,
        showCreateCollection,
        handleRemoveFile,
        handleChange,
        handleUpload,
        toggleCollectionForm,
        handleCreateCollection
    };
};
export default useHome;
