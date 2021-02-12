import React from 'react';
import { Modal, Form, Input, Radio, Upload } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

const CollectionCreateForm = ({
    visible,
    title,
    description,
    privacyMode,
    handleChange,
    onCreate,
    onCancel,
    handleUpload,
    handleRemoveFile
}) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="Create a new collection"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form.validateFields()
                    .then(values => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch(info => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <Form
                form={form}
                layout="vertical"
                name="new_collection_form"
                initialValues={{
                    modifier: 'public'
                }}
            >
                <Form.Item
                    name="title"
                    label="Title"
                    value={title}
                    rules={[
                        {
                            required: true,
                            message: 'Please enter the title of collection!'
                        }
                    ]}
                    onChange={e => handleChange('title', e)}
                >
                    <Input />
                </Form.Item>
                <Form.Item name="description" label="Description">
                    <Input.TextArea
                        showCount
                        maxLength={120}
                        value={description}
                        onChange={e => handleChange('description', e)}
                    />
                </Form.Item>
                <Form.Item name="coverImage" label="Cover Image">
                    <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={handleUpload} noStyle>
                        <Upload.Dragger
                            name="cover-image"
                            action="#"
                            beforeUpload={() => false}
                        // onRemove={handleRemoveFile}
                        >
                            <p className="ant-upload-drag-icon">
                                <InboxOutlined />
                            </p>
                            <p className="ant-upload-text">Click or drag file to this area to upload</p>
                        </Upload.Dragger>
                    </Form.Item>
                </Form.Item>
                <Form.Item name="modifier" className="collection-create-form_last-form-item">
                    <Radio.Group value={privacyMode} onChange={e => handleChange('privacyMode', e)}>
                        <Radio value="public">Public</Radio>
                        <Radio value="private">Private</Radio>
                    </Radio.Group>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default CollectionCreateForm;
