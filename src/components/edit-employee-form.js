import React from 'react'; 
import '../../node_modules/bootstrap/dist/css/bootstrap.css'

export default class EditEmployeeForm extends React.Component {
    constructor(props) {
        super(props); 
        this.state = {
            firstName : props.firstName,
            lastName : props.lastName,
            title: props.title, 
            department: props.department,
            _id: props._id
        }

        this.handleChange = this.handleChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }

    handleChange(event) {
        const target = event.target; 
        const value = target.value; 
        const name = target.name; 

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.props.updateEmployee(this.state); 
        event.preventDefault(); 
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstNameInput">First Name</label>
                    <input name="firstName" value={this.state.firstName} type="text" className="form-contorl" id="firstNameInput"
                    onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="lastNameInput">Last Name</label>
                    <input name="lastName" value={this.state.lastName} type="text" className="form-contorl" id="lastNameInput"
                    onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="titleInput">Title</label>
                    <input name="title" value={this.state.title} type="text" className="form-contorl" id="titleInput"
                    onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label htmlFor="departmentInput">Department</label>
                    <input name="department" value={this.state.department} type="text" className="form-contorl" id="departmentInput"
                    onChange={this.handleChange}/>
                </div>
                <button type="submit" className="btn btn-primary">Update</button>
            </form>
        )
    }
}