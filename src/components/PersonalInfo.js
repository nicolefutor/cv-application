import BasicInput from './BasicInput'; 

function PersonalInfo() {
    return(
        <div>
            <BasicInput name='Name' />
            <BasicInput name='Phone' />
            <BasicInput name='Email' />
        </div>
    );
}

export default PersonalInfo; 