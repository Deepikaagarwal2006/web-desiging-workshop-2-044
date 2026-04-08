// object 
let employees = {
    Name : "Alice",
   salary :60000,
   dept : "HR"
};

 console.log (employees);

// accessing properties 
console.log (employees.name);
console.log (employees.salary);
console.log (employees.department);

let employees = [];

function addEmployee() {
    let  emp = {
        name: document.getElementById("name").value,
        id: document.getElementById("id").value,
        salary: Number (document.getElementById("salary").value),
        department: document.getElementById("dept").value
    }
    employees.push(emp);
    alert("Employee Added!");
}

function displayEmployees() {
    let output = " ";

    for ( let emp of employees) {
        output += emp.name +  " - " + emp.salary + "<br>";
    }
    document.getElementById("output").innerHTML = output;
}








        // // it allows you to loop through the properties of an object
         //  for loop example  
        // let numbers = [10,20,30 ];
        // for (let num of numbers) {
        //     console.log(num);
        // }




        let employees.filter (emp => emp.salary > 50000); 
        
        for (let emp of result ) {
            output +=  emp.name + " - " + emp.salary + "<br>"







            function totalSalary() {
                let total = 0;
                 for ( let emp of employees) {
                    total += emp.salary;
                    }
                    document.getElementById("output").innerHTML = "Total Salary:Rs " + total;
            }

            function avg = total / employees.length;
            document.getElementById("output").innerHTML = "Average Salary: Rs " + avg;
        }


        function countDept () {
            let deptInput  = prompt  ("Enter Department :");
            let count = 0;
            for (let emp of employees) {
                if (emp.department === deptInput) {
                    // === is a strict equality operator that checks for both value and type equality
                    count++;
                }
            }
            document.getElementById("output").innerHTML = "Employees in " + deptInput + ": " + count;
              "Employees in " + deptInput + ": " + count;
        }


