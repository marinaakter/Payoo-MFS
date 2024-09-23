//add money to the account

//step 1:
document.getElementById("btn-add-money").addEventListener("click", function (event) {
    event.preventDefault();

    //step 2:
    const addMoneyInput = document.getElementById("input-add-money").value;
    const pinNumberInput = document.getElementById("input-pin-number").value;
    //step 3:
    if (pinNumberInput === "123") {
      //step 4:
      const balance = parseFloat(document.getElementById("account-balance").innerText)      
      const addMoneyNumber = parseFloat(addMoneyInput)
      updatedBalance = balance + addMoneyNumber
      document.getElementById('account-balance').innerText = updatedBalance

    } else {
      alert("Failed to Add Money! Please try again.");
    }
  });
