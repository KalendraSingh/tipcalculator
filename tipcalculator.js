let percentage = document.getElementById("percentageTip");
let billInput = document.getElementById("billAmount");
let errorMessages = document.getElementById("errorMessage");

function calculateButton() {

    if (percentage.value === "") {
        errorMessages.textContent = "Plaese Enter a Valid Input";
    } else if (billInput.value === "") {
        errorMessages.textContent = "Plaese Enter a Valid Input";
    } else if (percentage.value === "" && billInput.value === "") {
        errorMessages.textContent = "Plaese Enter a Valid Input";
    } else {
        errorMessages.textContent = "";
        let calculatedTip, percentageTip, billAmount, totalAmount;
        billAmount = parseInt(billInput.value);
        percentageTip = parseInt(percentage.value);
        calculatedTip = (percentageTip / 100) * billAmount;
        totalAmount = calculatedTip + billAmount;

        document.getElementById("tipAmount").value = calculatedTip;
        document.getElementById("totalAmount").value = totalAmount;
    }
}