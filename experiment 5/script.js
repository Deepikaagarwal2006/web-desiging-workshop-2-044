let employees = [];

function addEmployee() {
  const name = document.getElementById("name").value.trim();
  const empId = document.getElementById("empId").value.trim();
  const salary = parseFloat(document.getElementById("salary").value);
  const department = document.getElementById("department").value.trim();
  const output = document.getElementById("output");

  if (!name || !empId || isNaN(salary) || !department) {
    output.innerHTML = "<p class='result-box'>Please fill all fields correctly.</p>";
    return;
  }

  const employee = {
    name,
    empId,
    salary,
    department
  };

  employees.push(employee);

  output.innerHTML = `<p class='result-box'>Employee added successfully.</p>`;

  document.getElementById("name").value = "";
  document.getElementById("empId").value = "";
  document.getElementById("salary").value = "";
  document.getElementById("department").value = "";
}

function displayEmployees() {
  const output = document.getElementById("output");

  if (employees.length === 0) {
    output.innerHTML = "<p class='result-box'>No employees added yet.</p>";
    return;
  }

  output.innerHTML = employees.map(emp => `
    <div class="employee-card">
      <p><strong>Name:</strong> ${emp.name}</p>
      <p><strong>ID:</strong> ${emp.empId}</p>
      <p><strong>Salary:</strong> ₹${emp.salary}</p>
      <p><strong>Department:</strong> ${emp.department}</p>
    </div>
  `).join("");
}

function filterHighSalary() {
  const output = document.getElementById("output");
  const filtered = employees.filter(emp => emp.salary > 50000);

  if (filtered.length === 0) {
    output.innerHTML = "<p class='result-box'>No employees with salary greater than ₹50,000.</p>";
    return;
  }

  output.innerHTML = filtered.map(emp => `
    <div class="employee-card">
      <p><strong>Name:</strong> ${emp.name}</p>
      <p><strong>ID:</strong> ${emp.empId}</p>
      <p><strong>Salary:</strong> ₹${emp.salary}</p>
      <p><strong>Department:</strong> ${emp.department}</p>
    </div>
  `).join("");
}

function totalSalary() {
  const output = document.getElementById("output");
  const total = employees.reduce((sum, emp) => sum + emp.salary, 0);

  output.innerHTML = `<p class="result-box">Total Salary Payout: ₹${total.toFixed(2)}</p>`;
}

function averageSalary() {
  const output = document.getElementById("output");

  if (employees.length === 0) {
    output.innerHTML = "<p class='result-box'>No employees available to calculate average salary.</p>";
    return;
  }

  const avg = employees.reduce((sum, emp) => sum + emp.salary, 0) / employees.length;
  output.innerHTML = `<p class="result-box">Average Salary: ₹${avg.toFixed(2)}</p>`;
}

function countDepartment() {
  const dept = prompt("Enter department name to count employees:");
  const output = document.getElementById("output");

  if (!dept) {
    output.innerHTML = "<p class='result-box'>Department input cancelled.</p>";
    return;
  }

  const count = employees.filter(
    emp => emp.department.toLowerCase() === dept.toLowerCase()
  ).length;

  output.innerHTML = `<p class="result-box">Employees in ${dept}: ${count}</p>`;
}