import { useState } from 'react';
const useHome = () => {
    const [showCreateCollection, setCreateCollection] = useState(false);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [privacyMode, setPrivacyMode] = useState('public');
    const [fileList, setFileList] = useState([]);

    const handleCreateCollection = val => {
        if (!false) {
            setFileList([]);
        }
        setCreateCollection(val);
    };

    const handleUpload = files => {
        console.log('Upload event:', files);
        if (Array.isArray(files)) {
            return files;
        }
        setFileList(files && files.fileList);
    };

    const handleRemoveFile = setFileList([]);

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
        description,
        privacyMode,
        showCreateCollection,
        handleRemoveFile,
        handleChange,
        handleUpload,
        handleCreateCollection
    };
};
export default useHome;
