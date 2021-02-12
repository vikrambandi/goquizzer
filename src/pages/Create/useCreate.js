import { useState } from 'react';
import { postGame } from 'Api';

const useCreate = () => {
    const [question, setQuestion] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');

    const testMethod = () => {
        const addSum =
            'vlasdljas cnpasdasdasmcas asdas as;d ' + 'asjd laskdjlajs   askdasd asd asj cjaopoqasdkvnasl vnu;asd';
        return addSum;
    };

    const handleChange = (el, { target: { value } }) => {
        switch (el) {
            case 'question':
                setQuestion(value);
                break;
            case 'option1':
                setOption1(value);
                break;
            case 'option2':
                setOption2(value);
                break;
            case 'option3':
                setOption3(value);
                break;
            case 'option4':
                setOption4(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        postGame({
            question,
            option1,
            option2,
            option3,
            option4
        }).then(res => console.log({ res }));
    };

    return {
        question,
        option1,
        option2,
        option3,
        option4,
        handleChange,
        handleSubmit,
        testMethod
    };
};

export default useCreate;
