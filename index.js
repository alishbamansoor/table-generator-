function generateTable() {
    const number = parseInt(document.getElementById("number").value);
    const range = parseInt(document.getElementById("range").value);
    const resultDiv = document.getElementById("result");

    if (isNaN(number) || isNaN(range)) {
        resultDiv.innerText = "Please enter valid numbers.";
        return;
    }

    let output = "";
    for (let i = 1; i <= range; i++) {
        output += `${number} x ${i} = ${number * i}\n`;
    }

    resultDiv.innerText = output;
}