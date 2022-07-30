SELECT role.title AS title, employee.manager_id
FROM employee
JOIN role
ON employee.manager_id = manager.id
ORDER BY employee.manager_id