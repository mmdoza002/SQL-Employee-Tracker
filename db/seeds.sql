INSERT INTO department (department_name)
VALUES ("Managment"),
("Superviors"),
("Quality Managment"),
("Leads"),
("Crew Members");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager",(65,453),1),
("Supervisor",(45,075),2),
("Quality Manegment",(42,783),3),
("Lead",(39,316),4),
("Employee",(28,735),5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Martin","Mendoza",5,1),
("Itzel","Mariana",3,1),
("Brenda","Alvis",5),
("Leah","Nelson",1),
("Ian","Darland",2,1),
("Matthew","Castoreno",4,1),
("Kyle","Baca",5),
("Julie","Gonzales",2,1),
("Elsa","Alejo",1),
("Veronica","Vargas",3,1),
("Nancy","Leija",5,1),
("Olivia","Rodrigo",4,1),
("Bruno","Mars",5,1),
("Miley","Cyrus",5,1),
("Ash","Kachum",5,1);




