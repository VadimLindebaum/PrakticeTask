// Employee data with the new `specialization` property
const employees = [
  { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
  { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
  { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' }
];

const output = document.getElementById('output');

function formatEmployee(emp) {
  return `<div class="employee">${emp.id}. ${emp.name} - ${emp.specialization} <br> Department: ${emp.department} | Age: ${emp.age} | Salary: ${emp.salary}</div>`;
}

function displayEmployees() {
  if (!employees.length) {
    output.innerHTML = 'No employees available.';
    return;
  }
  output.innerHTML = employees.map(formatEmployee).join('');
}

// Example helper (provided as guidance in the lab)
function findEmployeeById(id) {
  const found = employees.filter(e => e.id === id);
  output.innerHTML = found.length ? found.map(formatEmployee).join('') : `No employee found with id ${id}`;
}

// New function: find employees by specialization (filters for 'JavaScript')
function findEmployeeBySpecialization(spec = 'JavaScript') {
  const matches = employees.filter(e => e.specialization && e.specialization.toLowerCase() === spec.toLowerCase());
  if (!matches.length) {
    output.innerHTML = `No employees found with specialization ${spec}.`;
    return;
  }
  output.innerHTML = matches.map(formatEmployee).join('');
}

// Wire up buttons
document.getElementById('btnDisplay').addEventListener('click', displayEmployees);
document.getElementById('btnFindById').addEventListener('click', () => findEmployeeById(2));
document.getElementById('btnFindBySpec').addEventListener('click', () => findEmployeeBySpecialization('JavaScript'));

// Show initial state
output.innerHTML = 'Click a button to run an action.';
