//add money to the account
//step 1:
document
  .getElementById("btn-add-money").addEventListener("click", function (event) {
    event.preventDefault();

    //step 2:
    const addMoneyInput = getInputFieldById("input-add-money");
    const pinNumberInput = getInputFieldById("input-pin-number");
    if (isNaN(addMoneyInput)) {
      alert("Failed to Add Money");
      return;
    }

    //step 3:
    if (pinNumberInput === 123) {
      //step 4:
      const balance = getTextFieldById("account-balance");
      console.log(balance);
      updatedBalance = balance + addMoneyInput;
      document.getElementById("account-balance").innerText = updatedBalance;

      const div = document.createElement('div')
        div.classList.add('text-green-500')
        div.innerHTML = `
            <div class="flex items-center space-x-3 bg-green-600 text-white rounded-lg p-3 m-auto">
            <h6 class="text-lg font-bold">Add Money</h6>
            <p>${addMoneyInput} withdraw. New Balance ${updatedBalance} </p>
            </div>
        `
        document.getElementById('transaction-container').appendChild(div)


    } else {
      alert("Failed to Add Money! Please try again.");
    }
  });
