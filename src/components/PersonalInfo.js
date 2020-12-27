import BasicInput from './BasicInput'; 

function PersonalInfo() {
    return(
        <div>
            <BasicInput name='Name' size='big' />
            <BasicInput name='Phone' size='normal' />
            <BasicInput name='Email' size='normal' />
        </div>
    );
}

export default PersonalInfo; 