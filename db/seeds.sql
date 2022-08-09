INSERT INTO department (department_name)
VALUES ("Managment"),
("Superviors"),
("Quality Managment"),
("Leads"),
("Crew Members");

INSERT INTO roles (title, salary, department_id)
VALUES ("Manager",(65,453),1),
("Supervisor",(45,075),2),
("Quality Manegment",(42,783),3)
("Lead",(39,316),4),
("Employee",(28,735),5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
("Martin","Mendoza",5,0),
("Itzel","Mariana",3,0),
("Brenda","Alvis",5,0),
("Leah","Nelson",1,142),
("Ian","Darland",2,0),
("Matthew","Castoreno",4,0),
("Kyle","Baca",5,0),
("Julie","Gonzales",2,0),
("Elsa","Alejo",1,245),
("Veronica","Vargas",3,0),
("Nancy","Leija",5,0),
("Olivia","Rodrigo",4,0),
("Bruno","Mars",5,0),
("Miley","Cyrus",5,0),
("Ash","Kachum",5,0);




