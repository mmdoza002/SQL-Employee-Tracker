SELECT employee.id, first_name, last_name, title, salary, department_name, manager_id 
FROM department 
JOIN roles ON department.id = roles.department_id 
JOIN employee ON roles.id = employee.role_id;