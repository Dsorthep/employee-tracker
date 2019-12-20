// DEPENDENCIES
const inquirer = require('inquirer');
const connection = require("../connection.js");
const { printTable } = require('console-table-printer');


// FUNCTION TO VIEW EMPLOYEES
function viewEmployees(){
        connection.query(`SELECT e.id AS "ID", e.first_name AS "FIRST NAME", e.last_name AS "LAST NAME", 
        r.title AS "ROLE", d.name AS "DEPARTMENT", r.salary AS "SALARY"
        FROM employee e 
        LEFT JOIN role r ON e.role_id=r.id
        LEFT JOIN department d ON r.department_id = d.id`, function(err, res) {
          if (err) throw err;
          // LOGS RESULTS
          printTable(res);
        });
}


// FUNCTION TO VIEW BY DEPARTMENT
function viewByDepartment(){
    inquirer.prompt({
        name: "departments",
        type: "list",
        message: "Please select the department of the employee",
        choices: [ "Sales",
                    "Engineering",
                    "Finance" ,
                    "Legal"]
    })
    .then(async function(answer) {
        const department = answer.departments;
        connection.query(`SELECT e.id AS "ID", e.first_name AS "FIRST NAME", e.last_name AS "LAST NAME", 
        r.title AS "ROLE", d.name AS "DEPARTMENT", r.salary AS "SALARY"
        FROM employee e 
        LEFT JOIN role r ON e.role_id=r.id
        LEFT JOIN department d ON r.department_id = d.id WHERE d.name="${department}"`, function(err, res) {
            if (err) throw err;
            // LOGS RESULTS
            printTable(res);
    })
})
}


// FUNCTION TO VIEW BY ROLES
function viewByRoles(){
    inquirer.prompt({
        name: "roles",
        type: "list",
        message: "Please select the Roles of the employee",
        choices: [ "Sales Lead",
                    "SalesPerson",
                    "Lead Engineer" ,
                    "Software Engineer",
                    "Accountant",
                    "Legal Team Lead",
                    "Lawyer",
                    "Lead Engineer"
                ]
    })
    .then(async function(answer) {
        const role = answer.roles;
        connection.query(`SELECT e.id AS "ID", e.first_name AS "FIRST NAME", e.last_name AS "LAST NAME", 
        r.title AS "ROLE", d.name AS "DEPARTMENT", r.salary AS "SALARY"
        FROM employee e 
        LEFT JOIN role r ON e.role_id=r.id
        LEFT JOIN department d ON r.department_id = d.id WHERE r.title="${role}"`, function(err, res) {
            if (err) throw err;
            // LOGS RESULTS
            printTable(res);
    })
})
}

function viewDepartments(){
    connection.query(`SELECT d.id AS "ID", d.name AS "Department NAME" FROM department d`, function(err, res) {
      if (err) throw err;
      
      printTable(res);
    });
}

function viewRoles(){
    connection.query(`SELECT r.id AS "ID", r.title AS "JOB TITLE", r.salary FROM role r`, function(err, res) {
        if (err) throw err;
        
        printTable(res);
      });
}
module.exports = {viewEmployees,viewByDepartment,viewByRoles,viewDepartments,viewRoles};