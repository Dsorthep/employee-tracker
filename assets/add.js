const inquirer = require('inquirer');
const mysql = require('mysql2');
const connection = require('../connection.js');

// FUNCTION TO ADD EMPLOYEES
function addEmployee(){
    inquirer.prompt([{
        name: "first_name",
        type: "input",
        message: "What is the employee's first name?",
        validate: function(value){
            const string = value.match(/^\s*\S+.*/);
            if (string) {
              return true;
            } else {
              return "Please enter the Employee's FIRST NAME ";
            }
          }
        },
        {
            name: "last_name",
            type: "input",
            message: "What is the employee's last name?",
            validate: function(value){
                const string = value.match(/^\s*\S+.*/);
                if (string) {
                  return true;
                } else {
                  return "Please enter the Employee's LAST NAME ";
                }
              }
            },
            {
                name: "title",
                type: "list",
                message: "What is the employee's job title?",
                choices: [
                    "Sales Lead",
                    "SalesPerson",
                    "Lead Engineer" ,
                    "Software Engineer",
                    "Accountant",
                    "Legal Team Lead",
                    "Lawyer",
                    "Lead Engineer"
                ],
            }
            ])
        .then(async function(answer){
            const firstName = answer.first_name;
            const lastName = answer.last_name;
            if(answer.title === "Sales Lead"){
                const roleID = 1;
            }else  if(answer.title === "SalesPerson"){
                const roleID = 2;
            }else if(answer.title === "Lead Engineer"){
                const roleID = 3;
            }else if(answer.title === "Software Engineer"){
                const roleID = 4;
            }else if(answer.title === "Accountant"){
                const roleID = 5;
            }else if(answer.title === "Legal Team Lead"){
                const roleID = 6;
            }else if(answer.title === "Lawyer"){
                const roleID = 7;
            }else if(answer.title === "Lead Engineer"){
                const roleID = 8;
            }
            
            connection.query(`INSERT INTO employee (first_name,last_name,role_id) VALUES ("${firstName}","${lastName}","${roleID}")`, function(err, res) {
            if (err) throw err;
            // LOGS ALL OF THE RESULTS
            console.log(res.affectedRows + "  Record Inserted");
    })

    })
}


// FUNCTION TO ADD A DEPARTMENT
function addDepartment(){
    inquirer.prompt([
            {
                name: "department",
                type: "input",
                message: "Please add the department",
                validate: function(value){
                const string = value.match(/^\s*\S+.*/);
                if (string) {
                  return true;
                } else {
                  return "Please enter the DEPARTMENT ";
                }
              }
            }
            ]) .then(async function(answer){
            const department = answer.department;
            connection.query(`INSERT INTO department (name) VALUES ("${department}")`, function(err, res) {
                if (err) throw err;
                // LOGS ALL OF THE RESULTS
                console.log(res.affectedRows + "  Record Inserted");
        })
    })
}


// FUNCTION TO ADD A ROLE
function addRole(){
    inquirer.prompt([
        {
            name: "role",
            type: "input",
            message: "Please add the job title",
            validate: function(value){
            const string = value.match(/^\s*\S+.*/);
            if (string) {
              return true;
            } else {
              return "Please enter the JOB TITLE ";
            }
          }
        },
        {
            name: "salary",
            type: "input",
            message: "Please add the job title's salary",
            validate: function(value){
            const string = value.match(/^\s*\S+.*/);
            if (string) {
              return true;
            } else {
              return "Please enter the SALARY";
            }
          }
        },
        {
            name: "department",
            type: "list",
            message: "Please select the department",
            choices: [
                "Sales",
                "Engineering",
                "Finance",
                "Legal",
                "Quality"
            ]
        }
        ]) .then(async function(answer){
        const title = answer.role;
        const salary = answer.salary;
        if(answer.department === "Sales"){
            const departmentid = 1;
        }else if(answer.department === "Engineering"){
            const departmentid = 2;
        }else if(answer.department === "Finance"){
            const departmentid = 3;
        }else if(answer.department === "Legal"){
            const departmentid = 4;
        }else if(answer.department === "Quality"){
            const departmentid = 5;
        }
        connection.query(`INSERT INTO role (title,salary,department_id) VALUES ("${title}","${salary}","${departmentid}")`, function(err, res) {
            if (err) throw err;
            // LOGS ALL OF THE RESULTS
            console.log(res.affectedRows + "  Record Inserted");
    })
})
}

      module.exports = {addEmployee,addDepartment,addRole};