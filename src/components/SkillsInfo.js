import uniqid from 'uniqid';
import React, {useState} from 'react';

const SkillsInfo = () => {
    const [skills, setSkills] = useState([]);
    const [input, setInput] = useState('');

    const buttonRef = React.createRef();
    const formRef = React.createRef();

    const handleClick = () => {
        buttonRef.current.classList.add('hidden');
        formRef.current.classList.remove('hidden');
    }

    const handleChange = (e) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        buttonRef.current.classList.remove('hidden');
        formRef.current.classList.add('hidden');
        setSkills(skills.concat(input));
        setInput('');
    }

    const handleCancel = () => {
        buttonRef.current.classList.remove('hidden');
        formRef.current.classList.add('hidden');
        setInput('');
    }

    return (
        <div>
            <h2>Skills</h2>
            <ul>
                {skills.map((item) => <li key={uniqid()}>{item}</li>)}
            </ul>
            <button onClick={handleClick} ref={buttonRef}>Add</button>
            <form onSubmit={handleSubmit} ref={formRef} className='hidden'>
                <input type='text' onChange={handleChange} value={input} />
                <button type='submit'>Add</button>
                <button onClick={handleCancel}>Cancel</button>
            </form>
        </div>
    );
}

export default SkillsInfo;