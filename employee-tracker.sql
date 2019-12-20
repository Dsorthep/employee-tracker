/* SCHEMA FOR MYSQL DATABASE */
DROP DATABASE IF EXISTS employeeTracker_DB;

/* CREATING THE DATABASE */
CREATE DATABASE employeeTracker_DB;
USE employeeTracker_DB;

/* CREATING TABLES FOR DEPARTMENT, ROLE, AND EMPLOYEE */
CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL,
  PRIMARY KEY (id)
);

CREATE TABLE role (
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30),
  salary INT(7),
  department_id INT(50),
  PRIMARY KEY (id)
);

CREATE TABLE employee(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(30),
  last_name VARCHAR(30),
  role_id INT(50),
  PRIMARY KEY (id)
);

INSERT INTO department(name)
VALUES ('Sales'),
       ('Engineering'),
       ('Finance'),
       ('Legal');

INSERT INTO role(title, salary, department_id)
VALUES ('Sales Lead', 100000, 1),
       ('Salesperson', 80000, 1),
       ('Lead Engineer', 150000, 2),
       ('Software Engineer', 120000, 2),
       ('Accountant', 125000, 3),
       ('Legal Team Lead', 250000, 4),
       ('Lawyer', 190000, 4);

INSERT INTO employee(first_name, last_name, role_id)
VALUES ('Jake', 'Peralta', 1),
       ('Charles', 'Boyle', 2),
       ('Amy', 'Santiago', 3),
       ('Rosa', 'Diaz', 4),
       ('Gina', 'Linetti', 5),
       ('Raymond', 'Holt', 6),
       ('Terry', 'Jeffords', 7);

      ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'root';