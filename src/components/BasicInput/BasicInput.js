import React from 'react';
import './BasicInput.css'

class BasicInput extends React.Component {
    constructor(props) {
        super(props)
        
        this.state = {
            input: '',
            value: ''
        };

        this.buttonRef = React.createRef();
        this.formRef = React.createRef();

        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleClick() {
        this.buttonRef.current.classList.add('hidden');
        this.formRef.current.classList.remove('hidden');
    }

    handleChange(e) {
        this.setState({
            input: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        this.buttonRef.current.classList.remove('hidden');
        this.formRef.current.classList.add('hidden');
        this.setState({
            value: this.state.input,
            input: ''
        });
    }

    render() {
        let label = (this.state.value==='') ? this.props.name : this.state.value;
        return (
            <div>
                <p>{label}</p>
                <button onClick={this.handleClick} ref={this.buttonRef}>Edit</button>
                <form className='hidden' onSubmit={this.handleSubmit} ref={this.formRef}>
                    <input type='text' onChange={this.handleChange}/>
                    <button type='Submit'>Submit</button>
                </form>
            </div>
        );
    }
}

export default BasicInput;