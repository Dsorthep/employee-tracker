const inquirer = require('inquirer');
const mysql = require('mysql2');
const connection = require('../connection.js');


function updateEmployee(){
        connection.query("SELECT id, first_name, last_name FROM employee", function (err, result) {
            if (err) throw err;
            const employeeName = [];
            for (const i = 0; i < result.length; i++) {
                const choices = result[i].id;
                employeeName.push(choices);
            }
    inquirer.prompt([
        {
        name: "employee",
        type: "list",
        message: "Please select the employee name you like to update",
        choices: employeeName
        },
        {
            name: "newTitle",
            type: "list",
            message: "What is the employee's new role?",
            choices:
                [  "Sales Lead",
                "SalesPerson",
                "Lead Engineer" ,
                "Software Engineer",
                "Accountant",
                "Legal Team Lead",
                "Lawyer",
                "Lead Engineer"
                ]
        }
    ])
    .then(async function(answer) {
        const employeeName = answer.employee;
        if(answer.newTitle === "Sales Lead"){
            const roleID = 1;
        }else  if(answer.newTitle === "SalesPerson"){
            const roleID = 2;
        }else if(answer.newTitle === "Lead Engineer"){
            const roleID = 3;
        }else if(answer.newTitle === "Software Engineer"){
            const roleID = 4;
        }else if(answer.newTitle === "Accountant"){
            const roleID = 5;
        }else if(answer.newTitle === "Legal Team Lead"){
            const roleID = 6;
        }else if(answer.newTitle === "Lawyer"){
            const roleID = 7;
        }else if(answer.newTitle === "Lead Engineer"){
            const roleID = 8;
        }
        connection.query(`UPDATE employee SET role_id = "${roleID}" WHERE id = "${employeeName}"`, function(err, res) {
            if (err) throw err;

            console.log(res.affectedRows + "  Record UPDATED");
            
    })
})
        })
    }

    module.exports = updateEmployee;