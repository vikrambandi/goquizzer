import React from 'react';
import { Button, Col, Input, Row } from 'antd';
import TextArea from 'antd/lib/input/TextArea';
// import Header from '../Header';
import useCreate from './useCreate';
import Footer from '../../components/Footer/index';

import styles from './style.module.scss';

const Create = () => {
    const { question, option1, option2, option3, option4, handleChange, handleSubmit } = useCreate();
    return (
        <div>
            {/* <Header /> */}

            <form onSubmit={handleSubmit} className={styles.questionsForm}>
                <Row justify="center">
                    <TextArea
                        id="question"
                        label="Question"
                        placeholder="Add your option"
                        value={question}
                        rows={3}
                        onChange={e => handleChange('question', e)}
                    />
                </Row>
                <Row justify="center">
                    <Col xs={24} md={12}>
                        <Input
                            id="option-1"
                            label="Option 1"
                            placeholder="Add your option"
                            value={option1}
                            onChange={e => handleChange('option1', e)}
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <Input
                            id="option-2"
                            label="Option 2"
                            placeholder="Add your option"
                            value={option2}
                            onChange={e => handleChange('option2', e)}
                        />
                    </Col>
                </Row>
                <Row justify="center">
                    <Col xs={24} md={12}>
                        <Input
                            id="option-3"
                            label="Option 3"
                            placeholder="Add your option"
                            value={option3}
                            onChange={e => handleChange('option3', e)}
                        />
                    </Col>
                    <Col xs={24} md={12}>
                        <Input
                            id="option-4"
                            label="Option 4"
                            value={option4}
                            placeholder="Add your option"
                            onChange={e => handleChange('option4', e)}
                        />
                    </Col>
                </Row>
                <Button type="primary">Submit</Button>
            </form>
            <Footer />
        </div>
    );
};

export default Create;
