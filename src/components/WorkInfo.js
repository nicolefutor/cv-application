import React from 'react';
import uniqid from 'uniqid';

class WorkInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            title: '',
            name: '',
            from: '',
            to: '',
            responsib: ''
        };

        this.showForm = this.showForm.bind(this);
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeFrom = this.handleChangeFrom.bind(this);
        this.handleChangeTo = this.handleChangeTo.bind(this);
        this.handleChangeResponsib = this.handleChangeResponsib.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

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
                title: this.state.title,
                name: this.state.name,
                from: this.state.from,
                to: this.state.to,
                responsib: this.state.responsib
            }),
            title: '',
            name: '',
            from: '',
            to: '',
            responsib: ''
        });
    }

    handleCancel() {
        this.formRef.current.classList.add('hidden');
        this.buttonRef.current.classList.remove('hidden');
        this.setState({
            title: '',
            name: '',
            from: '',
            to: '',
            responsib: ''
        });
    }

    handleChangeTitle(e) {
        this.setState({
            title: e.target.value
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

    handleChangeResponsib(e) {
        this.setState({
            responsib: e.target.value
        });
    }

    render() {
        const itemList = this.state.items.map((obj) => {
            if(obj.title) {
                return (
                    <li key={uniqid()}>
                        <div>
                            <h3>{obj.title}</h3>
                            <p>{obj.name}</p>
                            <p>{obj.from}-{obj.to}</p>
                            {/*Line below splits tasks in textarea into list based on newlines */}
                            <ul>{obj.responsib.split('\n').map((item) => <li key={uniqid()}>{item}</li>)}</ul>
                        </div>
                    </li>
                )
            }
            else {
                return '';
            }
        })
        return(
            <div>
                <h2>Work Experience</h2>
                <ul>{itemList}</ul>
                <button onClick={this.showForm} ref={this.buttonRef}>Add</button>
                <form ref={this.formRef} className='hidden' onSubmit={this.handleSubmit}>
                    <label htmlFor='degree'>Title</label>
                    <input type='text' id='degree' onChange={this.handleChangeTitle} value={this.state.title} />
                    <label htmlFor='name'>Company</label>
                    <input type='text' id='name' onChange={this.handleChangeName} value={this.state.name} />
                    <label htmlFor='from'>From</label>
                    <input type='text' id='from' placeholder='YYYY' onChange={this.handleChangeFrom} value={this.state.from} />
                    <label htmlFor='to'>To</label>
                    <small>Leave blank if ongoing</small>
                    <input type='text' id='to' placeholder='YYYY' onChange={this.handleChangeTo} value={this.state.to} />
                    <label htmlFor='responsib'>Responsibilities</label>
                    <textarea id='responsib' onChange={this.handleChangeResponsib} placeholder='A short description of your responsibilties in that position' value={this.state.responsib} />
                    <button type='submit'>Add</button>
                    <button onClick={this.handleCancel}>Cancel</button>
                </form>
            </div>
        );
    }
}

export default WorkInfo;