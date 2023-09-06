import { Component } from '@angular/core';
import { Employee } from './employee.model';

@Component({
  selector: 'app-root',
  template: `
    <h1>Employee Details</h1>
    
    <div class="form">
      <label for="eid">Employee ID:</label>
      <input type="number" id="eid" [(ngModel)]="employee.eid" required>
      
      <label for="ename">Employee Name:</label>
      <input type="text" id="ename" [(ngModel)]="employee.ename" required>
      
      <label for="department">Department:</label>
      <input type="text" id="department" [(ngModel)]="employee.department" required>
      
      <label for="salary">Salary:</label>
      <input type="number" id="salary" [(ngModel)]="employee.salary" required>
      
      <label for="doj">Date of Joining:</label>
      <input type="date" id="doj" [(ngModel)]="employee.doj" required>
      
      <button (click)="addEmployee()">Add Employee</button>
    </div>
    
    <table>
      <thead>
        <tr>
          <th>Employee ID</th>
          <th>Employee Name</th>
          <th>Department</th>
          <th>Salary</th>
          <th>Date of Joining</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let emp of employees">
          <td>{{ emp.eid }}</td>
          <td>{{ emp.ename }}</td>
          <td>{{ emp.department }}</td>
          <td>{{ emp.salary }}</td>
          <td>{{ emp.doj | date }}</td>
        </tr>
      </tbody>
    </table>
  `,
  styles: [`
    .form {
      margin-bottom: 20px;
    }
  `]
})
export class AppComponent {
  employee: Employee = {
    eid: 0,
    ename: '',
    department: '',
    salary: 0,
    doj: new Date()  // Updated initial value to new Date()
  };
  
  employees: Employee[] = [];
  
  addEmployee() {
    this.employees.push({ ...this.employee });
    this.employee = {
      eid: 0,
      ename: '',
      department: '',
      salary: 0,
      doj: new Date()  // Resetting to new Date() after adding an employee
    };
  }
}
