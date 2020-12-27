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
        this.handleDelete = this.handleDelete.bind(this);

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

    handleDelete(e) {
        const item = e.target.parentElement.firstChild.textContent;
        let index;
        for (let i = 0; i < this.state.items.length; i++) {
            if(this.state.items[i].title === item) {
                index = i;
            }
        }
        this.setState({
            items: this.state.items.filter((x, i) => i !== index)
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
                    <li className='bg-gray-300 rounded-lg mb-3 p-2' key={uniqid()}>
                        <div>
                            <h3 className='text-xl inline-block'>{obj.title}</h3>
                            <button className='mx-2 bg-white shadow-md px-2 py-0 float-right text-red-600' onClick={this.handleDelete}>x</button>
                            <p className='italic'>{obj.name} / {obj.from}-{obj.to}</p>
                            {/*Line below splits tasks in textarea into list based on newlines */}
                            <ul className='list-disc list-inside'>{obj.responsib.split('\n').map((item) => <li key={uniqid()}>{item}</li>)}</ul>
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
                <h2 className='text-3xl mb-1'>Work Experience</h2>
                <div className='p-4 bg-gray-700 inline-block rounded-lg md:min-w-1/2 min-w-3/4'>
                    <ul>{itemList}</ul>
                    <button className='mr-2 bg-white shadow-md px-2 py-1' onClick={this.showForm} ref={this.buttonRef}>Add</button>
                    <form ref={this.formRef} className='hidden space-y-3 bg-gray-300 rounded-lg p-2' onSubmit={this.handleSubmit}>
                        <label htmlFor='degree'>Title</label>
                        <input className='mx-2' type='text' id='degree' onChange={this.handleChangeTitle} value={this.state.title} /><br/>
                        <label htmlFor='name'>Company</label>
                        <input className='mx-2' type='text' id='name' onChange={this.handleChangeName} value={this.state.name} /><br/>
                        <label htmlFor='from'>From</label>
                        <input className='mx-2' type='text' id='from' placeholder='YYYY' onChange={this.handleChangeFrom} value={this.state.from} />
                        <label htmlFor='to'>To</label>
                        <input className='mx-2 w-52' type='text' id='to' placeholder='YYYY, Leave blank if ongoing' onChange={this.handleChangeTo} value={this.state.to} /><br/>
                        <label htmlFor='responsib'>Responsibilities</label><br/>
                        <textarea className='w-full' id='responsib' onChange={this.handleChangeResponsib} placeholder='A short description of your responsibilties in that position' value={this.state.responsib} /><br/>
                        <button className='mr-2 bg-white shadow-md px-2 py-1' onClick={this.handleCancel}>Cancel</button>
                        <button className='mr-2 bg-white shadow-md px-2 py-1' type='submit'>Add</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default WorkInfo;