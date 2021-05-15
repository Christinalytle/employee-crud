import React from 'react'; 
import '../../node_modules/bootstrap/dist/css/bootstrap.css'; 
import EditEmployeeForm from './edit-employee-form'; 

export default class EmployeeCard extends React.Component {
    constructor(props){
        super(props); 

        this.handleDeleteClick = this.handleDeleteClick.bind(this); 
        this.updateEmployee = this.updateEmployee.bind(this); 
    }

    handleDeleteClick() {
        this.props.deleteEmployee(this.props._id); 
    }

    updateEmployee(employee) {
        this.props.updateEmployee(employee); 
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.firstName} {this.props.lastName}</h5>
                    <p className="card-text">{this.props.title} in {this.props.department}</p>
                    <h6>Edit Employee</h6>
                    <EditEmployeeForm {...this.props} updateEmployee={this.props.updateEmployee} />
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger" onClick={this.handleDeleteClick}>Delete</button>
                </div>
            </div>
        )
    }
}