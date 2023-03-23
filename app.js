const inquirer = require('inquirer');
const mysql = require('mysql');
const consoleTable = require('console.table');

const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'password',
  database: 'employeeinfo',
});

connection.connect((err) => {
  if (err) throw err;
  console.log(`connected as id ${connection.threadId}`);
  start();
});

function start() {
  inquirer()
    .prompt
      name: 'action',
      type; 'list',
      message; 'What would you like to do?',
      choices; [
        'View all employees',
        'View all employees by department',
        'View all employees by manager',
        'View all roles',
        'View all departments',
        'Exit',
      ],

     then((answer)) ; {
      switch (answer.action) {
        case 'View all employees':
          viewAllEmployees();
          break;

        case 'View all employees by department':
          viewEmployeesByDepartment();
          break;

        case 'View all employees by manager':
          viewEmployeesByManager();
          break;


        case 'View all roles':
            viewAllEmployees();
            break;

        case 'View all Departments':
            viewAllEmployees();
            break;


      } }


    }
