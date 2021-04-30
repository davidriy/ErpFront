export class Employee{
  constructor(id: string, name: string, last_name: string, salary: number, document: string) {
    this.id = id;
    this.name = name;
    this.last_name = last_name;
    this.salary = salary;
    this.document = document;
  }
  id: string;
  name: string;
  last_name: string;
  salary: number;
  document: string;
}
