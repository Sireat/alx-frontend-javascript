export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const departments = Object.keys(allEmployees);
  let currentDepartmentIndex = 0;
  let currentEmployeeIndex = 0;

  return {
    next: function () {
      if (currentDepartmentIndex >= departments.length) {
        return { done: true };
      }

      const departmentName = departments[currentDepartmentIndex];
      const employees = allEmployees[departmentName];
      
      if (currentEmployeeIndex >= employees.length) {
        currentDepartmentIndex++;
        currentEmployeeIndex = 0;
        return this.next();
      }

      const employee = employees[currentEmployeeIndex];
      currentEmployeeIndex++;

      return { value: employee, done: false };
    },
  };
}
