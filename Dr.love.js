
function calculateLove() {
    var loveScore = Math.random() * 100; 
    loveScore = Math.round(loveScore) +1;
    
    var yourName = document.getElementById("your-name").value;
    var yourCrush = document.getElementById("your-crush").value;
    var resultDiv = document.getElementById("result");
    resultDiv.innerText = `Dr.Love thinks, there is ${loveScore}% chance of a relationship between ${yourName} & ${yourCrush}'s`;
}


