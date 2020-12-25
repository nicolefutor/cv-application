import './EducationInfo.css'
import React from 'react'

class EducationInfo extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            items: [],
            item: {
                degree: '',
                name: '',
                from: '',
                to: '',
            }
        };

        this.showForm = this.showForm.bind(this);
        this.handleChangeDegree = this.handleChangeDegree.bind(this);
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeFrom = this.handleChangeFrom.bind(this);
        this.handleChangeTo = this.handleChangeTo.bind(this);
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
            return (
                <li>
                    <div>
                        <h3>{obj.degree}</h3>
                        <p>{obj.name}</p>
                        <p>{obj.from}-{obj.to}</p>
                    </div>
                </li>
            )
        })
        return(
            <div>
                <h2>Education</h2>
                <ul>{itemList}</ul>
                <button onClick={this.showForm} ref={this.buttonRef}>Add</button>
                <form ref={this.formRef} className='hidden' onSubmit={this.handleSubmit}>
                    <label for='degree'>Degree</label>
                    <input type='text' id='degree' onChange={this.handleChangeDegree} />
                    <label for='name'>School name</label>
                    <input type='text' id='name' onChange={this.handleChangeName} />
                    <label for='from'>From</label>
                    <input type='text' id='from' placeholder='YYYY' onChange={this.handleChangeFrom} />
                    <label for='to'>To</label>
                    <small>Leave blank if ongoing</small>
                    <input type='text' id='to' placeholder='YYYY' onChange={this.handleChangeTo} />
                    <button type='submit'>Add</button>
                </form>
            </div>
        );
    }
}

export default EducationInfo;