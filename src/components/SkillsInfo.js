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
        setSkills(skills.filter((item) => item !== ''));
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

    const handeDelete = (e) => {
        const skill = e.target.parentElement.textContent.replace('x', '');
        const index = skills.indexOf(skill);
        setSkills(skills.filter((item, i) => i !== index));
    }

    const skillsList = skills.map((item) => <li className='my-1 break-words' key={uniqid()}>{item}<button className='mx-2 bg-white shadow-md px-2 py-0 float-right text-red-600' onClick={handeDelete}>x</button></li>);
    const list = skills.length!==0 ? (<ul className='bg-gray-300 p-2 rounded mb-3 list-inside list-disc'>{skillsList}</ul>) : ''; 
    return (
        <div>
            <h2 className='text-3xl mb-1'>Skills</h2>
            <div className='bg-gray-700 inline-block rounded-lg p-4 md:min-w-1/2 md:max-w-3/4 min-w-3/4'>
            {list}
                <button className='mr-2 bg-white shadow-md px-2 py-1' onClick={handleClick} ref={buttonRef}>Add</button>
                <form onSubmit={handleSubmit} ref={formRef} className='hidden'>
                    <input type='text' onChange={handleChange} value={input} />
                    <button className='mx-2 bg-white shadow-md px-2 py-1' onClick={handleCancel} type='button'>Cancel</button>
                    <button className='mr-2 bg-white shadow-md px-2 py-1' type='submit'>Add</button>
                </form>
            </div>
        </div>
    );
}

export default SkillsInfo;