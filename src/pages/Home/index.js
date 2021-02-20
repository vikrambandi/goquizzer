import React from 'react';
import { Button, Card, Col, Layout, Row, Space, Spin } from 'antd';
import { EditOutlined, EllipsisOutlined, FolderAddFilled, SettingOutlined } from '@ant-design/icons';
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
        <Layout>
            <Header path="home" />
            <Layout>
                <Sider />
                <Layout.Content style={{ padding: '0 24px', marginTop: '20px', minHeight: 280 }}>
                    {isFetching ? (
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
                    {Boolean(userCollections.length) && (
                        <Row gutter={[16, 16]}>
                            {userCollections.map(col => (
                                <Col key={col.title}>
                                    <Card
                                        hoverable
                                        bordered
                                        style={{ width: 250, borderRadius: '10px' }}
                                        cover={<img alt={col.title} src={col.coverImage} />}
                                        // actions={[
                                        //     <SettingOutlined key="setting" />,
                                        //     <EditOutlined key="edit" />,
                                        //     <EllipsisOutlined key="ellipsis" />
                                        // ]}
                                    >
                                        <Card.Meta title={col.title} description={col.description} />
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    )}
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
            </Layout>
            {/* <Link to="create">create documents</Link> */}
            <Footer />
        </Layout>
    );
};

export default Home;
