import React from 'react';
import uniqid from 'uniqid';

class EducationInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            degree: '',
            name: '',
            from: '',
            to: ''
        };

        this.showForm = this.showForm.bind(this);
        this.handleChangeDegree = this.handleChangeDegree.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeFrom = this.handleChangeFrom.bind(this);
        this.handleChangeTo = this.handleChangeTo.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);

        this.formRef = React.createRef();
        this.buttonRef = React.createRef();
    }

    showForm() {
        this.formRef.current.classList.remove('hidden');
        this.buttonRef.current.classList.add('hidden');
    }

    handleSubmit(e) {
        e.preventDefault();
        this.formRef.current.classList.add('hidden');
        this.buttonRef.current.classList.remove('hidden');
        this.setState({
            items: this.state.items.concat({
                degree: this.state.degree,
                name: this.state.name,
                from: this.state.from,
                to: this.state.to
            }),
            degree: '',
            name: '',
            from: '',
            to: '',
        });
    }

    handleCancel() {
        this.formRef.current.classList.add('hidden');
        this.buttonRef.current.classList.remove('hidden');
        this.setState({
            degree: '',
            name: '',
            from: '',
            to: ''
        });
    }

    handleChangeDegree(e) {
        this.setState({
            degree: e.target.value
        });
    }

    handleChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }

    handleChangeFrom(e) {
        this.setState({
            from: e.target.value
        });
    }

    handleChangeTo(e) {
        this.setState({
            to: e.target.value
        });
    }

    render() {
        const itemList = this.state.items.map((obj) => {
            if(obj.degree) {
                return (
                    <li key={uniqid()}>
                        <div>
                            <h3>{obj.degree}</h3>
                            <p>{obj.name}</p>
                            <p>{obj.from}-{obj.to}</p>
                        </div>
                    </li>
                );
            }
            else {
                return '';
            }
        })
        return(
            <div>
                <h2>Education</h2>
                <ul>{itemList}</ul>
                <button onClick={this.showForm} ref={this.buttonRef}>Add</button>
                <form ref={this.formRef} className='hidden' onSubmit={this.handleSubmit}>
                    <label htmlFor='degree'>Degree</label>
                    <input type='text' id='degree' onChange={this.handleChangeDegree} value={this.state.degree}/>
                    <label htmlFor='name'>School name</label>
                    <input type='text' id='name' onChange={this.handleChangeName} value={this.state.name}/>
                    <label htmlFor='from'>From</label>
                    <input type='text' id='from' placeholder='YYYY' onChange={this.handleChangeFrom} value={this.state.from}/>
                    <label htmlFor='to'>To</label>
                    <small>Leave blank if ongoing</small>
                    <input type='text' id='to' placeholder='YYYY' onChange={this.handleChangeTo} value={this.state.to}/>
                    <button type='submit'>Add</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>
            </div>
        );
    }
}

export default EducationInfo;