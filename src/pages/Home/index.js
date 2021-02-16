import React from 'react';
import { Button, Layout, Space, Spin } from 'antd';
import { FolderAddFilled } from '@ant-design/icons';
import Header from 'Components/Header';
import Footer from 'Components/Footer';
import Sider from 'Components/Sider';
import CreateCollection from 'Components/CreateCollection';
import useHome from './useHome';

const Home = () => {
    const {
        title,
        description,
        privacyMode,
        userCollections,
        isFetching,
        showCreateCollection,
        handleChange,
        handleUpload,
        handleRemoveFile,
        toggleCollectionForm,
        handleCreateCollection
    } = useHome();
    return (
        <div>
            <Header path="home" />
            <Sider />
            <Layout.Content style={{ padding: '0 24px', minHeight: 280 }}>
                {!isFetching ? (
                    <Space size="middle">
                        <Spin size="large" />
                    </Space>
                ) : (
                    <Button
                        type="primary"
                        shape="round"
                        icon={<FolderAddFilled />}
                        size="large"
                        onClick={() => toggleCollectionForm(true)}
                    >
                        Create a Collection
                    </Button>
                )}
                {userCollections.length && userCollections.map(col => <span key={col.title}>{col.title}</span>)}
                <CreateCollection
                    title={title}
                    description={description}
                    privacyMode={privacyMode}
                    handleChange={handleChange}
                    visible={showCreateCollection}
                    onCreate={handleCreateCollection}
                    onCancel={() => toggleCollectionForm(false)}
                    handleUpload={handleUpload}
                    handleRemoveFile={handleRemoveFile}
                />
            </Layout.Content>
            {/* <Link to="create">create documents</Link> */}
            <Footer />
        </div>
    );
};

export default Home;
