import React from 'react'; 
import EmployeeCard from './components/employee-card'; 
import { NewEmployeeForm } from './components/new-employee-form'; 
import { employeeService } from './services/employee-service'; 
import '../node_modules/bootstrap/dist/css/bootstrap.css'; 

export default class App extends React.Component {
  constructor(props){
    super(props); 
    this.state = {
      employees: []
    }

    this.addNewEmployee = this.addNewEmployee.bind(this); 
    this.deleteEmployee = this.deleteEmployee.bind(this); 
    this.updateEmployee = this.updateEmployee.bind(this); 
  }

  render() {
    let employeeCards = this.state.employees.map(employee => {
      return <EmployeeCard {...employee} key={employee._id}
        deleteEmployee={this.deleteEmployee}
        updateEmployee={this.updateEmployee} />
    }); 

    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Add Employee</h2>
            <NewEmployeeForm addNewEmployee={this.addNewEmployee} />
          </div>
          <div className="col">
            <h2>Employees</h2>
            {employeeCards}
          </div>
        </div>
      </div>
    );
  }

  _refreshData = async() => {
    const employees = await employeeService.getAll(); 
    this.setState({employees}); 
  }

  componentDidMount() {
    this._refreshData(); 
  }

  addNewEmployee = async(employee) => {
    await employeeService.create(employee); 
    this._refreshData(); 
  }

  updateEmployee = async(employee) => {
    await employeeService.update(employee); 
    this._refreshData(); 
  }

  deleteEmployee = async(id) => {
    await employeeService.delete(id); 
    this._refreshData(); 
  }
}