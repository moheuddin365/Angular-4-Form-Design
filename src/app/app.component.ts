import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular2 CRUD Operation with an Array';
  employees = [
    {name: 'Moheuddin', position: 'Manager'},
    {name: 'Waliul', position: 'CEO'},
    {name: 'Maya', position: 'CTO'}

  ];
  model: any = {};
  addEmployee() {
    this.employees.push(this.model);
    this.model = {};
  }
  deleteEmployee(i) {
    this.employees.splice(i, 1)
  }
}
