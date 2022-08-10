const express = require('express');
const inquirer = require('inquirer');
const mysql = require('mysql');
const cTable = require('console.table');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: 'localhost',
    port:3306,
    user: 'root',
    password: 'pretzels2',
    database: 'company_db',
  });

  db.connect(err => {
    if (err) throw err;
    console.log ("Welcome to HEB's employee tracker") 
    frontMenu();
  });
 
const frontMenu = () => {
  inquirer.prompt({
    message: 'Welcome',
    name: 'menu',
    type: 'list',
    choices: [ 
      'View all departments',
      'View all roles',
      'View all employees',
      'Add a department',
      'Add a role',
      'Add a employee',
      'Terminate Server',
    ],
  })

.then(respond => {
  switch (respond.menu) {
  case 'View all departments':
    viewDepartment();
    break;
  case 'View all roles':
    viewRole();
    break;
  case 'View all employees':
    viewEmployees();
    break;
  case 'Add a department':
    addDepartment();
    break;
  case 'Add a role':
    addRole();
    break;
  case 'Add an employee':
    addEmployee();
    break;
    case "Terminate Server":
          db.end();
          break;
        default:
          db.end();
      }
    });
};

const viewDepartment = () => {

db.query( 'SELECT * FROM department',function (err,res) {
    if (err) 
   throw err;
  console.table(res);
  frontMenu();
});
};


const viewRole = () => {
  db.query( 'SELECT * FROM roles',function (err,res) {
    if (err) 
    throw err;
    console.table(res);
    frontMenu();
  });
};

const viewEmployees = () => {
  db.query( 'SELECT * FROM employee',function (err,res) {
    if (err) 
    throw err;
    console.table(res);
    frontMenu();
  });
};
  
const addDepartment = () => {
  inquirer.prompt([
      {
        name: 'department',
        type: 'input',
        message: 'What is the department name?',
      },
    ])
    .then(answer => {
      db.query(
        'SELECT employee.id, first_name, last_name, title, salary, department_name, manager_id FROM department JOIN roles ON department.id = roles.department_id JOIN employee ON roles.id = employee.role_id;',
        [answer.department],
        function (err, res) {
          if (err) throw err;
          console.log('Department added!');
          frontMenu();
        }
      );
    });
};

const addRole = () => {
  inquirer.prompt([
      {
        name: 'roles',
        type: 'input',
        message: 'What is the role title?',
      },
      {
        name: 'salary',
        type: 'input',
        message: 'What is the salary for this role?',
      },
      {
        name: 'department_id',
        type: 'input',
        message: 'What is the department ID number?',
      },
    ])
    .then(answer => {
      db.query(
        'INSERT INTO roles (title, department_id, salary) VALUES (?, ?, ?)',
        [answer.title, answer.department_id, answer.salary],
        function (err, res) {
          if (err) throw err;
          console.log('Role added!');
          frontMenu();
        }
      );
    });
};

const addEmployee = () => {
  inquirer.prompt([
      {
        name: 'first_name',
        type: 'input',
        message: "What is the employee's first name?",
      },
      {
        name: 'last_name',
        type: 'input',
        message: "What is the employee's last name?",
      },
      {
        name: 'role_id',
        type: 'input',
        message: "What is the employee's id?",
      },
      {
        name: 'manager_id',
        type: 'input',
        message: 'What is the manager Id?',
      },
    ])
    .then(answer => {
      db.query(
        'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)',
        [answer.nameFirst, answer.nameLast, answer.role_id, answer.manager_id],
        function (err, res) {
          if (err) throw err;
          console.log('Employee added!');
          
        }
      );
    });
};

app.use((req, res) => {
  res.status(404).end();
});
