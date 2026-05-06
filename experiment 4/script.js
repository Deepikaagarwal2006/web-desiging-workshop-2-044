function calculateResult(){
    let n = document.getElementById("subject").value;
    let i ;
    let total=0;
    for(i=0;i<n;i++){
        let x = (parseFloat(prompt("Enter the subject No. " + (i+1))));
        total += x;
    }
        let average = total/n;
        let grade;
        if(average >= 80.0){
            grade = "A";
        }else if(average >= 65.0){
            grade = "B";
        }else if(average >= 50.0){
            grade = "C";
        }else if(average >= 35.0){
            grade = "D";
        }else{
            grade = "F";
        }

    let r = document.getElementById("result").innerHTML = 
        "Total Marks: " + total.toFixed(1) + "<br>" + 
        "Average Marks: " + average.toFixed(1) + "<br>" + 
        `<span class="grade grade-${grade}">Grade: ${grade}</span>`;
}