//add money to the account

//step 1:
document.getElementById("btn-add-money").addEventListener("click", function (event) {
    event.preventDefault();

    //step 2:
    const addMoneyInput = getInputFieldById('input-add-money')
    const pinNumberInput = getInputFieldById('input-pin-number')
    
    
    //step 3:
    if (pinNumberInput === 123) {
      //step 4:
      const balance = getTextFieldById('account-balance') 
      console.log(balance);
      updatedBalance = balance + addMoneyInput
      document.getElementById('account-balance').innerText = updatedBalance

    } else {
      alert("Failed to Add Money! Please try again.");
    }
  });
